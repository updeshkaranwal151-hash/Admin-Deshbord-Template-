
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Card from '../shared/Card';
import { useTheme } from '../../hooks/useTheme';

const data = [
  { name: 'Subscriptions', value: 400 },
  { name: 'Direct Sales', value: 300 },
  { name: 'Affiliates', value: 300 },
  { name: 'Ads', value: 200 },
];

const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'];

const RevenueSourceChart: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const textColor = isDark ? '#E2E8F0' : '#4A5568';

  return (
    <Card title="Revenue Sources" className="h-full">
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
                contentStyle={{ 
                    backgroundColor: isDark ? '#2D3748' : '#FFFFFF', 
                    borderColor: isDark ? '#4A5568' : '#E2E8F0'
                }}
            />
            <Legend iconSize={10} wrapperStyle={{ color: textColor }}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default RevenueSourceChart;
