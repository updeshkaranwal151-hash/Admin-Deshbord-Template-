
import React from 'react';
import type { User, Activity, Message, KanbanTask, FileItem, CalendarEvent } from './types';
import { HomeIcon, UsersIcon, ChartBarIcon, MailIcon, CogIcon, ClipboardListIcon, IdentificationIcon, ViewBoardsIcon, CalendarIcon, FolderIcon } from './components/shared/Icons';

export const NAVIGATION_LINKS = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Users', href: '/users', icon: UsersIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Tasks', href: '/tasks', icon: ClipboardListIcon },
  { name: 'Kanban Board', href: '/kanban', icon: ViewBoardsIcon },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
  { name: 'File Manager', href: '/files', icon: FolderIcon },
  { name: 'Messages', href: '/messages', icon: MailIcon },
  { name: 'Profile', href: '/profile', icon: IdentificationIcon },
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

export const MOCK_KANBAN_TASKS: KanbanTask[] = [
    { id: 'task-1', title: 'Design new dashboard layout', description: 'Create mockups in Figma for the new V2 dashboard.', status: 'todo', priority: 'high', userAvatar: 'https://picsum.photos/id/1011/200' },
    { id: 'task-2', title: 'Develop user authentication', description: 'Implement JWT-based authentication for the API.', status: 'inprogress', priority: 'high', userAvatar: 'https://picsum.photos/id/1025/200' },
    { id: 'task-3', title: 'Fix bug #1024', description: 'The user profile picture is not updating correctly.', status: 'inprogress', priority: 'medium', userAvatar: 'https://picsum.photos/id/1027/200' },
    { id: 'task-4', title: 'Write documentation for API', description: 'Use Swagger/OpenAPI to document all endpoints.', status: 'done', priority: 'low', userAvatar: 'https://picsum.photos/id/1062/200' },
    { id: 'task-5', title: 'Set up CI/CD pipeline', description: 'Use GitHub Actions to automate testing and deployment.', status: 'todo', priority: 'medium', userAvatar: 'https://picsum.photos/id/201/200' },
    { id: 'task-6', title: 'Deploy staging server', description: 'Provision a new server on AWS for staging.', status: 'done', priority: 'high', userAvatar: 'https://picsum.photos/id/1005/200' },
];

export const MOCK_FILES: FileItem[] = [
    { id: 'file-1', name: 'Project Documents', type: 'folder', size: '1.2 GB', modifiedDate: '2023-10-26' },
    { id: 'file-2', name: 'Company Logos', type: 'folder', size: '256 MB', modifiedDate: '2023-10-25' },
    { id: 'file-3', name: 'dashboard-mockup.png', type: 'image', size: '4.5 MB', modifiedDate: '2023-10-27' },
    { id: 'file-4', name: 'Q3_Report.pdf', type: 'document', size: '1.2 MB', modifiedDate: '2023-10-24' },
    { id: 'file-5', name: 'marketing-video.mp4', type: 'video', size: '128 MB', modifiedDate: '2023-10-20' },
    { id: 'file-6', name: 'meeting-notes.txt', type: 'document', size: '12 KB', modifiedDate: '2023-10-27' },
    { id: 'file-7', name: 'client-photos', type: 'folder', size: '890 MB', modifiedDate: '2023-09-15' },
    { id: 'file-8', name: 'invoice-template.docx', type: 'document', size: '45 KB', modifiedDate: '2023-10-18' },
];

const today = new Date();
const y = today.getFullYear();
const m = String(today.getMonth() + 1).padStart(2, '0');

export const MOCK_EVENTS: CalendarEvent[] = [
    { id: 'event-1', title: 'Team Standup', date: `${y}-${m}-06`, color: 'primary' },
    { id: 'event-2', title: 'Design Review', date: `${y}-${m}-08`, color: 'orange' },
    { id: 'event-3', title: 'Product Launch', date: `${y}-${m}-15`, color: 'green' },
    { id: 'event-4', title: 'Quarterly Planning', date: `${y}-${m}-22`, color: 'primary' },
    { id: 'event-5', title: 'Holiday Party', date: `${y}-${m}-24`, color: 'red' },
    { id: 'event-6', title: 'Submit Report', date: `${y}-${m}-22`, color: 'red' },
];
