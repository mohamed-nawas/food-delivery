import * as React from 'react';

interface AdminDashboardAsideMenuUIProps {
}

const AdminDashboardAsideMenuUI = (props: AdminDashboardAsideMenuUIProps) => {
  return (
    <nav className='feed-me__admin-dashboard__aside__menu'>
      <ul>
        <li><a href='/'><span className='feed-me__admin-dashboard__aside__menu__dashboard-icon'></span>Dashboard</a></li>
        <li><a href='/orders'><span className='feed-me__admin-dashboard__aside__menu__orders-icon'></span>Order List</a></li>
        <li><a href='/customers'><span className='feed-me__admin-dashboard__aside__menu__customers-icon'></span>Customer</a></li>
        <li><a href='/analytics'><span className='feed-me__admin-dashboard__aside__menu__analytics-icon'></span>Analytics</a></li>
        <li><a href='/reviews'><span className='feed-me__admin-dashboard__aside__menu__reviews-icon'></span>Reviews</a></li>
        <li><a href='/foods'><span className='feed-me__admin-dashboard__aside__menu__foods-icon'></span>Foods</a></li>
        <li><a href='/calender'><span className='feed-me__admin-dashboard__aside__menu__calender-icon'></span>Calender</a></li>
        <li><a href='/chat'><span className='feed-me__admin-dashboard__aside__menu__chat-icon'></span>Chat</a></li>
        <li><a href='/wallet'><span className='feed-me__admin-dashboard__aside__menu__wallet-icon'></span>Wallet</a></li>
      </ul>
    </nav>
  );
};

export default AdminDashboardAsideMenuUI;
