import React from 'react';
import {
    Label,
    Form,
    FormGroup,
    FormControl,
    Button,
} from 'react-bootstrap';

class Search extends React.Component {
  render() {  
    return ( 
      <div>
      <Label><h2>Find a Wine to Match your Meal:</h2></Label>
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
    );
  }
}

export default Search;