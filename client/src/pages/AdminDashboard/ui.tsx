import * as React from 'react';
import AdminDashboardHeader from '../../components/admin-dashboard/Header';
import AdminDashboardMenu from '../../components/admin-dashboard/Menu';

interface AdminDashboardUIProps {}

const AdminDashboardUI = (props: AdminDashboardUIProps) => {
    return (
        <>
            <AdminDashboardHeader />
            <AdminDashboardMenu />
        </>
    )
}

export default AdminDashboardUI;