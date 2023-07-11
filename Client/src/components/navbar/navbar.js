
import React, { useState } from 'react';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


const Navigationbar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [breedFilter, setBreedFilter] = useState('');
  const [weightFilter, setWeightFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [radiusFilter, setRadiusFilter] = useState('');


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
     <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
        {/* <Navbar.Brand href="/">adoptDontShop</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
       
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >


        <Nav.Link className="ui active button"><a href="/">Home</a></Nav.Link>
        <Nav.Link className="ui active button"><a href="/donate">Donate</a></Nav.Link>
        <Nav.Link className="ui active button"><a href="/user">My Profile</a></Nav.Link>
        <Nav.Link className="ui active button"><a href="/contact">Contact</a></Nav.Link>
          </Nav>
     
      <Form className='d-flex' onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search pets..."
          value={searchTerm}
          onChange={handleSearchInput}
        />
        <select name="species" value={speciesFilter} onChange={handleFilterChange}>
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


export default Navigationbar;


//need to move site name & logo to upper left corner & bottom right corner
//search bar needs to be on same lne w/ nav buttons
//add bg imgs, scrap carousel
//update site theme (blue)




    // <Navbar expand="lg" className="bg-body-tertiary">
 
    //         <Nav.Link href="#action1">Home</Nav.Link>
    //         <Nav.Link href="#action2">Link</Nav.Link>
    //         <NavDropdown title="Link" id="navbarScrollingDropdown">
    //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Something else here
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Link href="#" disabled>
    //           Link
    //         </Nav.Link>
    //       </Nav>
    //       <Form className="d-flex">
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button ">Search</Button>
    //       </Form>
     
   




