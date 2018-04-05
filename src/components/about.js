import React, {Component} from 'react';
import {Card, CardText, CardTitle, Grid, Cell,
        CardActions, CardMenu, Button, IconButton} from 'react-mdl';

class About extends Component {
  render() {
    return(
        //grid for aboutMe cells
        <Grid>
          <Cell col={12}>
              <Card shadow={0} style={{width: '50%', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(./images/background1.png) center / cover'}}>About Lauren</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo sem, scelerisque maximus dignissim eget, egestas dapibus felis. Nullam orci nisl, ultricies a ultrices ac, convallis a metus. Aliquam erat volutpat. Praesent sit amet elit vitae dolor cursus sollicitudin. Nulla odio ipsum, molestie condimentum orci eget, varius interdum est. Ut.
                </CardText>
              </Card>
            </Cell>
            <Cell col={12}>
              <Card shadow={0} style={{width: '50%', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>About Lauren</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo sem, scelerisque maximus dignissim eget, egestas dapibus felis. Nullam orci nisl, ultricies a ultrices ac, convallis a metus. Aliquam erat volutpat. Praesent sit amet elit vitae dolor cursus sollicitudin. Nulla odio ipsum, molestie condimentum orci eget, varius interdum est. Ut.
                </CardText>
              </Card>
            </Cell>
            <Cell col={12}>
              <Card shadow={0} style={{width: '50%', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>About Lauren</CardTitle>
                <CardText>
                  As I am a certified, massage therapist, I've uploaded a scan of my certification for your convenience! You can go ahead and download it below 🎉
                </CardText>
              <CardActions border>
                  <Button colored ripple>Download Certification</Button>
              </CardActions>
              </Card>
          </Cell>
        </Grid>
    )
  }
}

export default About;
