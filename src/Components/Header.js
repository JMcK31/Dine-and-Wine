import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  Jumbotron
} from 'react-bootstrap';


const Header = () => (
  <div>
    <Navbar color="light" light expand="md">
      <Navbar.Brand><Link to="/">Wine And Dine</Link></Navbar.Brand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/winesearch">Wine Pairings</Link>
        </NavItem>
        <NavItem>
          <Link to="/dishsearch">Dish Pairings</Link>
        </NavItem>
        <NavItem>
          <Link to ='/Contact' activeStyle={{ background: 'tomato'}}>Contact</Link>
        </NavItem>
      </Nav>
    </Navbar>
    <Jumbotron>
      <h1>Dine and Wine</h1>
    </Jumbotron>
  </div>
);

export default Header;
