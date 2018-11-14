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
    <Navbar light expand="md">
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">Wine And Dine</NavLink>
        </Navbar.Brand>
      </Navbar.Header>

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
    </Navbar>
    <Jumbotron className="jumbotronImg">
      <div className="headerTitle">
        <h1 className="mainHead">Dine and Wine</h1>
        <h2 className="lead subHead">Pair food and wine</h2>
      </div>
    </Jumbotron>
  </div>
);

export default Header;
