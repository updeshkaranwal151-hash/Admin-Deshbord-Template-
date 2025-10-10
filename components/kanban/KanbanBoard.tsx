
import React from 'react';
import { MOCK_KANBAN_TASKS } from '../../constants';
import type { KanbanTask } from '../../types';
import { PlusIcon, DotsVerticalIcon } from '../shared/Icons';

const priorityColors = {
  high: 'bg-red-500',
  medium: 'bg-orange-500',
  low: 'bg-green-500',
};

const columnStyles = {
    todo: {
        bg: 'bg-blue-100 dark:bg-blue-900/50',
        text: 'text-blue-800 dark:text-blue-200'
    },
    inprogress: {
        bg: 'bg-yellow-100 dark:bg-yellow-900/50',
        text: 'text-yellow-800 dark:text-yellow-200'
    },
    done: {
        bg: 'bg-green-100 dark:bg-green-900/50',
        text: 'text-green-800 dark:text-green-200'
    }
}

const KanbanCard: React.FC<{ task: KanbanTask }> = ({ task }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4 cursor-grab hover:shadow-lg transition-shadow duration-200">
        <div className="flex justify-between items-start">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100">{task.title}</h4>
            <span className={`h-2 w-2 rounded-full ${priorityColors[task.priority]}`} title={`Priority: ${task.priority}`}></span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{task.description}</p>
        <div className="flex justify-between items-center mt-4">
            <img src={task.userAvatar} alt="User" className="h-6 w-6 rounded-full" />
            <DotsVerticalIcon className="h-5 w-5 text-gray-400" />
        </div>
    </div>
);

const KanbanColumn: React.FC<{ title: string; tasks: KanbanTask[]; status: keyof typeof columnStyles }> = ({ title, tasks, status }) => {
    const styles = columnStyles[status];
    return (
        <div className={`p-4 rounded-lg flex-1 ${styles.bg}`}>
            <div className="flex justify-between items-center mb-4">
                <h3 className={`font-bold uppercase text-sm ${styles.text}`}>{title} ({tasks.length})</h3>
                <button className={`p-1 rounded-md ${styles.text} hover:bg-black/10`}>
                    <PlusIcon className="h-5 w-5" />
                </button>
            </div>
            <div className="space-y-4">
                {tasks.map(task => <KanbanCard key={task.id} task={task} />)}
            </div>
        </div>
    );
};


const KanbanBoard: React.FC = () => {
    const todoTasks = MOCK_KANBAN_TASKS.filter(t => t.status === 'todo');
    const inProgressTasks = MOCK_KANBAN_TASKS.filter(t => t.status === 'inprogress');
    const doneTasks = MOCK_KANBAN_TASKS.filter(t => t.status === 'done');

  return (
    <div className="flex flex-col lg:flex-row gap-6">
        <KanbanColumn title="To Do" tasks={todoTasks} status="todo" />
        <KanbanColumn title="In Progress" tasks={inProgressTasks} status="inprogress" />
        <KanbanColumn title="Done" tasks={doneTasks} status="done" />
    </div>
  );
};

export default KanbanBoard;
