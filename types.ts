
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
