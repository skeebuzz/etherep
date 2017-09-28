import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {


    componentDidMount() {
        console.log("component mounted...");
    }

  render() {
    const Mystyle ={
        position: 'fixed',
        width: '100%',
        height: '100%',
        opacity: '0.6',
        backgroundColor: 'black'
    }
    return (
      <div className="App">
           <div style={Mystyle}>
           <input type="text" value="Enter your id..."></input>
           <input type="submit" value="submit"></input>
           </div>
      </div>

    );
  }

}
export default App;
