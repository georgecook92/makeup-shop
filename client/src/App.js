import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount() {

    axios({
      method: 'get',
      url: '/api/cart/getCart',
      headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozNywiaWF0IjoxNDgxMzE4ODcyLCJleHAiOjE0ODEzNDA0NzJ9.lh-TCxDdi4cNO0lVLtW52kbSnQncYDZNvBv2YCUW3Ck" }
    }).then( (res) => console.log("res", res) )
      .catch(  (e) => console.log("error", e))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
