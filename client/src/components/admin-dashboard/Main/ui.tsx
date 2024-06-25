import * as React from 'react';
import AdminDashboardMainStatusCard from './StatusCard';

interface AdminDashboardMainUIProps {}

const AdminDashboardMainUI = (props: AdminDashboardMainUIProps) => {
  return (
    <main className='feed-me__admin-dashboard__main'>
      <div className='feed-me__admin-dashboard__main__status-container'>
        <AdminDashboardMainStatusCard />
      </div>
    </main>
  );
};

export default AdminDashboardMainUI;