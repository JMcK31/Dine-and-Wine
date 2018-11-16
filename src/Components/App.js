import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Header from './Header';
import WinePairings from './WinePairings';
import DishPairings from './DishPairings';
import WineRecommendation from './WineRecommendation';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Header />
          <Switch>
            <Route exact path="/" component={WinePairings} />
            <Route path="/winesearch" component={WinePairings} />
            <Route path="/dishsearch" component={DishPairings} />
            <Route path="/winerecommendation" component={WineRecommendation} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;