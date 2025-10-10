import React, { useState, useMemo } from 'react';
import type { Task } from '../../types';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useSound } from '../../hooks/useSound';
import { SOUNDS } from '../../sounds';
import { PencilIcon, TrashIcon, XIcon } from '../shared/Icons';
import Modal from '../shared/Modal';

type FilterType = 'all' | 'active' | 'completed';

const TasksManager: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editingTaskText, setEditingTaskText] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const { playSound } = useSound();

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskText.trim() === '') return;

    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText.trim(),
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setNewTaskText('');
    playSound(SOUNDS.SUCCESS);
  };

  const handleToggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    playSound(SOUNDS.CLICK);
  };
  
  const handleRequestDelete = (task: Task) => {
      setTaskToDelete(task);
  }
  
  const handleCancelDelete = () => {
      setTaskToDelete(null);
  }

  const handleConfirmDelete = () => {
    if (taskToDelete) {
        setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
        playSound(SOUNDS.ERROR);
        setTaskToDelete(null);
    }
  };
    
  const handleStartEditing = (task: Task) => {
    setEditingTaskId(task.id);
    setEditingTaskText(task.text);
    playSound(SOUNDS.CLICK);
  };

  const handleCancelEditing = () => {
    setEditingTaskId(null);
    setEditingTaskText('');
  }

  const handleSaveEdit = (e: React.FormEvent) => {
      e.preventDefault();
      if (editingTaskText.trim() === '') return;
      setTasks(tasks.map(task => 
          task.id === editingTaskId ? {...task, text: editingTaskText.trim()} : task
      ));
      handleCancelEditing();
      playSound(SOUNDS.SUCCESS);
  }

  const filteredTasks = useMemo(() => {
    if (filter === 'active') {
      return tasks.filter(task => !task.completed);
    }
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  }, [tasks, filter]);

  const activeTasksCount = useMemo(() => tasks.filter(task => !task.completed).length, [tasks]);

  return (
    <div className="space-y-6">
      <form onSubmit={handleAddTask} className="flex space-x-2">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition duration-300 disabled:opacity-50"
          disabled={!newTaskText.trim()}
        >
          Add Task
        </button>
      </form>
      
      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-b dark:border-gray-700 py-2 px-1 space-y-2 sm:space-y-0">
          <span className="text-sm text-gray-500 dark:text-gray-400">{activeTasksCount} items left</span>
          <div className="flex space-x-1">
              {(['all', 'active', 'completed'] as FilterType[]).map(f => (
                  <button 
                    key={f} 
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${filter === f ? 'border border-primary-500 text-primary-600 dark:text-primary-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    >
                      {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
              ))}
          </div>
      </div>

      <ul className="space-y-3">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`group flex items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg transition-all duration-300 ease-in-out ${
              task.completed ? 'opacity-60' : 'opacity-100'
            }`}
          >
            {editingTaskId === task.id ? (
              <form onSubmit={handleSaveEdit} className="flex-grow flex items-center space-x-2">
                <input
                  type="text"
                  value={editingTaskText}
                  onChange={(e) => setEditingTaskText(e.target.value)}
                  className="flex-grow px-2 py-1 border-b-2 border-primary-500 bg-transparent focus:outline-none text-gray-800 dark:text-gray-100"
                  autoFocus
                  onKeyDown={(e) => e.key === 'Escape' && handleCancelEditing()}
                />
                <button type="submit" className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm transition-colors">Save</button>
                <button type="button" onClick={handleCancelEditing} className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <XIcon className="h-5 w-5" />
                </button>
              </form>
            ) : (
              <>
                <input
                  id={`task-${task.id}`}
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task.id)}
                  className="h-5 w-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
                />
                <label
                  htmlFor={`task-${task.id}`}
                  className={`ml-3 flex-grow cursor-pointer transition-all duration-300 ease-in-out ${
                    task.completed
                      ? 'line-through text-gray-500 dark:text-gray-400'
                      : 'text-gray-800 dark:text-gray-100'
                  }`}
                >
                  {task.text}
                </label>
                <div className="space-x-1 flex-shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={() => handleStartEditing(task)}
                    className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="Edit task"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleRequestDelete(task)}
                    className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    aria-label="Delete task"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      <Modal isOpen={!!taskToDelete} onClose={handleCancelDelete} title="Confirm Task Deletion">
          <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                  Are you sure you want to delete this task? This action cannot be undone.
                  <br />
                  <strong className="font-semibold text-gray-800 dark:text-gray-100 mt-2 block">"{taskToDelete?.text}"</strong>
              </p>
              <div className="flex justify-end space-x-4">
                  <button
                      onClick={handleCancelDelete}
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

export default TasksManager;