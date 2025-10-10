import React, { useState, useMemo } from 'react';
import { MOCK_EVENTS } from '../../constants';
import type { CalendarEvent } from '../../types';
import { ChevronLeftIcon } from '../shared/Icons';

const eventColorClasses: Record<CalendarEvent['color'], string> = {
    primary: 'bg-primary-200 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
    green: 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200',
    orange: 'bg-orange-200 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    red: 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200',
};

const CalendarView: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const firstDayOfMonth = new Date(year, month, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const today = new Date();

    const eventsForMonth = useMemo(() => MOCK_EVENTS.filter(event => {
        const eventDate = new Date(event.date + 'T00:00:00');
        return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    }), [year, month]);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const calendarDays = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
        calendarDays.push(<div key={`empty-${i}`} className="border-t border-l dark:border-gray-700"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
        const dayEvents = eventsForMonth.filter(event => new Date(event.date + 'T00:00:00').getDate() === day);

        calendarDays.push(
            <div key={day} className="relative border-t border-l dark:border-gray-700 p-2 h-24 sm:h-32 flex flex-col overflow-hidden">
                <span className={`text-sm mb-1 ${isToday ? 'bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center font-bold' : 'text-gray-700 dark:text-gray-300'}`}>
                    {day}
                </span>
                <div className="space-y-1 overflow-y-auto">
                    {dayEvents.map(event => (
                        <div key={event.id} className={`text-xs px-1 py-0.5 rounded ${eventColorClasses[event.color]} truncate cursor-pointer`}>
                           {event.title}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const totalCells = Math.ceil((startingDayOfWeek + daysInMonth) / 7) * 7;
    for (let i = calendarDays.length; i < totalCells; i++) {
        calendarDays.push(<div key={`fill-${i}`} className="border-t border-l dark:border-gray-700"></div>);
    }

    return (
        <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{monthName}</h2>
                <div className="flex space-x-2">
                    <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <ChevronLeftIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </button>
                    <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <ChevronLeftIcon className="h-5 w-5 transform rotate-180 text-gray-600 dark:text-gray-300" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-7 text-center font-medium text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                {daysOfWeek.map(day => <div key={day} className="py-2">{day}</div>)}
            </div>
            <div className="grid grid-cols-7 border-r border-b dark:border-gray-700" style={{ gridTemplateRows: `repeat(${Math.ceil(calendarDays.length / 7)}, minmax(0, 1fr))`}}>
                {calendarDays}
            </div>
        </div>
    );
};

export default CalendarView;
