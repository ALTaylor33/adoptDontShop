import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import picture from '../../assests/img/puppy.jpg'
import picture2 from '../../assests/img/puppykitty.png'
import picture3 from '../../assests/img/774079.jpg'
import './styles.css'

const Main = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    picture, 
    picture2,
    picture3
    // '../../assests/img/774079.jpg',
    // '../../assests/img/puppy.jpg',
    // '../../assests/img/puppykitty.png'
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
    // <img src={picture} ></img>
    <Carousel interval={null} activeIndex={backgroundIndex}>
      {backgrounds.map((background, index) => (
        <Carousel.Item key={background}>
          <img className="test" src={background} alt={`Background ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Main;