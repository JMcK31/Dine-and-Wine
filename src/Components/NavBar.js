import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div>
    <ul className='navBar'>
      <li><NavLink to ='.Contacts' activeStyle={{ background: 'tomato'}}>Contact</NavLink></li>
    </ul>
  </div>
);

export default NavBar;