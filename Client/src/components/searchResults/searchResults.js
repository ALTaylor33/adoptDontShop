import React, { useEffect, useState } from 'react';

const SearchResults = ({ searchQuery }) => {
  const [pets, setPets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage] = useState(20);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(`https://api.petfinder.com/v2/animals?type=dog&location=${searchQuery}&limit=${petsPerPage}&page=${currentPage}`, {
          headers: {
            'Authorization': 'Bearer YOUR_API_KEY'
          }
        });
        const data = await response.json();
        setPets(data.animals);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPets();
  }, [searchQuery, currentPage, petsPerPage]);

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

  const totalPages = Math.ceil(pets.length / petsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (pets.length === 0) {
    return <div>No pets found.</div>;
  }

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {currentPets.map((pet) => (
          <li key={pet.id}>
            <img src={pet.photos[0]?.small} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>
              <strong>Species:</strong> {pet.species}
            </p>
            <p>
              <strong>Age:</strong> {pet.age}
            </p>
            <p>
              <strong>Breed:</strong> {pet.breeds.primary}
            </p>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((pageNumber) => (
        <li
          key={pageNumber}
          className={pageNumber === currentPage ? 'active' : ''}
        >
          <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;