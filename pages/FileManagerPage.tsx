
import React from 'react';
import Card from '../components/shared/Card';
import FileManager from '../components/filemanager/FileManager';

const FileManagerPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">File Manager</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Organize and manage your files and folders.</p>
      </div>
      <Card>
        <FileManager />
      </Card>
    </div>
  );
};

export default FileManagerPage;
