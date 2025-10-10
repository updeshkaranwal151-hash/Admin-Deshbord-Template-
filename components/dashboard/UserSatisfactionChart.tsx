import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import Card from '../shared/Card';
import { useTheme } from '../../hooks/useTheme';

const data = [{ name: 'Satisfaction', value: 85, fill: '#4F46E5' }];

const UserSatisfactionChart: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Card title="User Satisfaction">
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="90%"
            barSize={20}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              dataKey="value"
              cornerRadius={10}
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-4xl font-bold"
              fill={isDark ? '#FFFFFF' : '#1F2937'}
            >
              {`${data[0].value}%`}
            </text>
             <text
              x="50%"
              y="65%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-sm"
              fill={isDark ? '#9CA3AF' : '#6B7281'}
            >
              {data[0].name}
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default UserSatisfactionChart;
