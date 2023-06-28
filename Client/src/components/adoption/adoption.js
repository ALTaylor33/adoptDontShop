import React, { useEffect, useState } from 'react';

const Adoption = () => {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await fetch('https://api.petfinder.com/v2/animals/123', {
          headers: {
            'Authorization': 'Bearer YOUR_API_KEY'
          }
        });
        const data = await response.json();
        setPet(data.animal);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPet();
  }, []);

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pet.name}</h2>
      <img src={pet.photos[0]?.medium} alt={pet.name} />
      <p>
        <strong>Species:</strong> {pet.species}
      </p>
      <p>
        <strong>Age:</strong> {pet.age}
      </p>
      <p>
        <strong>Breed:</strong> {pet.breeds.primary}
      </p>
      <p>
        <strong>Description:</strong> {pet.description}
      </p>
    </div>
  );
};

export default Adoption;