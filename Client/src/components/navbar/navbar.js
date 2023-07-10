import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
//removed  from parameters of Navbar
const Navbar = ({ handleSearch }) => {
  const navigate = useNavigate();
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
      case 'type':
        setTypeFilter(value);
        break;
      // case 'breed':
      //   setBreedFilter(value);
      //   break;
      // case 'weight':
      //   setWeightFilter(value);
      //   break;
      // case 'color':
      //   setColorFilter(value);
      //   break;
      // case 'gender':
      //   setGenderFilter(value);
      //   break;
      // case 'radius':
      //   setRadiusFilter(value);
      //   break;
      default:
        break;
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filters = {
      species: typeFilter,
      // breed: breedFilter,
      // weight: weightFilter,
      // color: colorFilter,
      // gender: genderFilter,
      // radius: radiusFilter
    };

    // generate a string in a key=value format, ex type=cat&location=texas
    const filtersArray = []
    for (let key in filters) {
      filtersArray.push(`${key}=${filters[key]}`)
    }
    const searchFilters = filtersArray.join('&')
    console.log(searchFilters)
    //navigate to the searchresults page with query parameters
    navigate({
      pathname: '/searchResults',
      search: `?location=${searchTerm}&${searchFilters}`
    })
    //window.location.href = '/searchResults?query='+searchTerm
    //handleSearch(searchTerm, filters);
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
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;