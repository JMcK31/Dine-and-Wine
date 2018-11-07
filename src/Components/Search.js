import React from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    Button,
} from 'react-bootstrap';

class Search extends React.Component {
  render() {  
    return ( 
      <Form inline className='searchBar'>
        <FormGroup>
          <FormControl type="search" placeholder="search for a pairing..." />
        </FormGroup>
        <Button type="submit" onClick = {
            () => this.performSearch()}> Search 
        </Button>
      </Form>
    );
  }
}

export default Search;