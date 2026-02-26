import React from 'react';

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Outer stylized X structure */}
      <path 
        d="M20 20L40 50L20 80" 
        stroke="currentColor" 
        strokeWidth="8" 
        strokeLinecap="square"
      />
      <path 
        d="M80 20L60 50L80 80" 
        stroke="currentColor" 
        strokeWidth="8" 
        strokeLinecap="square"
      />
      
      {/* Central core */}
      <rect x="45" y="45" width="10" height="10" fill="currentColor" />
      
      {/* Connection lines */}
      <path d="M40 50H60" stroke="currentColor" strokeWidth="4" />
      
      {/* Tech accents */}
      <circle cx="20" cy="20" r="4" fill="currentColor" />
      <circle cx="80" cy="20" r="4" fill="currentColor" />
      <circle cx="20" cy="80" r="4" fill="currentColor" />
      <circle cx="80" cy="80" r="4" fill="currentColor" />
    </svg>
  );
};
