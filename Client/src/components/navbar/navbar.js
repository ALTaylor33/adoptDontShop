import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarComponent = ({ handleSearch }) => {
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
      // default:
      //   break;
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filters = {
      type: typeFilter,
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
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
  <Navbar.Brand href="/">adoptDontShop</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">

  <Nav
      className="ml-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >


  <Nav.Link className="ui active button" href="/">Home</Nav.Link>
  <Nav.Link className="ui active button" href="/donate">Donate</Nav.Link>
  <Nav.Link className="ui active button" href="/user">My Profile</Nav.Link>
  <Nav.Link className="ui active button" href="/contact">Contact</Nav.Link>
   
    <Form className='float-right' onSubmit={handleSearchSubmit}>
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
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
      </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default NavbarComponent;
