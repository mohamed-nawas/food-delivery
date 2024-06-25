import * as React from 'react';

interface AdminDashboardHeaderUIProps {
  pictureUrl?: string;
  userName?: string;
  notificationCount?: string;
}

const AdminDashboardHeaderUI = (props: AdminDashboardHeaderUIProps) => {
  return (
    <header className='feed-me__admin-dashboard__header'>
      <div className='feed-me__admin-dashboard__header__content'>
        <span className='feed-me__admin-dashboard__header__content__logo'><h3>FeedMe</h3></span>
        <div className='feed-me__admin-dashboard__header__content__menu'>
          <button className='feed-me__admin-dashboard__header__content__menu__toggle'>
            <svg xmlns="http://www.w3.org/2000/svg" className="feed-me__admin-dashboard__header__content__menu__toggle__container" viewBox="0 0 24 24">
              <path className='feed-me__admin-dashboard__header__content__menu__toggle__container__content' d="M4 8h16M4 12h16M4 16h16"/>
            </svg>
          </button>


          {props.pictureUrl && (
            <img src='profile-picture.jpg' alt='Profile Picture' className='rounded-full h-8 w-8'/>
          )}
          {!props.pictureUrl && (
            <svg className='feed-me__admin-dashboard__header__content__menu__icon' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path
                d='M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z'
              />
            </svg>
          )}

          <span className='feed-me__admin-dashboard__header__content__menu__name'><h6>Hi, {props.userName ? props.userName : 'Michael'}</h6></span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='feed-me__admin-dashboard__header__content__menu__arrow'>
            <path d="M12 17.293l-6.646-6.647a.999.999 0 0 1 .707-1.707h13.292a1 1 0 0 1 .707 1.707L12 17.293z" />
          </svg>

          <div className='relative'>
            <svg className='h-6 w-6 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M10 20c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2zM4 14v-3a6 6 0 014-5.66V4a2 2 0 114 0v1.34A6 6 0 0116 11v3l2 2v1H2v-1l2-2z' />
            </svg>
            <span>{props.notificationCount}</span>
          </div>
        </div>
      </div>

      <div className="feed-me__admin-dashboard__header__search">
        <input type="search" id="default-search" placeholder="Search" required />
        <div>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
      </div>


    </header>
  );
};

export default AdminDashboardHeaderUI;
