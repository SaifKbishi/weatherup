import React, { Component } from 'react';
import {Container, Box, Typography} from '@mui/material/';

export default class DayForcast extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  getDate(){
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    let today= `${year}-${month}-${day}`
    console.log(today);
  }

  render() {
    return (
      <Container sx={{bgcolor:'#a8624c', fontSize:25}} maxWidth={false}>
        <Box sx={{display:'flex', justifyContent:'space-around', flexDirection:{xs:'column', md:'row'}, py:5}}>
        {this.props.forecastday.map((day, index)=>{
          return(
            <Box key={index} sx={{display:'flex', flexDirection:'column', py:1}}>
              <Typography sx={{fontWeight:'bold', fontSize:{xs:20, md:30}}}>{day.date}</Typography>
              <Typography sx={{fontSize:{xs:20, md:30}}}>Min Temp: {day.day.mintemp_c}</Typography>
              <Typography sx={{fontSize:{xs:20, md:30}}}>Max Temp: {day.day.maxtemp_c}</Typography>
              <Typography sx={{fontSize:{xs:20, md:30}}}>Max wind speed: {day.day.maxwind_kph}</Typography>
              <Typography sx={{fontSize:{xs:20, md:30}}}>Chance of rain: {day.day.daily_chance_of_rain}%</Typography>
            </Box>
          );
        })}
        </Box>
      </Container>
    )
  }
}
