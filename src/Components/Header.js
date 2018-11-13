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
      
      <Nav className="ml-auto navBarLinks" navbar>
        <div>
        <NavItem>
          <NavLink to="/winesearch"  activeStyle={{background: 'grey', color: 'white'}}>Wine Pairings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dishsearch"  activeStyle={{background: 'grey', color: 'white'}}>Dish Pairings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/winerecommendation" activeStyle={{background: 'grey', color: 'white'}}>Varietal Recommendation</NavLink>
        </NavItem>
        </div>
      </Nav>
    </Navbar>
    <Jumbotron className="jumbotronImg">
      <div className="headerTitle">
        <h1>Dine and Wine</h1>
        <p className="lead">Pair food and wine</p>
      </div>
    </Jumbotron>
  </div>
);

export default Header;
