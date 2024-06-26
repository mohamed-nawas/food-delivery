import * as React from 'react';
import AdminDashboardMainHeaderNotificationItemUI from './ui';
import useAdminDashboardMainHeaderNotificationItem, { AdminDashboardMainHeaderNotificationItemState } from './handler';

const AdminDashboardMainHeaderNotificationItem = (props: AdminDashboardMainHeaderNotificationItemState) => {
    const [state, handlers] = useAdminDashboardMainHeaderNotificationItem(props);

    return (
        <AdminDashboardMainHeaderNotificationItemUI {...state} {...handlers} />
        // <AdminDashboardMainHeaderNotificationItemUI />
    )
}

export default AdminDashboardMainHeaderNotificationItem;