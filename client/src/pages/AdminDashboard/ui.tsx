import * as React from 'react';
import AdminDashboardAside from '../../components/admin-dashboard/Aside';

interface AdminDashboardUIProps {}

const AdminDashboardUI = (props: AdminDashboardUIProps) => {
  return (
    <main style={{display: 'flex'}}>
      <AdminDashboardAside />
      <p style={{marginLeft: '1rem', marginTop: '1rem'}}>Welcome to Admin Dashboard</p>
    </main>
  );
};

export default AdminDashboardUI;
