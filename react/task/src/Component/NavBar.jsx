import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Correct import for Link component
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import logo from '../Assests/image 27.png'


export default function NavBar() {
  return (
    <>
    <Navbar bg="transparent" expand="lg" className='N'>
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <img src={logo} className='im-1' alt='Mount' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* No changes needed here */}
        </Navbar.Collapse>
        <Nav className="ml-auto"> 
          <Nav.Link as={Link} to='/'>Destiantion</Nav.Link> 
          <Nav.Link as={Link} to='/religion'>Travel Packages</Nav.Link> 
          <Nav.Link as={Link} to='/about-us'>Deals&Offer</Nav.Link>
          <Nav.Link as={Link} to='/about-us'>HireGuide</Nav.Link>
        </Nav>
      </div>
    </Navbar>
    {/* <Home></Home>
    <br></br>
    <br></br>
    <br></br>
    <CustomCarousel></CustomCarousel> */}
    </>
  );
}