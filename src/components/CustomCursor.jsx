import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Add more elements or specific classes to trigger hover effect
      if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(e.target.tagName) || e.target.closest('.interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
};

export default CustomCursor;
