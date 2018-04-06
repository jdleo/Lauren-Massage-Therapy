import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

import MediaQuery from 'react-responsive';

class Landing extends Component {
  render() {
    return(
      <div style= {{width: '100%', margin: 'auto'}}>
        <MediaQuery query="(min-device-width: 1224px)">
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src="https://www.farmsteadapp.com/assets/instant/icons/avatar-female-ca2c0612db1b4067b537b0ce386004e4c5ca10abcc0873d2152af1e9c0965e92.png"
                alt="avatar"
                className="avatar-img"
              />

              <div className="banner-text">
                <h1>Lauren Vickers</h1>
                <hr/>
                <p>THERAPEUTIC  •  DEEP TISSUE  •  SPORTS  •  LODI, CA</p>
                <hr/>
              <p>info@laurenvickers.xyz  •  209.336.3373</p>
              </div>
            </Cell>
          </Grid>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 1224px)">
          <Grid className="landing-grid-mobile">
            <Cell col={12}>
              <img
                src="https://www.farmsteadapp.com/assets/instant/icons/avatar-female-ca2c0612db1b4067b537b0ce386004e4c5ca10abcc0873d2152af1e9c0965e92.png"
                alt="avatar"
                className="avatar-img-mobile"
              />

            <div className="banner-text-mobile">
                <h1>Lauren Vickers</h1>
                <hr/>
                <p>THERAPEUTIC  •  DEEP TISSUE  •  SPORTS  •  LODI, CA</p>
                <hr/>
              <p>info@laurenvickers.xyz  •  209.336.3373</p>
              </div>
            </Cell>
          </Grid>
        </MediaQuery>
      </div>
    )
  }
}

export default Landing;
