import * as React from 'react';
import AdminDashboardMainUI from './ui';
import useAdminDashboardMain from './handler';

const AdminDashboardMain = () => {
    const [state, handlers] = useAdminDashboardMain();

    return (
        <AdminDashboardMainUI {...state} {...handlers} />
        // <AdminDashboardMainUI />
    )
}

export default AdminDashboardMain;