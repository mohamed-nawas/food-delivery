import * as React from 'react';
import AdminDashboardMainHeader from './Header';
import AdminDashboardMainFilterCard from './FilterCard';

export interface AdminDashboardMainUIProps {
  profileName: string;
  profileImgUrl: string;
}

const AdminDashboardMainUI = (props: AdminDashboardMainUIProps) => {
  return (
    <section className='feed-me__admin-dashboard__main'>
      <AdminDashboardMainHeader {...props} />
      <section style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '3rem' }}>
        <div className='feed-me__admin-dashboard__main__content'>
          <h3><strong>Dashboard</strong></h3>
          <p>Hi, {props.profileName ? props.profileName.split(" ")[props.profileName.split(" ").length - 1] : 'User'}. Welcome back to Delicious Dispatch Admin!</p>
        </div>
        <AdminDashboardMainFilterCard />
      </section>
    </section>
  );
};

export default AdminDashboardMainUI;
