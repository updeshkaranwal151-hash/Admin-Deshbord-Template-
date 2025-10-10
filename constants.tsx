
import React from 'react';
import type { User, Activity, Message } from './types';
import { HomeIcon, UsersIcon, ChartBarIcon, MailIcon, CogIcon } from './components/shared/Icons';

export const NAVIGATION_LINKS = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Users', href: '/users', icon: UsersIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Messages', href: '/messages', icon: MailIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
];

export const MOCK_USERS: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active', avatar: 'https://picsum.photos/id/1005/200/200', lastLogin: '2023-10-27T10:00:00Z' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', status: 'Active', avatar: 'https://picsum.photos/id/1011/200/200', lastLogin: '2023-10-27T09:00:00Z' },
    { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', role: 'Viewer', status: 'Inactive', avatar: 'https://picsum.photos/id/1012/200/200', lastLogin: '2023-10-25T15:30:00Z' },
    { id: 4, name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Editor', status: 'Active', avatar: 'https://picsum.photos/id/1027/200/200', lastLogin: '2023-10-27T11:00:00Z' },
    { id: 5, name: 'Bob Brown', email: 'bob.b@example.com', role: 'Viewer', status: 'Active', avatar: 'https://picsum.photos/id/1025/200/200', lastLogin: '2023-10-26T18:45:00Z' },
    { id: 6, name: 'Charlie Davis', email: 'charlie.d@example.com', role: 'Admin', status: 'Active', avatar: 'https://picsum.photos/id/1062/200/200', lastLogin: '2023-10-27T12:00:00Z' },
    { id: 7, name: 'Diana Miller', email: 'diana.m@example.com', role: 'Editor', status: 'Inactive', avatar: 'https://picsum.photos/id/201/200/200', lastLogin: '2023-10-24T09:20:00Z' },
];


export const MOCK_ACTIVITIES: Activity[] = [
    { id: 1, user: { name: 'Jane Smith', avatar: 'https://picsum.photos/id/1011/200/200' }, action: 'updated', target: 'Project Alpha', timestamp: '2 hours ago' },
    { id: 2, user: { name: 'John Doe', avatar: 'https://picsum.photos/id/1005/200/200' }, action: 'commented on', target: 'Task #123', timestamp: '3 hours ago' },
    { id: 3, user: { name: 'Alice Johnson', avatar: 'https://picsum.photos/id/1027/200/200' }, action: 'added a new user', target: 'Sam Wilson', timestamp: '5 hours ago' },
    { id: 4, user: { name: 'Charlie Davis', avatar: 'https://picsum.photos/id/1062/200/200' }, action: 'completed', target: 'Milestone 2', timestamp: '1 day ago' },
];

export const MOCK_MESSAGES: Message[] = [
    { id: 1, sender: 'TechCorp', avatar: 'https://picsum.photos/seed/tech/200', subject: 'Important: Security Update Required', preview: 'Please update your security settings by EOD to ensure compliance...', timestamp: '10:30 AM', unread: true },
    { id: 2, sender: 'Design Team', avatar: 'https://picsum.photos/seed/design/200', subject: 'New Mockups for Project Phoenix', preview: 'Hey team, attached are the latest designs for the dashboard redesign. Let us know your thoughts!', timestamp: '9:15 AM', unread: true },
    { id: 3, sender: 'HR Department', avatar: 'https://picsum.photos/seed/hr/200', subject: 'Reminder: Open Enrollment Ends Friday', preview: 'This is a friendly reminder that open enrollment for benefits ends this Friday...', timestamp: 'Yesterday', unread: false },
    { id: 4, sender: 'John Doe', avatar: 'https://picsum.photos/id/1005/200', subject: 'Quick question about the Q3 report', preview: 'Hey, I was reviewing the Q3 report and had a quick question about the sales figures. Do you have a moment?', timestamp: '2 days ago', unread: false },
];
