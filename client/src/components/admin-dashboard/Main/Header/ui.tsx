import * as React from 'react';
import AdminDashboardMainHeaderProfile from './Profile';

interface AdminDashboardMainHeaderUIProps {
}

const AdminDashboardMainHeaderUI = (props: AdminDashboardMainHeaderUIProps) => {
  return (
    <header className='feed-me__admin-dashboard__main__header'>
      <AdminDashboardMainHeaderProfile />
    </header>
  );
};

export default AdminDashboardMainHeaderUI;
