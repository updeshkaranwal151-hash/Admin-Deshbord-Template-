
import React from 'react';
import Card from '../shared/Card';
import type { Metric } from '../../types';
import { ArrowUpIcon, ArrowDownIcon } from '../shared/Icons';

const MetricCard: React.FC<Metric> = ({ title, value, change, changeType, icon: Icon }) => {
  const isIncrease = changeType === 'increase';
  const changeColor = isIncrease ? 'text-accent-green' : 'text-accent-red';

  return (
    <Card className="transform hover:-translate-y-1 transition-transform duration-300 cursor-grab">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase">{title}</p>
                <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">{value}</p>
            </div>
            <div className="p-3 bg-primary-100 dark:bg-primary-800 rounded-full">
                <Icon className="h-6 w-6 text-primary-600 dark:text-primary-300" />
            </div>
        </div>
        <div className={`mt-4 flex items-center space-x-1 text-sm ${changeColor}`}>
            {isIncrease ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
            <span>{change}</span>
            <span className="text-gray-500 dark:text-gray-400">vs last month</span>
        </div>
    </Card>
  );
};

export default MetricCard;
