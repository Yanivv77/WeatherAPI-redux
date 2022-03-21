import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'
import SearchBox from './SearchBox'

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>Weather</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav " className="d-flex justify-content-end">
            <SearchBox />
            <Nav className="ml-auto "></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
