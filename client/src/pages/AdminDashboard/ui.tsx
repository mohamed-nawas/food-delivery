import * as React from 'react';
import AdminDashboardAside from '../../components/admin-dashboard/Aside';
import AdminDashboardMain from '../../components/admin-dashboard/Main';

interface AdminDashboardUIProps {}

const AdminDashboardUI = (props: AdminDashboardUIProps) => {
  return (
    <main style={{display: 'flex'}}>
      <AdminDashboardAside />
      <AdminDashboardMain />
    </main>
  );
};

export default AdminDashboardUI;
