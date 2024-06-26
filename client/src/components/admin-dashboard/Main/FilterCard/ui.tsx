import * as React from 'react';

interface AdminDashboardMainFilterCardUIProps {
}

const AdminDashboardMainFilterCardUI = (props: AdminDashboardMainFilterCardUIProps) => {
  return (
    <div className='feed-me__admin-dashboard__main__filter-card'>
        <div className="feed-me__admin-dashboard__main__filter-card__calender-wrap">
            <div className="feed-me__admin-dashboard__main__filter-card__calender-wrap__calender-icon"></div>
        </div>
        <div className="feed-me__admin-dashboard__main__filter-card__date-wrap">
            <p style={{ fontSize: '18px' }}><strong>Filter Period</strong></p>
            <p style={{ fontSize: '12px' }}>17 April 2020 - 21 May 2020</p>
        </div>
        <div className="feed-me__admin-dashboard__main__filter-card__arrow-icon"></div>
    </div>
  );
};

export default AdminDashboardMainFilterCardUI;
