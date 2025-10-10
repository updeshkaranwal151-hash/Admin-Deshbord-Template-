
import React from 'react';
import Card from '../components/shared/Card';
import { useToast } from '../hooks/useToast';
import { MOCK_USERS } from '../constants';

const ProfilePage: React.FC = () => {
    const { addToast } = useToast();
    // For demonstration, we'll use the first admin user as the logged-in user.
    const user = MOCK_USERS.find(u => u.role === 'Admin') || MOCK_USERS[0];

    const handleProfileUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        addToast('Profile updated successfully!', 'success');
    };
    
    const handlePasswordChange = (e: React.FormEvent) => {
        e.preventDefault();
        addToast('Password changed successfully!', 'success');
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">My Profile</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">View and manage your profile details.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="lg:col-span-1">
                    <Card>
                        <div className="flex flex-col items-center text-center p-4">
                            <img
                                className="h-24 w-24 rounded-full object-cover ring-4 ring-primary-200 dark:ring-primary-800"
                                src={user.avatar}
                                alt="User avatar"
                            />
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">{user.name}</h2>
                            <p className="text-gray-500 dark:text-gray-400">{user.role}</p>
                            <div className="mt-6 w-full">
                                <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition duration-300">
                                    Change Picture
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Settings Form Card */}
                <div className="lg:col-span-2 space-y-6">
                    <Card title="Profile Information">
                        <form onSubmit={handleProfileUpdate} className="space-y-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    defaultValue={user.name}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    defaultValue={user.email}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
                                <textarea id="bio" rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-transparent" placeholder="Tell us a little about yourself..."></textarea>
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition duration-300"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </Card>

                    <Card title="Change Password">
                        <form onSubmit={handlePasswordChange} className="space-y-6">
                            <div>
                                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Current Password</label>
                                <input
                                    type="password"
                                    id="currentPassword"
                                    placeholder="••••••••"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">New Password</label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    placeholder="••••••••"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-transparent"
                                />
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
