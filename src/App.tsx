import React, { Component } from 'react';
import './App.scss'
import Repositories from './containers/Repositories';


class App extends Component{
  render(){
    return(
      <div className='App'>
        <Repositories />
      </div>
    )
  }
}


export default App;