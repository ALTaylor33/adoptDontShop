import React, { useEffect, useState } from 'react';

import { useSearchParams, Link } from 'react-router-dom';

import { Link, useSearchParams } from 'react-router-dom';


const SearchResults = () => {
  const [pets, setPets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage] = useState(20);
  const [searchParams, setSearchParams] = useSearchParams()
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
  }, [searchParams, currentPage, petsPerPage]);

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