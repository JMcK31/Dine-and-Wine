 import React from 'react';
 import {
   Form,
   FormGroup,
   FormControl,
   Button,
 } from 'react-bootstrap';
 
const Search = ({value, change, submit, placeholder}) => (
  <Form inline className='searchBar'>
    <FormGroup>
      <FormControl 
        type='search' 
        value={value}
        placeholder={placeholder} 
        onChange={change} />
    </FormGroup>
    <Button type='submit' onClick={submit}> 
      Search
    </Button>
  </Form>
);

export default Search;