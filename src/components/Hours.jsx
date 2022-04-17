import React, { Component } from 'react';
import {Container, Box, Typography, Button  } from '@mui/material/';

export default class Hours extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <Container>
        <Typography>Time</Typography>
        {this.props.hours.forecastday[0].hour.map((thehour, index)=>{
          // console.log('15 ',thehour, thehour.time_epoch);
          return(
            <Box key={index} sx={{display:'flex',  bgcolor: '#5085a5',border:'1px', m:0.2, p:0.5}}>
              <Typography sx={{display:'flex', p:0.3, alignItems: 'center'}}> {thehour.time.substring(11)}</Typography>
              <Box sx={{p:0.3}}>
                <Typography>Temp: </Typography>
                <Typography> {thehour.temp_c} C </Typography>
              </Box>
              <Box sx={{p:0.3}}>
                <Typography> {thehour.wind_kph} KPH </Typography>
                <Typography> {thehour.wind_dir} </Typography>
              </Box>
            </Box>
          );
        })}
      </Container>
    )
  }
}
