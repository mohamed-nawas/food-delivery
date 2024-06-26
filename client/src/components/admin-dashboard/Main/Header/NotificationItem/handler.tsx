import * as React from 'react';
// import * as apis from './api';
import { useAppSelector } from '../../../../../redux/hooks';

const useAdminDashboardMainHeaderNotificationItem = (props: AdminDashboardMainHeaderNotificationItemState): [AdminDashboardMainHeaderNotificationItemState, 
    AdminDashboardMainHeaderNotificationItemHandlers] => {
    const [state, setState] = React.useState<AdminDashboardMainHeaderNotificationItemState>({
        notificationType: props.notificationType,
        notificationCountBgColor: props.notificationCountBgColor,
        notificationCount: props.notificationCount
    });

    return [state, {}];
}

export interface AdminDashboardMainHeaderNotificationItemState {
    notificationType: string;
    notificationCountBgColor: string;
    notificationCount: number;
}

interface AdminDashboardMainHeaderNotificationItemHandlers {}

export default useAdminDashboardMainHeaderNotificationItem;