 import React from 'react';
 import {
   Form,
   FormGroup,
   FormControl,
   Button,
 } from 'react-bootstrap';
 
const Search = () => (
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
);

export default Search;