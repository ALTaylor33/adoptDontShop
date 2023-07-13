import React from 'react';

const Main = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    'Client/public/assets/img/774079.jpg',
    'Client/public/assets/img/puppy.jpg',
    'Client/public/assets/img/puppykitty.png'

  
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
    <div className="main-container">
      <img
        className="img-fluid"
        src="../../assets/img/background1.jpg"
        alt="Background"
        style={{ marginTop: '-10%', marginBottom: '1px' }}
      />
    </div>
  );
};

export default Main;