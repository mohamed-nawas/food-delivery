import * as React from 'react';
import AdminDashboardMainHeaderSearchUI from './ui';
import useAdminDashboardMainHeaderSearch from './handler';

const AdminDashboardMainHeaderSearch = () => {
    const [state, handlers] = useAdminDashboardMainHeaderSearch();

    return (
        <AdminDashboardMainHeaderSearchUI {...state} {...handlers} />
        // <AdminDashboardMainHeaderSearchUI />
    )
}

export default AdminDashboardMainHeaderSearch;