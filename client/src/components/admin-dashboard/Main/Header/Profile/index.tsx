import * as React from 'react';
import AdminDashboardMainHeaderProfileUI from './ui';
import useAdminDashboardMainHeaderProfile from './handler';

const AdminDashboardMainHeaderProfile = () => {
    const [state, handlers] = useAdminDashboardMainHeaderProfile();

    return (
        <AdminDashboardMainHeaderProfileUI {...state} {...handlers} />
        // <AdminDashboardMainHeaderProfileUI />
    )
}

export default AdminDashboardMainHeaderProfile;