import React, { Component } from 'react';
import {Container, Box, Typography, Divider} from '@mui/material/';

export default class Location extends Component {
  
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Container sx={{bgcolor:'#738083', height:200, }} maxWidth={false}>
        <Box sx={{display:'flex', justifyContent:'space-around', flexDirection:{xs:'column', md:'row'}, alignContent:'center', py:1,}}>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography sx={{display:{xs:'none', md:'flex'}, py:0.5, px:2, fontSize:{xs:15, md:25}}}>City:</Typography> 
            <Typography sx={{display:'flex', py:0.5, px:2,fontSize:{xs:15, md:25}}}>{this.props.location.name}</Typography> 
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />         
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography sx={{display:{xs:'none', md:'flex'}, py:0.5, px:2, fontSize:{xs:15, md:25}}}>Region:</Typography>
            <Typography sx={{display:'flex', py:0.5, px:2, fontSize:{xs:15, md:25}}}>{this.props.location.region}</Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />         
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography sx={{display:{xs:'none', md:'flex'}, py:0.5, px:2, fontSize:{xs:15, md:25}}}>Country: </Typography>
            <Typography sx={{display:'flex', py:0.5, px:2, fontSize:{xs:15, md:25}}}>{this.props.location.country}</Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />         
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography sx={{display:{xs:'none', md:'flex'}, py:0.5, px:2, fontSize:{xs:15, md:25}}}>Date: </Typography>
            <Typography sx={{display:'flex', py:0.5, px:2, fontSize:{xs:15, md:25}}}>{this.props.location.localtime.substring(0,10)}</Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />         
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography sx={{display:{xs:'none', md:'flex'}, py:0.5, px:2, fontSize:{xs:15, md:25}}}>Time: </Typography>
            <Typography sx={{display:'flex', py:0.5, px:2, fontSize:{xs:15, md:25}}}>{this.props.location.localtime.substring(10)}</Typography>
          </Box>
        </Box>                
      </Container>
    )
  }
}

