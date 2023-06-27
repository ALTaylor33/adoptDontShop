import React from 'react';

// const petsData = [

// ];

const Adoption = () => {
  return (
    <div>
      <h2>Meet {pet.name}</h2>
      <ul>
        {petsData.map((pet) => (
          <li key={pet.id}>
            <img src={pet.image} alt={pet.name} />
            
            <p>
              <strong>Species:</strong> {pet.species}
            </p>
            <p>
              <strong>Age:</strong> {pet.age}
            </p>
            <p>
              <strong>Breed:</strong> {pet.breed}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Adoption;