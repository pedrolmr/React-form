import React, { Component } from 'react';

import UserForm from './components/UserForm';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
  render(){
    return(
      <div className="App">
        <UserForm />
      </div>
    )
  }
}

export default App;
