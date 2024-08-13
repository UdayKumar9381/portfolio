import React, { useState, useEffect } from 'react';
import './CursorEffect.css';

function CursorEffect() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newStar = {
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 20 + 10,
        opacity: 1
      };
      setStars(stars => [...stars, newStar]);
      setTimeout(() => {
        setStars(stars => stars.slice(1));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-effect">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity
          }}
        />
      ))}
    </div>
  );
}

export default CursorEffect;
