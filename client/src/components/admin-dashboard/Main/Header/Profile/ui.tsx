import * as React from 'react';

interface AdminDashboardMainHeaderProfileUIProps {
  profileName: string;
  profileImgUrl: string;
}

const AdminDashboardMainHeaderProfileUI = (props: AdminDashboardMainHeaderProfileUIProps) => {
  return (
    <section className='feed-me__admin-dashboard__main__header__profile'>
      <p>Hello, <strong>{props.profileName ? props.profileName.split(" ")[props.profileName.split(" ").length - 1] : 'User'}</strong></p>
      <div className="feed-me__admin-dashboard__main__header__profile__img-wrapper">
        {
          props.profileImgUrl 
          ? <img src={props.profileImgUrl} alt='profile picture' className='feed-me__admin-dashboard__main__header__profile__img-wrapper__img' /> 
          : <img src='' alt='' className='feed-me__admin-dashboard__main__header__profile__img-wrapper__img'  />
        }
      </div>
    </section>
  );
};

export default AdminDashboardMainHeaderProfileUI;
