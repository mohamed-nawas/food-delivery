import * as React from 'react';
import AdminDashboardAsideHeader from './Header';
import AdminDashboardAsideFooter from './Footer';
import AdminDashboardAsideMenu from './Menu';

interface AdminDashboardAsideUIProps {
}

const AdminDashboardAsideUI = (props: AdminDashboardAsideUIProps) => {
  return (
    <aside className='feed-me__admin-dashboard__aside'>
      <div className='feed-me__admin-dashboard__aside__toggler'></div>
      <AdminDashboardAsideHeader />
      <AdminDashboardAsideMenu />
      <AdminDashboardAsideFooter />
    </aside>
  );
};

export default AdminDashboardAsideUI;
