import React from 'react';
import {Jumbotron } from 'react-bootstrap';

// Stateless Header Component //
const Header = () => (
  <div>
    <Jumbotron className="jumbotronImg">
      <div className="headerTitle">
        <h1 className="mainHead">Dine and Wine</h1>
        <h2 className="lead subHead">Pair food and wine</h2>
      </div>
    </Jumbotron>
  </div>
);

export default Header;