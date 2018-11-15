import React, { Component } from 'react';
import {
  Label,
  Form,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import axios from 'axios';

 
class DishPairings extends Component {
  constructor(props) {
    super(props);
      this.state = {
        searchValue: '',
          text: [],
          pairings: []
            }
        };
      


  componentdidMount() {
    this.performSearch();
  }

  searchChange = e => {
    this.setState({searchValue: e.target.value})
  }

  performSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/dishes?wine=${this.state.searchValue}`, {
      headers: {'X-Mashape-Key': 'ZJyTOCf5oumshDvTwSFk11paKhp9p1Ry2SsjsnigTi3aFLLBlX'},
    })
      .then(response => {
        console.log(response)
        this.setState({ 
          text: response.data.text, 
          pairings: response.data.pairings
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
              <Label><h5>Find a Meal to Match your Wine!</h5></Label>
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
              <div> 
                <p> 
                  {this.state.text}
                </p>
                <p>
                  {this.state.pairings}
                </p>
              </div> 
          </div>
      );
    }
  }
  


export default DishPairings;