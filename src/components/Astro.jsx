import React, { Component } from 'react'
import {Container, Box, Typography, Button  } from '@mui/material/';

export default class Astro extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
      {this.props.forecast.forecastday.map((forecastday)=>{
        return(
          <Box key={forecastday.date_epoch}>
            <Typography>Date: {forecastday.date}</Typography>
            <Typography>Max temperature: {forecastday.day.maxtemp_c}</Typography>            
            <Typography>Min temperature: {forecastday.day.mintemp_c}</Typography>            
            <Typography>Maximum wind speed: {forecastday.day.maxwind_kph}</Typography>            
            <Typography>Will it rain today? {forecastday.day.daily_will_it_rain ? 'Yes' : 'No'}</Typography>           
            <Typography>UV: {forecastday.day.uv}</Typography>            
          </Box>
        );
      })}        
      </>
    )
  }
}
