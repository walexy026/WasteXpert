import React from 'react'
import './NavBar.scss'
import {Button, Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../Assets/Logo.svg'

const NavBar = () => {
  return (
    <Navbar  expand="md" className='Navbar' >
    <Container >
      <Navbar.Brand  href="#"><span><img src={logo} alt="logo"/></span><span className='nav-title d-none d-md-inline'> Wastexpert</span> </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll"/>
      <Navbar.Collapse id="navbarScroll " className='nav-items'>
        <Nav
          className="ms-auto my-1 my-lg-0 px-1"
          style={{ maxHeight: '300px' }}
          navbarScroll
        >
          <Nav.Link className='nav-link px-2 mx-1' href="#">About us</Nav.Link>
          <Nav.Link className='nav-link px-2 mx-1'href="#">Services</Nav.Link>
          <Nav.Link className='nav-link px-2 mx-1'href="#">Contact us</Nav.Link>
          <Nav.Link className='nav-link px-2 mx-1'href="#">FAQ</Nav.Link>
          
        </Nav>
       
          <Button className=' px-5' variant="outline-success bg-success text-light">Login</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar