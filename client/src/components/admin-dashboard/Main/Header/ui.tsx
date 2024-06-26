import * as React from 'react';
import AdminDashboardMainHeaderProfile from './Profile';
import AdminDashboardMainHeaderNotificationItem from './NotificationItem';
import AdminDashboardMainHeaderSearch from './Search';

interface AdminDashboardMainHeaderUIProps {
}

const AdminDashboardMainHeaderUI = (props: AdminDashboardMainHeaderUIProps) => {
  return (
    <header className='feed-me__admin-dashboard__main__header'>
      <AdminDashboardMainHeaderSearch />
      <section className="feed-me__admin-dashboard__main__header__notification-wrapper">
        {
          notifications.map((i) => (
            <AdminDashboardMainHeaderNotificationItem {...i} />
          ))
        }
      </section>
      <AdminDashboardMainHeaderProfile />
    </header>
  );
};

export default AdminDashboardMainHeaderUI;


const notifications = [
  {
    notificationType: 'notification',
    notificationCountBgColor: '#2d9cdb',
    notificationCount: 21
  },
  {
    notificationType: 'message',
    notificationCountBgColor: '#2d9cdb',
    notificationCount: 53
  },
  {
    notificationType: 'orders',
    notificationCountBgColor: '#5e6c93',
    notificationCount: 15
  },
  {
    notificationType: 'setting',
    notificationCountBgColor: '#ff5b5b',
    notificationCount: 19
  }
]
