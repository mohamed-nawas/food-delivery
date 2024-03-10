import * as React from 'react';

interface AdminDashboardHeaderUIProps {
  pictureUrl?: string;
}

const AdminDashboardHeaderUI = (props: AdminDashboardHeaderUIProps) => {
  return (
    <header className='text-white flex justify-between items-center py-4 px-6'  style={{backgroundColor: 'rgb(251, 146, 60)'}}>
      <div className='flex items-center'>
        <span className='text-lg font-bold'>FeedMe</span>
      </div>
      <div className='flex items-center space-x-2'>
        {props.pictureUrl && (
          <img
            src='profile-picture.jpg'
            alt='Profile Picture'
            className='rounded-full h-8 w-8'
          />
        )}
        {!props.pictureUrl && (
          <svg
            className='w-8 h-8 text-gray-800 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              fill-rule='evenodd'
              d='M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z'
              clip-rule='evenodd'
            />
          </svg>
        )}

        <span className='hidden lg:block'>Hi, Name</span>
        <svg
          className='h-5 w-5 fill-current hidden lg:block'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path
            fill-rule='evenodd'
            d='M6 8a1 1 0 011-1h6a1 1 0 010 2H7a1 1 0 01-1-1zm1 4a1 1 0 100 2h4a1 1 0 100-2H7z'
            clip-rule='evenodd'
          />
        </svg>
        <div className='relative'>
          <svg
            className='h-6 w-6 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M10 20c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2zM4 14v-3a6 6 0 014-5.66V4a2 2 0 114 0v1.34A6 6 0 0116 11v3l2 2v1H2v-1l2-2z' />
          </svg>
          <span className='absolute top-0 right-0 bg-red-500 text-xs rounded-full px-1 font-semibold'>
            5
          </span>
        </div>
        <div className='relative'>
          <input
            type='text'
            className='pl-8 pr-4 py-2 rounded-full bg-gray-800 focus:outline-none focus:bg-gray-700 focus:text-white'
            placeholder='Search'
          />
          <svg
            className='h-6 w-6 fill-current absolute top-0 left-0 mt-2 ml-3'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M20.986 19.374l-3.88-3.88a8.5 8.5 0 10-13.747-2.15 8.5 8.5 0 0013.747 2.15l3.88 3.88a1 1 0 101.415-1.415zM5.5 15a9.5 9.5 0 110-19 9.5 9.5 0 010 19z' />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default AdminDashboardHeaderUI;
