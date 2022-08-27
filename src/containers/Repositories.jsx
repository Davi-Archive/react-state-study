import React, { Component } from 'react';
import '../App.css'
import Item from '../components/Item';

import { listRepositories } from '../api/github'

class Repositories extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount(){
   listRepositories()
    .then(( data )=>{
      this.setState({data})
    })
  }

  render(){
    const { data } = this.state
    return(
        <ul>
          {data.map(item => <Item key={item.id} {...item} /> )}
        </ul>
    )
  }
}


export default Repositories;