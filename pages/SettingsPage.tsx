
import React from 'react';
import Card from '../components/shared/Card';
import ThemeToggle from '../components/shared/ThemeToggle';
import { useToast } from '../hooks/useToast';

const SettingsPage: React.FC = () => {
    const { addToast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addToast('Settings saved successfully!', 'success');
    }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Settings</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your account and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <Card title="Profile Information">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                            <input type="text" defaultValue="John" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-transparent" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                            <input type="text" defaultValue="Doe" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-transparent" />
                        </div>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                        <input type="email" defaultValue="john.doe@example.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-transparent" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
                        <textarea rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-transparent" defaultValue="SaaS administrator and tech enthusiast." />
                    </div>
                    <div className="text-right">
                        <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition duration-300">
                            Save Changes
                        </button>
                    </div>
                </form>
            </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
             <Card title="Theme">
                 <div className="flex items-center justify-between">
                     <p className="text-gray-700 dark:text-gray-300">Appearance</p>
                     <ThemeToggle />
                 </div>
                 <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                     Switch between light and dark mode.
                 </p>
             </Card>
            <Card title="Account Management">
                <div className="space-y-4">
                    <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
                        Change Password
                    </button>
                    <button className="w-full px-4 py-2 border border-red-500 rounded-md text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">
                        Delete Account
                    </button>
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
