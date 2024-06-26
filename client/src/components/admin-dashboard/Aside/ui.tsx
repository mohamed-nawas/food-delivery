import * as React from 'react';
import AdminDashboardAsideHeader from './Header';
import AdminDashboardAsideFooter from './Footer';
import AdminDashboardAsideMenu from './Menu';

interface AdminDashboardAsideUIProps {
}

const AdminDashboardAsideUI = (props: AdminDashboardAsideUIProps) => {
  const [showAside, setShowAside] = React.useState(false);

  const toggleAside = () => {
    setShowAside(!showAside);
  }

  return (
    <aside className='feed-me__admin-dashboard__aside' style={{ width: showAside ? '350px' : '', position: showAside ? 'absolute' : 'relative', top: 0, left: 0, zIndex: 999 }}>
      <button onClick={toggleAside} className='feed-me__admin-dashboard__aside__toggler' style={{ marginLeft: showAside ? '3rem' : 'auto' }}></button>
      <div style={{ display: showAside ? 'block' : '' }}>
        <AdminDashboardAsideHeader />
        <AdminDashboardAsideMenu />
        <AdminDashboardAsideFooter />
      </div>
    </aside>
  );
};

export default AdminDashboardAsideUI;
