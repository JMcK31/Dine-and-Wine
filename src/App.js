import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
 
class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
          pairedWines: [],
          pairingText: [],
          productMatches: [{
            title: '',
            description: '',
            price: ''
                 
          }]
        };
      }

  componentdidMount() {
    this.performSearch();
  }

  performSearch = (query = 'chicken') => {
    axios
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/pairing?food=${query}`, {
      headers: {'X-Mashape-Key': 'ZJyTOCf5oumshDvTwSFk11paKhp9p1Ry2SsjsnigTi3aFLLBlX'}
    })
      .then(response => {
        this.setState({ 
            pairedWines: response.data.pairedWines,
            pairingText: response.data.pairingText,
            productMatches: response.data.productMatches
         });  
        })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }
  

  render() {
    console.log(this.state.pairedWines);
      return ( 
        <div className="App">
          <button onClick = {
            () => this.performSearch()}> Click here to call API 
          </button> 
            <ul>
              <li>
                {this.state.pairedWines}
              </li>
            </ul>
            <p> 
              {this.state.pairingText}
            </p>
            <ul>
              <li>
                {this.state.productMatches}
              </li>
            </ul>
        </div>
      );
    }
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     recipe:[]
  //   };
  // }
      // console.log(response);


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
