import * as React from 'react';

interface AdminDashboardMainHeaderSearchUIProps {
}

const AdminDashboardMainHeaderProfileUI = (props: AdminDashboardMainHeaderSearchUIProps) => {
  return (
    <div className='feed-me__admin-dashboard__main__header__search-wrapper' >
      <input className='feed-me__admin-dashboard__main__header__search' placeholder='Search Here' />
    </div>
  );
};

export default AdminDashboardMainHeaderProfileUI;
