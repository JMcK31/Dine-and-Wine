import React, { Component } from 'react';
import Header from './Components/Header';
import Search from './Components/Search';
import {
  Grid
} from 'react-bootstrap';
import './App.css';
import axios from 'axios';
 
class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
          pairedWines: [ 
            'red ', 
            'white ',
            'sparkling'
          ],

          pairingText: (
            [], "Chardonnay, Pinot Noir, and Sauvignon Blanc are my top picks for Salmon. To decide on white or red, you should consider your seasoning and sauces. Chardonnay is a great friend to buttery, creamy dishes, while sauvignon blanc can complement herb or citrus-centric dishes. A light-bodied, low-tannin red such as the pinot noir goes great with broiled or grilled salmon. The Chehalem INOX Chardonnay with a 4.1 out of 5 star rating seems like a good match. It costs about 13 dollars per bottle."),

          productMatches: {
            id: '',
            title: 'TEST',
            description: 'Suggested wine description',
            price: '$50',
            imageUrl: 'https://fillmurray.com/g/200/300',
            averageRating: '',
            ratingCount: '',
            score: '100',
            link: 'https://www.fillmurray.com/'       
          }
        };
      }

  // get wine to pair with food
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
            productMatches: response.data.productMatches,
            id: response.data.productMatches.id,
            title: response.data.productMatches.title,
            descripton: response.data.productMatches.description,
            price: response.data.procuctMatches.price,
            imageUrl: response.data.productMatches.imageUrl,
            averageRating: response.data.productMatches.averageRating,
            ratingCount: response.data.productMatches.ratingCount,
            score: response.data.productMatches.score,
            link: response.data.link
         });  
        })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }
  
  //Create paired wines variable 
  //when user selects wine in li selected wine is entered in api callback to get wine description and callback for wine recomendations 
  
    

  render() {
    console.log(this.state.pairedWines);
      return ( 

        <div className="App">
          <Header />
          <Search />
            
          <Grid>

            <div>
              <h3>Varietal Parings</h3>
              {this.state.pairedWines}
           
              </div>
           

            <div>
              <h3>Info about the wine pairings</h3>
              <p> 
                {this.state.pairingText}
              </p>
            </div>

            <div>
              <ul>
                <h3>Here's a recomendation</h3>
                <li>{this.state.productMatches.description}</li>
                <li>{this.state.productMatches.score}</li>
                <li>{this.state.productMatches.imageUrl}</li>
                <li>{this.state.productMatches.link}</li>
                <li>{this.state.productMatches.price}</li>
                <li>{this.state.productMatches.score}</li>
              </ul>
            </div>
          </Grid>
        </div>
      );
    }
  }


export default App;