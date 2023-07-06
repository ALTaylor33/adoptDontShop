import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Main = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    'Client/public/assests/img/774079.jpg',
    'Client/public/assests/img/puppy.jpg',
    'Client/public/assests/img/puppykitty.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, [backgrounds.length]);

  return (
    <Carousel interval={null} activeIndex={backgroundIndex}>
      {backgrounds.map((background, index) => (
        <Carousel.Item key={background}>
          <img className="d-block w-100" src={background} alt={`Background ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Main;