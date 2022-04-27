import React, { Component } from 'react';
import {Container, Box, Typography, Divider} from '@mui/material/';
import '../style/allCss.css'

export default class Location extends Component {
  
  constructor(props){
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <Container className='locationContainer' maxWidth={false}>
        <Box sx={{display:'flex', justifyContent:'space-around', flexDirection:{xs:'row', md:'row'}, alignContent:'center', py:1,}}>
          <Box className='locationBox'>
            <Typography className='locationTitle' >City:</Typography> 
            <Typography className='locationData' >{this.props.location.name}</Typography> 
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />         
          <Box className='locationBox'>
            <Typography className='locationTitle' >Region:</Typography>
            <Typography className='locationData region' >{this.props.location.region}</Typography>
          </Box>
          <Divider className='region' orientation="vertical" variant="middle" flexItem />         
          <Box className='locationBox'>
            <Typography className='locationTitle' >Country: </Typography>
            <Typography className='locationData' >{this.props.location.country}</Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />         
          <Box className='locationBox'>
            <Typography className='locationTitle' >Date: </Typography>
            <Typography className='locationData' >{this.props.location.localtime.substring(0,10)}</Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />         
          <Box className='locationBox'>
            <Typography className='locationTitle' >Time: </Typography>
            <Typography className='locationData' >{this.props.location.localtime.substring(10)}</Typography>
          </Box>
        </Box>                
      </Container>
    )
  }
}

