import React from 'react';
import { FormGroup, Label } from 'react-bootstrap';

class Contact extends React.Component {

  render() {
    return (
      <div>
        <div className='header'>
          <h2>Say Hello</h2>
          <p>We would love to hear from you!</p>
        </div>
       
          <FormGroup>
            <Label>Name</Label>
            {/* <Input type='text' /> */}
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            {/* <Input type='text' /> */}
          </FormGroup>
          <FormGroup>
            <Label></Label>
            {/* <Input type='text' /> */}
          </FormGroup>
      </div>
    );
  }
}

export default Contact;