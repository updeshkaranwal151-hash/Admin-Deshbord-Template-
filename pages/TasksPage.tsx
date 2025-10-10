import React from 'react';
import Card from '../components/shared/Card';
import TasksManager from '../components/tasks/TasksManager';

const TasksPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Task Management</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Stay organized and keep track of your to-dos.</p>
      </div>
      <Card>
        <TasksManager />
      </Card>
    </div>
  );
};

export default TasksPage;
