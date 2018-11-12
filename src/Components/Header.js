import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  Jumbotron
} from 'react-bootstrap';


const Header = () => (
  <div>
    <Navbar color="light" light expand="md">
      <Navbar.Brand><NavLink to="/">Wine And Dine</NavLink></Navbar.Brand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/winesearch">Wine Pairings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dishsearch">Dish Pairings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/winerecommendation">Varietal Recommendation</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to ="/Contact" activeStyle={{ color:'white', backgroundColor: 'red', borderRadius: '1'}}>Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
    <Jumbotron>
      <h1>Dine and Wine</h1>
    </Jumbotron>
  </div>
);

export default Header;
