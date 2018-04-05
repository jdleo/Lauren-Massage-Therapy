import React, { Component } from 'react';
import './App.css';

//MDL components needed
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Textfield from 'react-mdl/lib/Textfield';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header title="Title" scroll>
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
