import * as React from 'react';
import AdminDashboardMainHeaderProfileUI from './ui';
import { AdminDashboardMainState } from '../../handler';

const AdminDashboardMainHeaderProfile = (props: AdminDashboardMainState) => {
    // const [state, handlers] = useAdminDashboardMainHeaderProfile();

    return (
        // <AdminDashboardMainHeaderProfileUI {...state} {...handlers} />
        <AdminDashboardMainHeaderProfileUI {...props} />
    )
}

export default AdminDashboardMainHeaderProfile;