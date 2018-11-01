import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
 
class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
          pairedWines: [ 
            'red', 
            'white'
            
          ],
          pairingText: [],
          productMatches: [{
            title: 'TEST',
            description: 'Suggested wine description',
            price: '$50',
            score: '100',
            imageUrl: 'https://fillmurray.com/g/200/300',
            link: 'https://www.fillmurray.com/'
                 
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
            title: response.data.productMatches.title,
            descripton: response.data.description,
            price: response.data.price,
            imageUrl: response.data.imageUrl,
            link: response.data.link
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
           <h1>Wine Pair</h1>
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
                {this.state.productMatches.description}
                {this.state.productMatches.price}
                {this.state.productMatches.score}
                {this.state.imageUrl}
                {this.state.link}
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
