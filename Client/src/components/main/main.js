import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';



const Main = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [

    'Client/public/assets/img/background1.jpg',
    'Client/public/assets/img/background2.jpg',
    'Client/src/assets/img/background3.jpg'
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
          <img className="d-block w-100" src={"/assets/img/background" + (index + 1) + ".jpg"} alt={`Background ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};


export default Main;

