import React, { Component } from 'react';
import './App.css'

class MyButton extends Component {
  render(){
    return <p><button onClick={() => this.props.handleClick(this.props.label)}>{this.props.label}</button></p>
  }
}

class MyLabel extends Component{
  render(){
    console.log(this.props)
    return <p>Clique no: {this.props.text}</p>
  }
}

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      labelText: 'inicio',
    };
    this.setLabelText = this.setLabelText.bind(this);
  }

  setLabelText(labelText){
    this.setState({ labelText });
  }

  render(){
    return(
      <div className='App'>
        <MyLabel text={this.state.labelText}/>
        <MyButton handleClick={this.setLabelText} label ='Botão 1'/>
        <MyButton handleClick={this.setLabelText} label ='Botão 2'/>
        <MyButton handleClick={this.setLabelText} label ='Botão 3'/>
        <MyButton handleClick={this.setLabelText} label ='Botão 4'/>
      </div>
    )
  }
}


export default App;