import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }


    render()
      return (
        <form style={MyContainer} onSubmit={this.handleSubmit}>
          <label style={Mydiv}>
            <input style={Myinput} type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input style={Myinput} type="submit" value="Submit" />
        </form>
      );
  }
}
export default App;
