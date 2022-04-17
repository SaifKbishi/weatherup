import React, { Component } from 'react';
import {Container, Box, Typography, Button  } from '@mui/material/';

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
      <Container>
        <Box sx={{display:'flex', m:1}}>
          <Typography sx={{display:'flex', p:0.5}}>City: {this.props.location.name}</Typography>
          <Typography sx={{display:'flex', p:0.5}}>Region: {this.props.location.region}</Typography>
          <Typography sx={{display:'flex', p:0.5}}>Country: {this.props.location.country}</Typography>
          <Typography sx={{display:'flex', p:0.5}}>Date: {this.props.location.localtime.substring(0,10)}</Typography>
          <Typography sx={{display:'flex', p:0.5}}>Time: {this.props.location.localtime.substring(10)}</Typography>
        </Box>                
      </Container>
    )
  }
}
