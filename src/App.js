import React, { Component } from 'react';
import Header from './Components/Header';
// import Search from './Components/Search';
import {
  Label,
  Form,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

import './App.css';
import axios from 'axios';

 
class App extends Component {
  constructor() {
        super();
        this.state = {
          pairedWines: [
            {
               wine: ''
              },
            { 
              pairingText: '' 
            },
            { 
              productMatches: ''
             }
          ]
        }
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
        console.log(response)
        this.setState({ 
            pairedWines: response.data.pairedWines,
            pairingText: response.data.pairingText,
            productMatches: response.data.productMatches
            // title: response.data.productMatches.title,
            // descripton: response.data.description,
            // price: response.data.price,
            // imageUrl: response.data.imageUrl,
            // link: response.data.link
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
          <div>
          <Label><h2>Find a Wine to Match your Meal</h2></Label>
          <Form inline className='searchBar'>
            <FormGroup>
              <FormControl type="search" placeholder="search for a pairing..." />
            </FormGroup>
            <Button type="submit" onClick ={
              this.performSearch()}> 
              Search
            </Button>
          </Form>
          </div>

          {/* <button onClick = {
            () => this.performSearch()}> Search
          </button>  */}
            <ul>
              <li>
                {this.state.pairedWines}
              </li>
            </ul>

            <p> 
              {this.state.pairingText}
            </p>

            <ul>
              <li>{this.state.productMatches}</li>
              {/* <li>{this.state.productMatches.score}</li>
              <li>{this.state.productMatches.imageUrl}</li>
              <li>{this.state.productMatches.link}</li>
              <li>{this.state.productMatches.price}</li>
              <li>{this.state.productMatches.score}</li> */}
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