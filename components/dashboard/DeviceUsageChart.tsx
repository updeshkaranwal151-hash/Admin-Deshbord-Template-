import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Card from '../shared/Card';
import { useTheme } from '../../hooks/useTheme';

const data = [
  { name: 'Desktop', value: 65 },
  { name: 'Mobile', value: 25 },
  { name: 'Tablet', value: 10 },
];

const COLORS = ['#4F46E5', '#10B981', '#F59E0B'];

const DeviceUsageChart: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const textColor = isDark ? '#E2E8F0' : '#4A5568';

  return (
    <Card title="Device Usage">
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? '#2D3748' : '#FFFFFF',
                borderColor: isDark ? '#4A5568' : '#E2E8F0',
                borderRadius: '0.5rem',
              }}
            />
            <Legend iconSize={10} wrapperStyle={{ color: textColor, fontSize: '0.875rem' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default DeviceUsageChart;
