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
      <Navbar.Header> 
        <Navbar.Brand>
          <NavLink to="/">Wine And Dine</NavLink>
        </Navbar.Brand>  
      </Navbar.Header>
      <Nav className="ml-auto navbar" navbar>
        <div>
        <NavItem>
          <NavLink to="/winesearch">Wine Pairings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dishsearch">Dish Pairings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/winerecommendation">Varietal Recommendation</NavLink>
        </NavItem>
        </div>
      </Nav>
    </Navbar>;
    <Jumbotron>
      <div className="headerTitle">
        <h1>Dine and Wine</h1>
        <p className="lead">Pair food and wine</p>
      </div>
    </Jumbotron>
  </div>
);

export default Header;
