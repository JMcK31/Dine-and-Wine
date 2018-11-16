import React, { Component } from 'react';
import broken from './../img/broken.jpg';

// 404 page //

const Nope = {
  textAlign:'center',
}

class NotFound extends Component {
  render() {
    return (
      <div className="mainContent">
        <h2 style= { Nope }>There's no food or wine here pal</h2>
        <img className="broken" src={ broken } alt="error"></img>
      </div>
    );
  }
}


export default NotFound;