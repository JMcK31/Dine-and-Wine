import React, { Component } from 'react';
import {
  Jumbotron,
  Form,
  FormGroup,
  FormControl,
  Button,
  Grid
} from 'react-bootstrap';
import './App.css';
import axios from 'axios';
 
class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
          pairedWines: [ 
            'red' , 
            'white' ,
            'sparkling'
          ],

          pairingText: (
            [], 'These are some great wines to pair with your food'),

          productMatches: ( [
          //   title: 'TEST',
          //   description: 'Suggested wine description',
          //   price: '$50',
          //   score: '100',
          //   imageUrl: 'https://fillmurray.com/g/200/300',
          //   link: 'https://www.fillmurray.com/'       
          ])
        };
      }
  // const pairedWines = pairedWines.map((this.pairedWines) 


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
  
  //Create paired wines variable 
  //when user selects wine in li selected wine is entered in api callback to get wine description and callback for wine recomendations 
  
    

  render() {
    console.log(this.state.pairedWines);
      return ( 
        <div className="App">
           <div className="jumbotron">
             <Jumbotron>
               <h1>Wine Pair</h1>
             </Jumbotron>   
           </div>

          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <FormControl type="search" placeholder="search for a pairing..." />
            </FormGroup>
              {' '} 
            <Button type="submit">
              search
            </Button>
          </Form>

          <button onClick = {
            () => this.performSearch()}> Click here to call API 
          </button> 
          
          <Grid>
            <div>
              <ul className='wineResults'>
                <h3>Wine Results</h3>
                <li>
                  {this.state.pairedWines}
                </li>
              </ul>
            </div>

            <h3>Info about the wine pairings</h3>
            <p> 
              {this.state.pairingText}
            </p>

            <ul>
              <h3>Here's a recomendation</h3>
              <li>{this.state.productMatches.description}</li>
              <li>{this.state.productMatches.score}</li>
              <li>{this.state.productMatches.imageUrl}</li>
              <li>{this.state.productMatches.link}</li>
              <li>{this.state.productMatches.price}</li>
              <li>{this.state.productMatches.score}</li>
            </ul>
          </Grid>
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
