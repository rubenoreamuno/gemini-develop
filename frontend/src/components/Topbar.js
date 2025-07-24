import React from 'react';
import { useTheme } from 'next-themes';

const Topbar = ({ toggleSidebar }) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none lg:hidden">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 ml-4">Dashboard</h1>
      </div>
      <div className="flex items-center">
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
        <div className="relative ml-4">
          <button
            className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
          >
            <img
              className="h-full w-full object-cover"
              src="https://via.placeholder.com/150"
              alt="Your avatar"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;