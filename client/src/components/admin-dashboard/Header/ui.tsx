import * as React from 'react';

interface AdminDashboardHeaderUIProps {
  pictureUrl?: string;
  userName?: string;
  notificationCount?: string;
}

const AdminDashboardHeaderUI = (props: AdminDashboardHeaderUIProps) => {
  return (
    <header className='text-white flex justify-between items-center py-4 px-6' style={{ backgroundColor: 'rgb(251, 146, 60)' }}>
      <div className='flex items-center' style={{ border: '5px', borderColor: 'green' }}>
        <span className='text-lg font-bold' style={{ marginRight: 150 }}><h3>FeedMe</h3></span>
        <div className='flex items-center space-x-2'>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 12h16M4 16h16"
              />
            </svg>
          </button>


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

          <span className='hidden lg:block'><h6 className='text-black font-bold'>Hi, {props.userName ? props.userName : 'Michael'}</h6></span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 17.293l-6.646-6.647a.999.999 0 0 1 .707-1.707h13.292a1 1 0 0 1 .707 1.707L12 17.293z" />
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
              {props.notificationCount}
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-1/4">
        <input type="search" id="default-search" className="block w-full p-4 pl-6 pr-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
      </div>


    </header>
  );
};

export default AdminDashboardHeaderUI;
