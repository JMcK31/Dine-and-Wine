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
  constructor(props) {
    super(props);
      this.state = {
        searchValue: '',
          pairedWines: [ 
            'red ', 
            'white ',
            'sparkling'
            ],
          pairingText: (
            [], 
            'These are some great wines to pair with your food'
            ),
          productMatches: [],
            title: 'TEST',
            description: 'Suggested wine description',
            price: '$50',
            score: '100',
            imageUrl: 'https://fillmurray.com/g/200/300',
            link: 'https://www.fillmurray.com/'       
        };
      }


  componentdidMount() {
    this.performSearch();
  }

  searchChange = e => {
    this.setState({searchValue: e.target.value})
  }

  performSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/pairing?food=${this.state.searchValue}`, {
      headers: {'X-Mashape-Key': 'ZJyTOCf5oumshDvTwSFk11paKhp9p1Ry2SsjsnigTi3aFLLBlX'}
    })
      .then(response => {
        console.log(response)
        this.setState({ 
          pairedWines: response.data.pairedWines, 
          pairingText: response.data.pairingText,
          productMatches: response.data.productMatches,
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
 
   const wines = this.state.pairedWines.map(wine =>
    <li>{wine}</li>
   );

      return ( 
        <div className="App">
          <Header />
          <div>
          <Label><h2>Find a Wine to Match your Meal</h2></Label>
          <Form inline className='searchBar'>
            <FormGroup>
              <FormControl type="search" placeholder="search for a pairing..." onChange={this.searchChange} />
            </FormGroup>
            <Button type="submit" onClick={this.performSearch}> 
              Search
            </Button>
          </Form>
          </div>

            <ul>
              {wines}
            </ul>

            <p> 
              {this.state.pairingText}
            </p>

            <ul>
              <li>{this.state.productMatches.title}</li>
              <li>{this.state.productMatches.score}</li>
              <li>{this.state.productMatches.imageUrl}</li>
              <li>{this.state.productMatches.link}</li>
              <li>{this.state.productMatches.price}</li>
              <li>{this.state.productMatches.score}</li>
            </ul>
            
        </div>
      );
    }
  }
  


export default App;