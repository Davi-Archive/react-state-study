import React, { Component } from 'react';
import '../App.scss'
import { listRepositories } from '../api/github'
import Item from '../components/Item';

interface PropsType {
  name?: string,
  state?: any,
  data?: any,
}


class Repositories extends Component<PropsType, {data:any}>{
  constructor(props:any){
    super(props);

    this.state = {
      data: []
    }
  }


  componentDidMount(){
   listRepositories()
    .then(( data:any )=>{
      this.setState({data})
    })
  }

  render(){
    const { data } = this.state
    return(
        <ul>
          {data.map((item:any) => <Item key={item.id} {...item} /> )}
        </ul>
    )
  }
}


export default Repositories;