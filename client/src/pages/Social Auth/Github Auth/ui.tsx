import * as React from 'react';

interface GithubAuthUIProps {}

export default function GithubAuthUI(props: GithubAuthUIProps) {
  const GITHUB_AUTH_URI =
    'http://localhost:8080/food-delivery/oauth2/authorize/github?redirect_uri=http://localhost:3000/oauth2/redirect';

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    window.location.href = GITHUB_AUTH_URI;
  };

  return (
    <div className='flex items-center justify-center pt-4 pb-2 m-0'>
      <button
        onClick={handleButtonClick}
        className='flex w-full justify-center items-center bg-blue-600 border border-blue-600 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      >
        <div className='bg-white p-2 mr-3 w-6 h-6'>
          <svg
            className='h-3 w-3'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            fill='currentColor'
            style={{ color: '#1877f2' }}
            width='800px'
            height='800px'
            viewBox='0 0 24 24'
            version='1.1'
          >
            <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
          </svg>
        </div>
        <span>Continue with Github</span>
      </button>
    </div>
  );
}
