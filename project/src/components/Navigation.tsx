import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
  const baseClasses = "text-white hover:text-gold-400 transition-colors font-medium";
  const combinedClasses = `${baseClasses} ${className}`;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Handle internal links with smooth scrolling
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
      
      if (onClick) onClick();
    }
  };
  
  return (
    <a href={href} className={combinedClasses} onClick={handleClick}>
      {children}
    </a>
  );
};