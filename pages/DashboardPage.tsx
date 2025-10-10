
import React from 'react';
import Card from '../components/shared/Card';
import MetricCard from '../components/dashboard/MetricCard';
import { MOCK_ACTIVITIES } from '../constants';
import { UsersIcon, ChartBarIcon, ArrowUpIcon, CogIcon } from '../components/shared/Icons';
import ActivityTimeline from '../components/dashboard/ActivityTimeline';
import SalesChart from '../components/dashboard/SalesChart';
import UsersChart from '../components/dashboard/UsersChart';
import RevenueSourceChart from '../components/dashboard/RevenueSourceChart';

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back, here's a snapshot of your business.</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Users" value="12,345" change="+5.4%" changeType="increase" icon={UsersIcon} />
        <MetricCard title="Revenue" value="$48,920" change="+12.1%" changeType="increase" icon={ChartBarIcon} />
        <MetricCard title="Active Tasks" value="78" change="-2.5%" changeType="decrease" icon={CogIcon} />
        <MetricCard title="Sales" value="1,204" change="+8.2%" changeType="increase" icon={ArrowUpIcon} />
      </div>

      {/* Charts and Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <SalesChart />
        </div>
        <div className="lg:col-span-1">
            <ActivityTimeline activities={MOCK_ACTIVITIES} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <UsersChart />
        </div>
        <div className="lg:col-span-2">
          <RevenueSourceChart />
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;
