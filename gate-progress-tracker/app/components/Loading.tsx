'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'md':
        return 'w-6 h-6';
      case 'lg':
        return 'w-8 h-8';
      default:
        return 'w-6 h-6';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'primary':
        return 'text-blue-600';
      case 'secondary':
        return 'text-gray-600';
      case 'white':
        return 'text-white';
      default:
        return 'text-blue-600';
    }
  };

  return (
    <div className={`${getSizeClasses()} ${getColorClasses()} ${className}`}>
      <svg
        className="animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  children: React.ReactNode;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ 
  isLoading, 
  message = 'Loading...', 
  children 
}) => {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white dark:bg-gray-800 bg-opacity-80 flex items-center justify-center z-10 rounded-lg">
          <div className="flex flex-col items-center space-y-2">
            <LoadingSpinner size="lg" />
            <p className="text-sm text-gray-600 dark:text-gray-300">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  loadingText = 'Loading...',
  children,
  disabled,
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`flex items-center justify-center space-x-2 ${className} ${
        isLoading ? 'cursor-not-allowed opacity-75' : ''
      }`}
    >
      {isLoading && <LoadingSpinner size="sm" color="white" />}
      <span>{isLoading ? loadingText : children}</span>
    </button>
  );
};

export default LoadingSpinner;