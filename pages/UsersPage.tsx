
import React from 'react';
import UsersTable from '../components/users/UsersTable';
import Card from '../components/shared/Card';

const UsersPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">User Management</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Manage all users in your system.</p>
      </div>
      <Card className="!p-0">
        <UsersTable />
      </Card>
    </div>
  );
};

export default UsersPage;
