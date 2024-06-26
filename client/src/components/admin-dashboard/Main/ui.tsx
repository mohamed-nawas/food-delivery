import * as React from 'react';
import AdminDashboardMainHeader from './Header';

interface AdminDashboardMainUIProps {
}

const AdminDashboardMainUI = (props: AdminDashboardMainUIProps) => {
  return (
    <section className='feed-me__admin-dashboard__main'>
      <AdminDashboardMainHeader />
    </section>
  );
};

export default AdminDashboardMainUI;
