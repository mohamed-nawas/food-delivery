import * as React from 'react';
import AdminDashboardHeader from '../../components/admin-dashboard/Header';
import AdminDashboardMenu from '../../components/admin-dashboard/Menu';
import AdminDashboardMain from '../../components/admin-dashboard/Main';

interface AdminDashboardUIProps {}

const AdminDashboardUI = (props: AdminDashboardUIProps) => {
  return (
    <>
      <AdminDashboardHeader />
      <div className='flex'>
        <AdminDashboardMenu />
        <AdminDashboardMain />
      </div>
    </>
  );
};

export default AdminDashboardUI;
