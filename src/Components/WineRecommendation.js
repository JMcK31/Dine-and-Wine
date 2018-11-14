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
            <Label><h5>Search a Varietal for a Recommendation</h5></Label>
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
                        <a href={match.link}><li><strong>{match.title}</strong></li></a>
                        <li>Average Price: {match.price}</li>    
                        <li>Average Rating: {match.averageRating}</li>
                        <li>Score: {match.score}</li>
                        <a href={match.link}><li className="wpPairingImg"><img src={match.imageUrl} alt=''/></li></a>
                        <li>{match.description}</li>
                      </div>
                    )}
                  </ul>
       
          </div>
      );
    }
  }
  


export default WineRecommendation;