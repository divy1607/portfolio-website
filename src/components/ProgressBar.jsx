import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';

function ProgressBar() {
  const theme = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress
  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const progress = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
    setScrollProgress(progress);
  };

  // Jump to a specific position when clicking on the scrollbar
  const handleClick = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const progressBarWidth = rect.width;
    const clickPercentage = (clickX / progressBarWidth) * 100;

    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollToPosition = (clickPercentage / 100) * totalHeight;
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set the progress on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '12px', // Increased height for better visibility
        background: theme.palette.mode === 'light'
          ? 'rgba(47, 46, 65, 0.2)'
          : 'rgba(237, 237, 237, 0.2)',
        zIndex: 1200, // Increased zIndex to ensure it’s above everything
        cursor: 'pointer',
        borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#DBA39A40' : '#E8A9A940'}`, // Added border for visibility
      }}
      onClick={handleClick}
    >
      <div
        style={{
          width: `${scrollProgress}%`,
          height: '100%',
          background: theme.palette.mode === 'light'
            ? 'linear-gradient(90deg, #DBA39A, #A8A2B9)'
            : 'linear-gradient(90deg, #E8A9A9, #8B95A1)',
          transition: 'width 0.2s ease',
          borderRadius: '0 6px 6px 0', // Slightly larger radius for better appearance
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)', // Stronger shadow for visibility
        }}
      />
    </div>
  );
}

export default ProgressBar;