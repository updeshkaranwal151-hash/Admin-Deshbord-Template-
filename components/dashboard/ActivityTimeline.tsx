
import React from 'react';
import Card from '../shared/Card';
import type { Activity } from '../../types';

interface ActivityTimelineProps {
  activities: Activity[];
}

const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ activities }) => {
  return (
    <Card title="Recent Activity" className="h-full">
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {activities.map((activity, activityIdx) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {activityIdx !== activities.length - 1 ? (
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-gray-800">
                      <img className="h-8 w-8 rounded-full" src={activity.user.avatar} alt="" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium text-gray-900 dark:text-gray-100">{activity.user.name}</span>
                        {' '}{activity.action}{' '}
                        <span className="font-medium text-gray-900 dark:text-gray-100">{activity.target}</span>
                      </p>
                    </div>
                    <div className="text-right text-xs whitespace-nowrap text-gray-500 dark:text-gray-400">
                      <time>{activity.timestamp}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ActivityTimeline;
