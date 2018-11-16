import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';


const Navigation = () => (
  <div>
    <Navbar default collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">Wine And Dine</NavLink>
        <Navbar.Toggle />
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav className="ml-auto" navbar>
        <div className="navBarLinks">
          <NavItem>
            <NavLink to="/winesearch"  activeStyle={{background: 'grey', color: 'white', padding: '1px'}}>Wine Pairings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/dishsearch"  activeStyle={{background: 'grey', color: 'white', padding:'1px'}}>Dish Pairings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/winerecommendation" activeStyle={{background: 'grey', color: 'white', padding: '1px' }}>Varietal Recommendation</NavLink>
          </NavItem>
        </div>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navigation;
