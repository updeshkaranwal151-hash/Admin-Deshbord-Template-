// Fix: Import React to resolve 'React' namespace error.
import React from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive';
  avatar: string;
  lastLogin: string;
}

export interface Metric {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ElementType;
}

export interface Activity {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  target: string;
  timestamp: string;
}

export interface Message {
    id: number;
    sender: string;
    avatar: string;
    subject: string;
    preview: string;
    timestamp: string;
    unread: boolean;
}

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface KanbanTask {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'inprogress' | 'done';
  priority: 'low' | 'medium' | 'high';
  userAvatar: string;
}

export interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'image' | 'document' | 'video' | 'other';
  size: string;
  modifiedDate: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  color: 'primary' | 'green' | 'orange' | 'red';
}
