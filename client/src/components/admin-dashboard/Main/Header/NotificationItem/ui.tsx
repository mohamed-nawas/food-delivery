import * as React from 'react';

interface AdminDashboardMainHeaderNotificationItemUIProps {
  notificationType: string;
  notificationCountBgColor: string;
  notificationCount: number;
}

const AdminDashboardMainHeaderNotificationItemUI = (props: AdminDashboardMainHeaderNotificationItemUIProps) => {
  return (
    <section className={`feed-me__admin-dashboard__main__header__notification-wrapper__notification-item is-style-${props.notificationType}`}>
      <div className={`feed-me__admin-dashboard__main__header__notification-wrapper__notification-item__icon is-style-${props.notificationType}`}></div>
      <div className="feed-me__admin-dashboard__main__header__notification-wrapper__notification-item__count"
        style={{ backgroundColor: props.notificationCountBgColor }}>{props.notificationCount}</div>
    </section>
  );
};

export default AdminDashboardMainHeaderNotificationItemUI;
