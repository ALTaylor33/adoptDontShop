import React, { useEffect, useState } from 'react';

import { Link, useSearchParams, useNavigate } from 'react-router-dom';


const SearchResults = () => {
  const [pets, setPets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage] = useState(20);
  const searchParams = useSearchParams()
  const navigate = useNavigate();
  console.log(searchParams)
  let filters = ''
  const filtersArr = []
  // get values from the query string and convert the URLParams object into a string of parameters again
  for (let param of searchParams.entries()) {
     filtersArr.push(`${param[0]}=${param[1]}`)
  }
  filters = filtersArr.join('&')

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(`/petfinder?${filters}&limit=${petsPerPage}&page=${currentPage}`, {
         
        });
        const data = await response.json();
        setPets(data.animals);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPets();
  }, []);

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  
  let currentPets = [] 

  let totalPages = 1
  
  if (pets && pets.length > 0) { 
    currentPets = pets.slice(indexOfFirstPet, indexOfLastPet)
    totalPages = Math.ceil(pets.length / petsPerPage)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!pets || pets.length === 0) {
    return <div>No pets found.</div>;
  }

  return (
    <div>
    <h2>Search Results</h2>
    <ul>
      {currentPets.map((pet) => (
        <li key={pet.id}>
          <Link to={`/adoption/${pet.id}`} onClick={() => navigate(`/adoption/${pet.id}`)}>
  <img src={pet.photos[0]?.small} alt={pet.name} />
</Link>
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