import React, { Component } from 'react';
import {
  Label,
  Form,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import axios from 'axios';

 
class WineRecommendation extends Component {
  constructor(props) {
    super(props);
      this.state = {
        searchValue: '',
          recommendedWines: []
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
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/recommendation?wine=${this.state.searchValue}&maxPrice=2000&number=12`, {
      headers: {'X-Mashape-Key': 'ZJyTOCf5oumshDvTwSFk11paKhp9p1Ry2SsjsnigTi3aFLLBlX'},
    })
      .then(response => {
        console.log(response)
        this.setState({ 
          recommendedWines: response.data.recommendedWines
         });  
        })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }
   

render() { 
     return ( 
          <div className="App">
            <div>
            <Label><h2>Search a Varietal for a Recommendation</h2></Label>
            <Form inline className='searchBar'>
              <FormGroup>
                <FormControl 
                  type='search' 
                  value={this.state.searchValue}
                  placeholder='search for a pairing...' 
                  onChange={this.searchChange} />
              </FormGroup>
              <Button type='submit' onClick={this.performSearch}> 
                Search
              </Button>
            </Form>
            
            </div>
              <ul>
                {this.state.recommendedWines.map(match => 
                  <div>
                    <li>Suggestion: {match.title}</li>
                    <li>Price: {match.price}</li>
                    <li>{match.description}</li>
                    <li>{match.averageRating}</li>
                    <li>{match.score}</li>
                    <li><img src={match.imageUrl} alt='' href={match.link}/></li>
                    <li>{match.link}</li>
                  </div>
                )}
              </ul>
          </div>
      );
    }
  }
  


export default WineRecommendation;