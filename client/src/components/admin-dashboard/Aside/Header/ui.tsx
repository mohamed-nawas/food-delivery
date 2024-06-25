import * as React from 'react';

interface AdminDashboardAsideHeaderUIProps {
}

const AdminDashboardAsideHeaderUI = (props: AdminDashboardAsideHeaderUIProps) => {
  return (
    <header className='feed-me__admin-dashboard__aside__header'>
      <h1>Delicious Dispatch<span className='feed-me__admin-dashboard__aside__header__heading'>.</span></h1>
      <h4>Cuisine First At The Finish Line!</h4>
    </header>
  );
};

export default AdminDashboardAsideHeaderUI;
