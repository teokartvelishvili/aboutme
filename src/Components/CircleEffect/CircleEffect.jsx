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
      const size = Math.random() * 80; // ზომა ცოტა შემცირდა
      circle.style.width = `${20 + size}px`;
      circle.style.height = `${20 + size}px`;
      circle.className = 'circle';
      document.body.appendChild(circle);
      setTimeout(() => {
        circle.remove();
      }, 2600); // დრო კიდევ ცოტათი გაიზარდა
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
