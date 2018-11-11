import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WinePairings from './WinePairings';
import DishPairings from './DishPairings';
// import Contact from './Contact';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={WinePairings} />
            <Route path="/winesearch" component={WinePairings} />
            <Route path="/dishsearch" component={DishPairings} />
            {/* <Route path="/contact" component={Contact} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;