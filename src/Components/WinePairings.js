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

 // This is the Wine Pairings component //

class WinePairings extends Component {
  constructor(props) {
    super(props);
      this.state = {
        searchValue: '',
          pairedWines: [],
          pairingText: [],
          productMatches: []
        };
      }


  componentdidMount() {
    this.performSearch()
  }

  searchChange = e => {
    this.setState({searchValue: e.target.value})
  }

  performSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/pairing?food=${this.state.searchValue}`, {
      headers: {'X-Mashape-Key': 'ZJyTOCf5oumshDvTwSFk11paKhp9p1Ry2SsjsnigTi3aFLLBlX'},
    })
      .then(response => {
        console.log(response)
        this.setState({ 
          pairedWines: response.data.pairedWines, 
          pairingText: response.data.pairingText,
          productMatches: response.data.productMatches
         })  
        })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }
   
    
    render() {
      // Map over paired wines to seperate returned wines into an object //
      const wines = this.state.pairedWines.map(wine =>
        <li>{wine}</li>
      );
      return ( 
        <div className="App">
          <Grid>
            <Row className="show-grid">
              <Col xs={11} md={6} lg={6} xl={6}>
                <Label inline className="searchLbl">Pair a wine with your Meal or Cuisine</Label>
                <Form inline className='searchBar'>
                  <FormGroup>
                    <FormControl 
                      type='search' 
                      value={this.state.searchValue}
                      placeholder='e.g. Italian or Halibut ..' 
                      onChange={this.searchChange} />
                  </FormGroup>
                  <Button type='submit' onClick={this.performSearch}> 
                    Search
                  </Button>
                </Form>
              </Col>
            </Row>
          </Grid>
          {/* make a component */}
        <Grid>
          <Row className="show-grid">
            <Col xs={11} md={8} lg={6}>
              <ul className="winePairings">
                <li>{wines}</li>
              </ul>
              <div className="pairingText">
                <p> 
                  {this.state.pairingText}
                </p>
              </div> 

                <ul>
                  {this.state.productMatches.map(match => 
                    <div key={match.id}>
                      <a href={match.link}><li>{match.title}</li></a>
                      <li>Average Price: {match.price}</li>
                      <li>Score: {match.score}</li>
                      <li></li>
                    </div>
                    )}
                </ul>
                <ul>
                  {this.state.productMatches.map(match =>
                    <div key={match.id}>
                      <li className="wpPairingImg"><img src={match.imageUrl} alt={match.title}/></li>
                      <li>{match.description}</li>
                    </div>
                  )}  
                </ul>
              </Col>
            </Row>             
          </Grid>
        </div>
      );
    }
  }

export default WinePairings;