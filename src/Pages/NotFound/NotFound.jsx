import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-100 flex flex-col py-10">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="animate-pulse mx-auto w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-800 rounded-full flex items-center justify-center">
              <div className="text-7xl sm:text-8xl font-bold text-purple-500 dark:text-purple-300">404</div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral dark:text-neutral-content mb-4">
            We can't find that page
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              className="btn bg-[#a346e6] text-white w-full"
              onClick={() => navigate('/')}
            >
              Go to Homepage
            </button>

            <button
              className="btn btn-outline w-full"
              onClick={() => navigate('/projects')}
            >
              View Our Projects
            </button>

            <button
              className="w-full text-[#a346e6] hover:underline"
              onClick={() => navigate(-1)}
            >
              ← Go Back
            </button>
          </div>

          {/* Team Info */}
          <div className="mt-10 p-4 bg-base-200 dark:bg-base-300 rounded-lg shadow-md">
            <h2 className="text-lg text-gray-800 font-semibold dark:text-gray-300 mb-2">About FiveStack</h2>
            <p className="text-sm text-gray-800 dark:text-gray-400">
              We’re a team of 5 developers building scalable web apps—ready to grow with your vision.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
