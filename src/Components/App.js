import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WinePairings from './WinePairings';
import DishPairings from './DishPairings';
import Header from './Header';
import WineRecommendation from './WineRecommendation';
import NotFound from './NotFound';

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
            <Route path="/winerecommendation" component={WineRecommendation} />
<<<<<<< HEAD

=======
>>>>>>> b04146a92a56ba38f7a8c05c57a9dc287d1baa96
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
