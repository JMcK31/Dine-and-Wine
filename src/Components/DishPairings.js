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

 // This is the Dish Pairings Component // 

const apiKey = {'X-Mashape-Key': 'ZJyTOCf5oumshDvTwSFk11paKhp9p1Ry2SsjsnigTi3aFLLBlX'}

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
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/dishes?wine=${this.state.searchValue} {headers: ${apiKey}}`
    )
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
    const food = this.state.pairings.map(food =>
      <li key={food.id}>{food}</li>
      // map over food componenet pull pairings from data and display in ul // 
    );
    return ( 
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col>
              <Label inline className="searchLbl">Find a Meal to Match a Wine</Label>
              <Form inline className='searchBar'>
                <FormGroup>
                  <FormControl 
                    type='search' 
                    value={this.state.searchValue}
                    placeholder='e.g. Chardonnay...' 
                    onChange={this.searchChange} />
                </FormGroup>
                <Button type='submit' onClick={this.performSearch}> 
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
        </Grid>
          <Grid>
            <Row className="show-grid">
              <Col xs={11} md={8} lg={6}>
                <div className="bodyContent">
                <div className="dishPairings">
                  <p> 
                    {this.state.text}
                  </p>
                  <ul className="food">
                    {food}
                  </ul>
                </div>
                </div>
              </Col>
            </Row>             
          </Grid>
      </div>
    );
  }
}
  


export default DishPairings;