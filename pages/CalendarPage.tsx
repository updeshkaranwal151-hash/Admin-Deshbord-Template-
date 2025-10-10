
import React from 'react';
import Card from '../components/shared/Card';
import CalendarView from '../components/calendar/CalendarView';

const CalendarPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Calendar</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Schedule and view your events.</p>
      </div>
      <Card className="!p-0">
        <CalendarView />
      </Card>
    </div>
  );
};

export default CalendarPage;
