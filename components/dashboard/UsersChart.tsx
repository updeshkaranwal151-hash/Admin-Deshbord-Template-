
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../shared/Card';
import { useTheme } from '../../hooks/useTheme';

const data = [
  { name: 'Jan', NewUsers: 250, Churned: 50 },
  { name: 'Feb', NewUsers: 320, Churned: 40 },
  { name: 'Mar', NewUsers: 450, Churned: 60 },
  { name: 'Apr', NewUsers: 400, Churned: 55 },
  { name: 'May', NewUsers: 550, Churned: 70 },
  { name: 'Jun', NewUsers: 600, Churned: 80 },
  { name: 'Jul', NewUsers: 580, Churned: 75 },
];

const UsersChart: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const gridColor = isDark ? '#4A5568' : '#E2E8F0';
    const textColor = isDark ? '#E2E8F0' : '#4A5568';

  return (
    <Card title="User Acquisition">
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="name" stroke={textColor} />
            <YAxis stroke={textColor} />
            <Tooltip
                contentStyle={{ 
                    backgroundColor: isDark ? '#2D3748' : '#FFFFFF', 
                    borderColor: isDark ? '#4A5568' : '#E2E8F0'
                }}
                labelStyle={{ color: textColor }}
            />
            <Legend wrapperStyle={{ color: textColor }} />
            <Bar dataKey="NewUsers" fill="#4F46E5" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Churned" fill="#EF4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default UsersChart;
