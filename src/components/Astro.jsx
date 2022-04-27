import React, { Component } from 'react'
import {Container, Box, Typography, Divider} from '@mui/material/';

export default class Astro extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Container sx={{bgcolor:'#98a28f', fontSize:25, display:'flex', flexDirection:'column', height:'100%' }} maxWidth={false}>
        <Box>
        <Typography variant='h5' sx={{height:120, display:'flex', justifyContent:'center', alignItems: 'center'}}>Astro</Typography>
        </Box>
          <Divider />
        <Box sx={{py:5}}> 
          {this.props.forecast.forecastday.map((forecastday)=>{
            return(
              <Box key={forecastday.date_epoch} sx={{display: 'flex', flexDirection:'column', justifyContent:'space-between', py:4}}>
                <Typography sx={{fontWeight:'bold'}}>Sunrise: </Typography>                <Typography>{forecastday.astro.sunrise}</Typography>
                <Typography>Sunset: {forecastday.astro.sunset}</Typography>
                <Typography>Moonrise: {forecastday.astro.moonrise}</Typography>
                <Typography>Moon Phase: {forecastday.astro.moon_phase}</Typography>
                <Typography>Moon Illumination: {forecastday.astro.moon_illumination}</Typography>                
              </Box>
            );
          })}
        </Box>
      </Container>
    )
  }
}
