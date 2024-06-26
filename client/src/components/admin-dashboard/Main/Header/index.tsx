import * as React from 'react';
import AdminDashboardMainHeaderUI from './ui';
import { AdminDashboardMainUIProps } from '../ui';

const AdminDashboardMainHeader = (props: AdminDashboardMainUIProps) => {
    // const [state, handlers] = useAdminDashboardMainHeader();

    return (
        // <AdminDashboardMainHeaderUI {...state} {...handlers} />
        <AdminDashboardMainHeaderUI {...props} />
    )
}

export default AdminDashboardMainHeader;