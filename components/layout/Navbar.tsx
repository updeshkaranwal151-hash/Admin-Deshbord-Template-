
import React, { useState, useRef, useEffect } from 'react';
import { BellIcon, SearchIcon, MenuIcon, UserCircleIcon, SunIcon, MoonIcon } from '../shared/Icons';
import { useTheme } from '../../hooks/useTheme';

interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [isNotificationsOpen, setNotificationsOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);
    const notificationsRef = useRef<HTMLDivElement>(null);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setProfileOpen(false);
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
                setNotificationsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left side */}
                    <div className="flex items-center">
                        <button onClick={toggleSidebar} className="text-gray-500 dark:text-gray-400 focus:outline-none lg:hidden">
                            <MenuIcon className="h-6 w-6" />
                        </button>
                        <div className="hidden lg:flex relative ml-4">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <SearchIcon className="h-5 w-5 text-gray-400" />
                            </span>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-150 ease-in-out"
                            />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center space-x-4">
                        <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                            {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
                        </button>

                        <div className="relative" ref={notificationsRef}>
                            <button onClick={() => setNotificationsOpen(!isNotificationsOpen)} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                                <BellIcon className="h-6 w-6" />
                                <span className="absolute top-0 right-0 h-2 w-2 bg-accent-red rounded-full"></span>
                            </button>
                            {isNotificationsOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 transform opacity-100 scale-100">
                                    <div className="py-1">
                                        <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 font-bold border-b dark:border-gray-700">Notifications</div>
                                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <p className="font-medium">New user registered</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
                                        </a>
                                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <p className="font-medium">Server performance critical</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">5 hours ago</p>
                                        </a>
                                        <a href="#" className="block text-center px-4 py-2 text-sm text-primary-600 dark:text-primary-400 hover:underline">View all</a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="relative" ref={profileRef}>
                            <button onClick={() => setProfileOpen(!isProfileOpen)} className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-primary-500 transition duration-150 ease-in-out">
                                <img className="h-8 w-8 rounded-full object-cover" src="https://picsum.photos/id/1005/200/200" alt="User" />
                            </button>
                            {isProfileOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 transform opacity-100 scale-100">
                                    <div className="py-1">
                                        <div className="px-4 py-2">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
                                        </div>
                                        <a href="#/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Sign out</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
