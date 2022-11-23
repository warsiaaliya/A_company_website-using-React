import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'

 

const Navbar1 = () => {
    return (
        <>
    <div className="container-fluid nav-bg">
        <div className="row">
        <div className="col-10 mx-auto">
      <Navbar className="navbar"  expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/Home">Wonder Web Service</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/About">About</Nav.Link>
            <Nav.Link as={NavLink} to="/Service">Service</Nav.Link>
            <Nav.Link as={NavLink} to="/Contact">Contact</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
          </div>
        </div>

        </>
    )
}

export default Navbar1;

 {/* <div className="container-fluid nav-bg">
        <div className="row">
        <div className="col-12 mx-auto">
        /* </div>
          </div>
        </div>  */
      }