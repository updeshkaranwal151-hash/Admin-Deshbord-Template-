
import React from 'react';
import KanbanBoard from '../components/kanban/KanbanBoard';

const KanbanPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Kanban Board</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Visualize your workflow and manage tasks.</p>
      </div>
      <KanbanBoard />
    </div>
  );
};

export default KanbanPage;
