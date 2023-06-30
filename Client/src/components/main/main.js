import React, { useEffect, useState } from 'react';

const Main = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, [backgrounds.length]);

  const currentBackground = backgrounds[backgroundIndex];

  return (
    <div className="main">
      <div className="background" style={{ backgroundImage: `url(${currentBackground})` }}></div>
      {/* Your content here */}
    </div>
  );
};

export default Main;