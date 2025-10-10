
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../shared/Card';
import { useTheme } from '../../hooks/useTheme';

const data = [
  { name: 'Jan', Sales: 4000, Revenue: 2400 },
  { name: 'Feb', Sales: 3000, Revenue: 1398 },
  { name: 'Mar', Sales: 2000, Revenue: 9800 },
  { name: 'Apr', Sales: 2780, Revenue: 3908 },
  { name: 'May', Sales: 1890, Revenue: 4800 },
  { name: 'Jun', Sales: 2390, Revenue: 3800 },
  { name: 'Jul', Sales: 3490, Revenue: 4300 },
];

const SalesChart: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const gridColor = isDark ? '#4A5568' : '#E2E8F0';
    const textColor = isDark ? '#E2E8F0' : '#4A5568';

  return (
    <Card title="Sales Overview">
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart
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
            <Legend wrapperStyle={{ color: textColor }}/>
            <Line type="monotone" dataKey="Revenue" stroke="#4F46E5" strokeWidth={2} activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Sales" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default SalesChart;
