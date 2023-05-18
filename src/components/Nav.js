import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../assets/images/Logo.svg';

const CNavbar = () => {
  return (
    <Navbar className='py-4' bg="white" expand="lg">
      <Navbar.Brand href="/">
        <img className='ms-5' src={logo} alt="Logo" height="30" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default CNavbar;
