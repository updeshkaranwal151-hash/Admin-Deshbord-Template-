
import React, { useState } from 'react';
import Card from '../components/shared/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from '../hooks/useTheme';

const dailyData = Array.from({ length: 30 }, (_, i) => ({ day: `Day ${i + 1}`, value: Math.floor(Math.random() * 1000) + 200 }));
const weeklyData = [{ day: 'Week 1', value: 3450 }, { day: 'Week 2', value: 4560 }, { day: 'Week 3', value: 3980 }, { day: 'Week 4', value: 5120 }];
const monthlyData = [{ day: 'Jan', value: 21000 }, { day: 'Feb', value: 25000 }, { day: 'Mar', value: 23000 }, { day: 'Apr', value: 28000 }, { day: 'May', value: 31000 }, { day: 'Jun', value: 29000 }];

type TimeRange = 'daily' | 'weekly' | 'monthly';

const AnalyticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('daily');
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const gridColor = isDark ? '#4A5568' : '#E2E8F0';
  const textColor = isDark ? '#E2E8F0' : '#4A5568';
  
  const dataMap = {
    daily: dailyData,
    weekly: weeklyData,
    monthly: monthlyData,
  };

  const currentData = dataMap[timeRange];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Analytics</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Deep dive into your application's metrics.</p>
      </div>

      <Card>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 sm:mb-0">User Engagement</h2>
          <div className="flex space-x-1 bg-gray-200 dark:bg-gray-700 p-1 rounded-lg">
            {(['daily', 'weekly', 'monthly'] as TimeRange[]).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  timeRange === range
                    ? 'bg-white dark:bg-gray-800 text-primary-600 shadow'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <LineChart data={currentData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="day" stroke={textColor} />
              <YAxis stroke={textColor} />
              <Tooltip
                contentStyle={{ 
                    backgroundColor: isDark ? '#2D3748' : '#FFFFFF', 
                    borderColor: isDark ? '#4A5568' : '#E2E8F0'
                }}
                labelStyle={{ color: textColor }}
              />
              <Legend wrapperStyle={{ color: textColor }} />
              <Line type="monotone" dataKey="value" name="Engagement Score" stroke="#4F46E5" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default AnalyticsPage;
