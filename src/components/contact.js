import React, {Component} from 'react';
import {Grid, Cell, TextField, Button} from 'react-mdl';
import Textfield from 'react-mdl/lib/Textfield';

class Contact extends Component {
  render() {
    return(
      <div style= {{width: '100%', margin: 'auto'}}>
        <Grid className="contact-grid">
          <Cell col={12}>
            <Textfield
                onChange={() => {}}
                label="Enter your email..."
                floatingLabel
                style={{width: '50%'}}
            />
          </Cell>

          <Cell col={12}>
            <Textfield
                onChange={() => {}}
                label="Enter your message, hit 'Submit', and I'll get back to you as soon as possible!"
                rows={3}
                style={{width: '50%'}}
            />
          </Cell>
          <Cell col={12}>
            <Button raised colored ripple style={{width: '50%'}}>Submit</Button>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
