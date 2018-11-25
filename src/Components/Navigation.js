import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav
} from 'react-bootstrap';

// Navbar connects links to Browser Router on App.js //
const Navigation = () => (
  <div>
  <Navbar light='true' expand="md">
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">Wine And Dine</NavLink>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav className="ml-auto" navbar>
        <ul className="navBarLinks">
          <NavLink to="/winesearch"  activeStyle={{background: 'grey', color: 'white', padding: '1px'}}>Wine Pairings</NavLink>
          <NavLink to="/dishsearch"  activeStyle={{background: 'grey', color: 'white', padding:'1px'}}>Dish Pairings</NavLink>
          <NavLink to="/winerecommendation" activeStyle={{background: 'grey', color: 'white', padding: '1px' }}>Varietal Recommendation</NavLink>
        </ul>
      </Nav>
    </Navbar>
  </div>
);

export default Navigation;
