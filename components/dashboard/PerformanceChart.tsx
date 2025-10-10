import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../shared/Card';
import { useTheme } from '../../hooks/useTheme';

const data = [
  { time: '00:00', ms: 120 },
  { time: '03:00', ms: 150 },
  { time: '06:00', ms: 110 },
  { time: '09:00', ms: 180 },
  { time: '12:00', ms: 210 },
  { time: '15:00', ms: 160 },
  { time: '18:00', ms: 190 },
  { time: '21:00', ms: 140 },
];

const PerformanceChart: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const gridColor = isDark ? '#4A5568' : '#E2E8F0';
  const textColor = isDark ? '#E2E8F0' : '#4A5568';

  return (
    <Card title="API Performance (ms)">
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorMs" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="time" stroke={textColor} />
            <YAxis stroke={textColor} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? '#2D3748' : '#FFFFFF',
                borderColor: isDark ? '#4A5568' : '#E2E8F0',
                borderRadius: '0.5rem',
              }}
            />
            <Area
              type="monotone"
              dataKey="ms"
              stroke="#4F46E5"
              fillOpacity={1}
              fill="url(#colorMs)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PerformanceChart;
