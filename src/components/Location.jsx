import React, { Component } from 'react'

export default class Location extends Component {
  // console.log(this.props.location.name);
  
  constructor(props){
    // console.log('constructor');
    super(props);
    this.state = {
      // name: props.location.name,
      // region: props.location.region,
      // country: props.location.country,
      // localtime: props.location.localtime,
    }
  }
    
  render() {
    return (
      <>
        <div>Location</div>
        <h1>{this.props.location.name}</h1>
        <h1>{this.props.location.country}</h1>
        <h1>{this.props.location.region}</h1>
        <h1>{this.props.location.localtime}</h1>
      </>
    )
  }
}
