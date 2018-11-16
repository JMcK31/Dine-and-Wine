import React, { Component } from 'react';
import {
  Label,
  Form,
  FormGroup,
  FormControl,
  Button,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import axios from 'axios';
import Search from "./Search"

 
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
            <Grid>
              <Row className="show-grid">
                <Col xs={11} md={6} lg={6} xl={6}>
                  <Label><h5>Find a Wine to Match your Meal</h5></Label>
                    <Search 
                      value={this.state.searchValue}
                      placeholder='search for a pairing...' 
                      onChange={this.searchChange} 
                      submit = {this.performSearch}
                      />
                </Col>
              </Row>
            </Grid>
              <Grid>
                <Row className="show-grid">
                  <Col xs={11} md={8} lg={6}>
                  {/* need to style below, add padding bg? container? */}
                    <p> 
                      {this.state.text}
                    </p>
                    <p>
                      {this.state.pairings}
                    </p>
                  </Col>
                </Row>             
              </Grid>
          </div>
      );
    }
  }
  


export default DishPairings;