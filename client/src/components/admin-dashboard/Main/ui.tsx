import * as React from 'react';
import AdminDashboardMainStatusCard from './StatusCard';

interface AdminDashboardMainUIProps {}

const AdminDashboardMainUI = (props: AdminDashboardMainUIProps) => {
  return (
    <main className='flex-1 bg-gray-100 p-5'>
      <div className=' flex h-40 justify-around'>
        <AdminDashboardMainStatusCard />
      </div>
    </main>
  );
};

export default AdminDashboardMainUI;