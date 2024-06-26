import * as React from 'react';
import AdminDashboardAside from '../../components/admin-dashboard/Aside';

interface AdminDashboardUIProps {}

const AdminDashboardUI = (props: AdminDashboardUIProps) => {
  return (
    <main style={{display: 'flex'}}>
      <AdminDashboardAside />
      <section style={{ flex: 1, borderWidth: '1px', borderColor: 'red', padding: '3rem 1rem' }}>Welcome to Admin Dashboard</section>
    </main>
  );
};

export default AdminDashboardUI;
