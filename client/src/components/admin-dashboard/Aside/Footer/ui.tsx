import * as React from 'react';

interface AdminDashboardAsideFooterUIProps {
}

const AdminDashboardAsideFooterUI = (props: AdminDashboardAsideFooterUIProps) => {
  return (
    <footer className='feed-me__admin-dashboard__aside__footer'>
      <div>
        <h6>Delicious Dispatch Restaurent Admin Dashboard</h6>
        <p>&copy; 2020 All Rights Reserved</p>
      </div>
      <p>Made with <span className='feed-me__admin-dashboard__aside__footer__heart'>&hearts;</span> by NawazMohamed</p>
    </footer>
  );
};

export default AdminDashboardAsideFooterUI;
