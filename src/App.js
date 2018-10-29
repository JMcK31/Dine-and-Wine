import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
 
class App extends Component {
  constructor() {
        super();
        this.state = {
          pairedWines: [],
        };
      }

  componentdidMount() {
    this.performSearch();
  }

  performSearch = (query = 'chicken') => {
    axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/pairing?food=${query}`, {
      headers: {
        'X-Mashape-Key': 'ZJyTOCf5oumshDvTwSFk11paKhp9p1Ry2SsjsnigTi3aFLLBlX'
      }
    })
      .then(response => {
        console.log(response);
        // this.setState( { 
        //   pairedWines: response.headers.body

      })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
      }
  

  render() {
    console.log(this.state.pairedWines);
    return <div>
        <button onClick = {
        () => this.performSearch()}> Click here to call API 
        </button> /}
        </div>
  };
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     recipe:[]
  //   };
  // }

  // componentDidMount() {

  // }

  //   render() {
  //     return (
  //       <div className="App">
  //        <header>Testing</header>
  //       </div>
  //     );
  //   }
  // }

export default App;
