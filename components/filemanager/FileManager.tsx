import React, { useState, useEffect, useRef } from 'react';
import { MOCK_FILES } from '../../constants';
import type { FileItem } from '../../types';
import { FolderIcon, DocumentIcon, PhotographIcon, VideoCameraIcon, SearchIcon, DotsVerticalIcon } from '../shared/Icons';
import Modal from '../shared/Modal';
import { useToast } from '../../hooks/useToast';

const getFileIcon = (type: FileItem['type']) => {
    switch (type) {
        case 'folder':
            return <FolderIcon className="h-12 w-12 text-yellow-500" />;
        case 'image':
            return <PhotographIcon className="h-12 w-12 text-purple-500" />;
        case 'video':
            return <VideoCameraIcon className="h-12 w-12 text-red-500" />;
        case 'document':
            return <DocumentIcon className="h-12 w-12 text-blue-500" />;
        default:
            return <DocumentIcon className="h-12 w-12 text-gray-500" />;
    }
};

const FileManager: React.FC = () => {
    const [files, setFiles] = useState<FileItem[]>(MOCK_FILES);
    const [isUploadModalOpen, setUploadModalOpen] = useState(false);
    const [newFileUploadName, setNewFileUploadName] = useState('');
    const { addToast } = useToast();
    
    // State for rename and delete
    const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
    const [renamingFileId, setRenamingFileId] = useState<string | null>(null);
    const [newFileName, setNewFileName] = useState('');
    const [fileToDelete, setFileToDelete] = useState<FileItem | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setActiveMenuId(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleAddFile = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newFileUploadName.trim()) {
            addToast('Please enter a file name.', 'error');
            return;
        }

        const fileExtension = newFileUploadName.split('.').pop()?.toLowerCase();
        let fileType: FileItem['type'] = 'other';

        if (['png', 'jpg', 'jpeg', 'gif', 'svg'].includes(fileExtension || '')) {
            fileType = 'image';
        } else if (['pdf', 'docx', 'txt', 'md'].includes(fileExtension || '')) {
            fileType = 'document';
        } else if (['mp4', 'mov', 'avi', 'webm'].includes(fileExtension || '')) {
            fileType = 'video';
        }

        const newFile: FileItem = {
            id: `file-${Date.now()}`,
            name: newFileUploadName,
            type: fileType,
            size: `${(Math.random() * 50 + 0.1).toFixed(1)} MB`,
            modifiedDate: new Date().toISOString().split('T')[0],
        };

        setFiles(prevFiles => [newFile, ...prevFiles]);
        setUploadModalOpen(false);
        setNewFileUploadName('');
        addToast('File uploaded successfully!', 'success');
    };

    const handleToggleMenu = (fileId: string) => {
        setActiveMenuId(activeMenuId === fileId ? null : fileId);
    };

    const handleStartRename = (item: FileItem) => {
        setRenamingFileId(item.id);
        setNewFileName(item.name);
        setActiveMenuId(null);
    };

    const handleRenameSubmit = (e: React.FormEvent, fileId: string) => {
        e.preventDefault();
        if (!newFileName.trim()) {
            addToast('File name cannot be empty.', 'error');
            return;
        }
        setFiles(files.map(f => (f.id === fileId ? { ...f, name: newFileName.trim() } : f)));
        setRenamingFileId(null);
        addToast('File renamed successfully!', 'success');
    };

    const handleRequestDelete = (item: FileItem) => {
        setFileToDelete(item);
        setActiveMenuId(null);
    };

    const handleConfirmDelete = () => {
        if (fileToDelete) {
            setFiles(files.filter(f => f.id !== fileToDelete.id));
            addToast('File deleted successfully!', 'success');
            setFileToDelete(null);
        }
    };

  return (
    <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="relative w-full sm:w-64">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                </span>
                <input
                    type="text"
                    placeholder="Search files..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
            </div>
            <button
                onClick={() => setUploadModalOpen(true)}
                className="w-full sm:w-auto px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition duration-300"
            >
                Upload File
            </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {files.map(item => (
                <div key={item.id} className="group relative bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg flex flex-col items-center text-center hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors duration-200">
                    {getFileIcon(item.type)}
                    {renamingFileId === item.id ? (
                        <form onSubmit={(e) => handleRenameSubmit(e, item.id)} className="w-full mt-2">
                             <input
                                type="text"
                                value={newFileName}
                                onChange={(e) => setNewFileName(e.target.value)}
                                onBlur={() => setRenamingFileId(null)}
                                className="text-sm text-center bg-transparent w-full border-b-2 border-primary-500 focus:outline-none"
                                autoFocus
                            />
                        </form>
                    ) : (
                       <p className="mt-2 font-medium text-sm text-gray-800 dark:text-gray-200 truncate w-full">{item.name}</p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.size}</p>
                    
                    <div className="absolute top-2 right-2" ref={activeMenuId === item.id ? menuRef : null}>
                        <button onClick={() => handleToggleMenu(item.id)} className="p-1 rounded-full opacity-0 group-hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-opacity">
                            <DotsVerticalIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        </button>
                        {activeMenuId === item.id && (
                            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                                <div className="py-1">
                                    <button onClick={() => handleStartRename(item)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Rename</button>
                                    <button onClick={() => handleRequestDelete(item)} className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">Delete</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>

        {/* Upload Modal */}
        <Modal isOpen={isUploadModalOpen} onClose={() => setUploadModalOpen(false)} title="Upload a New File">
            <form onSubmit={handleAddFile} className="space-y-4">
                <div>
                    <label htmlFor="fileName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">File Name</label>
                    <input
                        type="text"
                        id="fileName"
                        value={newFileUploadName}
                        onChange={(e) => setNewFileUploadName(e.target.value)}
                        placeholder="e.g., quarterly-report.pdf"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-transparent"
                        autoFocus
                    />
                </div>
                <div className="mt-4 p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-center">
                  <p className="text-gray-500 dark:text-gray-400">
                      This is a simulation. Enter a file name above and click "Upload".
                  </p>
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                     <button type="button" onClick={() => setUploadModalOpen(false)} className="px-4 py-2 border rounded-md">Cancel</button>
                     <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">Upload</button>
                </div>
            </form>
        </Modal>

        {/* Delete Confirmation Modal */}
        <Modal isOpen={!!fileToDelete} onClose={() => setFileToDelete(null)} title="Confirm File Deletion">
          <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                  Are you sure you want to permanently delete this file? This action cannot be undone.
                  <br />
                  <strong className="font-semibold text-gray-800 dark:text-gray-100 mt-2 block break-all">"{fileToDelete?.name}"</strong>
              </p>
              <div className="flex justify-end space-x-4">
                  <button
                      onClick={() => setFileToDelete(null)}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                      Cancel
                  </button>
                  <button
                      onClick={handleConfirmDelete}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-gray-800 transition-colors"
                  >
                      Delete
                  </button>
              </div>
          </div>
      </Modal>
    </div>
  );
};

export default FileManager;