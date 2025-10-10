
import React from 'react';
import { MOCK_MESSAGES } from '../constants';
import Card from '../components/shared/Card';

const MessagesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Messages</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Your inbox with important communications.</p>
      </div>

      <Card className="!p-0">
        <div className="flex flex-col">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {MOCK_MESSAGES.map((message) => (
              <li key={message.id} className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors duration-200 ${message.unread ? 'bg-primary-50 dark:bg-primary-900/20' : ''}`}>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={message.avatar} alt={message.sender} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className={`text-sm font-medium truncate ${message.unread ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                        {message.sender}
                      </p>
                      <time className="flex-shrink-0 text-xs text-gray-500 dark:text-gray-400">
                        {message.timestamp}
                      </time>
                    </div>
                    <div className="flex items-center mt-1">
                      {message.unread && <span className="flex-shrink-0 inline-block h-2 w-2 mr-2 bg-primary-500 rounded-full"></span>}
                      <p className={`text-sm truncate ${message.unread ? 'font-bold text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}>
                        {message.subject}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">
                        {message.preview}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default MessagesPage;
