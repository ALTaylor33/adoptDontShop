import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Main = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    'Client/public/assets/img/background1.jpg',
    'Client/public/assets/img/background2.jpg',
    'Client/public/assets/img/background3.jpg',
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
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Carousel interval={null} activeIndex={backgroundIndex}>
        {backgrounds.map((background, index) => (
          <Carousel.Item key={background}>
            <img
              className="d-block w-100"
              src={`/assets/img/background${index + 1}.jpg`}
              alt={`Background ${index + 1}`}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '20px', 
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: '20px',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
             Discover your perfect furry companion with our pet adoption site. We connect you with official adoption resources, making it easier than ever to find your forever friend. Whether you're searching for a playful pup, a cuddly kitten, or a loyal companion of any kind, our platform provides a seamless adoption experience. Browse through a wide range of adorable pets, each seeking a loving home. With just a few clicks, you can connect with reputable shelters and rescue organizations, ensuring a responsible and compassionate adoption process. Begin your journey today and embark on a lifetime of joy and companionship with your new best friend.
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Main;
