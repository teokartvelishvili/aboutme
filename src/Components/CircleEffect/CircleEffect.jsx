import React, { useEffect } from 'react';
import './CircleEffect.css';

const CircleEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const circle = document.createElement('span');
      const x = e.clientX; // clientX - უფრო ზუსტად მიყვება კურსორს
      const y = e.clientY;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      const size = 5;
      circle.style.width = `${5 + size}px`;
      circle.style.height = `${5 + size}px`;
      circle.className = 'circle';
      document.body.appendChild(circle);
      setTimeout(() => {
        circle.remove();
      }, 5600); // დრო კიდევ ცოტათი გაიზარდა
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
    </div>
  );
};

export default CircleEffect;
