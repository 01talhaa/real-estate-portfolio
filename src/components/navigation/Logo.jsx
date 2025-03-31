// components/navigation/Logo.jsx
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Logo({ variant = 'default', onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const textColor = variant === 'dark' 
    ? 'text-white' 
    : 'text-white';
  
  const accentColor = variant === 'dark'
    ? 'text-orange-400'
    : 'text-orange-500';

  const hoverStyles = isHovered 
    ? 'transform scale-105 transition-transform duration-300' 
    : 'transition-transform duration-300';
  
  return (
    <div className="logo mt-3">
      <Link 
        href="/" 
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex items-center ${hoverStyles}`}
        data-testid="logo-link"
      >
        <div className={`font-sans text-2xl font-extrabold tracking-tighter ${textColor}`}>
          <span className={accentColor}>P</span>rospect<span className={`${accentColor} ml-1`}>BD</span>
        </div>
      </Link>
    </div>
  );
}