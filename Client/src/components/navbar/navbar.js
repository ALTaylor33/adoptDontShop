import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
//removed  from parameters of Navbar
const Navbar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  // const [breedFilter, setBreedFilter] = useState('');
  // const [weightFilter, setWeightFilter] = useState('');
  // const [colorFilter, setColorFilter] = useState('');
  // const [genderFilter, setGenderFilter] = useState('');
  // const [radiusFilter, setRadiusFilter] = useState('');


  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
 
    switch (name) {
      case 'species':
        setSpeciesFilter(value);
        break;
      case 'breed':
        setBreedFilter(value);
        break;
      case 'weight':
        setWeightFilter(value);
        break;
      case 'color':
        setColorFilter(value);
        break;
      case 'gender':
        setGenderFilter(value);
        break;
      case 'radius':
        setRadiusFilter(value);
        break;
      default:
        break;
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filters = {
      species: speciesFilter,
      breed: breedFilter,
      weight: weightFilter,
      color: colorFilter,
      gender: genderFilter,
      radius: radiusFilter
    };
    handleSearch(searchTerm, filters);
  };

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/donate">Donate</a></li>
        <li><a href="/user">My Profile</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search pets..."
          value={searchTerm}
          onChange={handleSearchInput}
        />
        <select name="type" value={typeFilter} onChange={handleFilterChange}>
          <option value="">Species</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="rabbit">Rabbit</option>
          <option value="reptile">Reptile</option>
        </select>
        {/* Add more filters */}
  
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Navbar;