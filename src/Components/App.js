import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Header from './Header';
import WinePairings from './WinePairings';
import DishPairings from './DishPairings';
import WineRecommendation from './WineRecommendation';
import NotFound from './NotFound';

console.log(process.env.REACT_APP_WINE_API_KEY)
// Components are imported into App.js, App.js is the Top-Parent Component //

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Header />
          <Switch>
            <Route exact path="/" component={WineRecommendation} />
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