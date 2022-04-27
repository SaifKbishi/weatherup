import React, { Component } from 'react';
import {Container, Box, Typography, CardMedia } from '@mui/material/';
import '../style/allCss.css';

export default class Forecast extends Component {
  constructor(props){    
    super(props);
  }

  

  render() {
    return (
      <Box id='forecastAndAstro'>
        {this.props.forecast.forecastday.map((day, index)=>{
          return(
            <Box key={index} className='forecastAndAstroBox' >              
              <Typography className='forecastAndAstroTitle date' sx={{fontWeight:'bold'}}>{day.date}</Typography>
              <Box className='forecastAndAstroBoxData'>
                <Typography className='forecastAndAstroTitle'>Min Temp: {day.day.mintemp_c}</Typography>
                <Typography className='forecastAndAstroTitle'>Max Temp: {day.day.maxtemp_c}</Typography>
                <Typography className='forecastAndAstroTitle'>Max wind speed: {day.day.maxwind_kph}</Typography>
                <Typography className='forecastAndAstroTitle'>Chance of rain: {day.day.daily_chance_of_rain}%</Typography>
                <Box sx={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column'}}>
                  <Typography className='forecastAndAstroTitle'>Condition: </Typography>
                  <Box sx={{display:'flex'}}>
                    <Typography className='forecastAndAstroTitle'>{day.day.condition.text}</Typography>
                    <CardMedia sx={{maxWidth:50}}
                      component="img"
                      height="30"
                      image={day.day.condition.icon}
                      alt={day.day.condition.text}
                    />
                  </Box>
                </Box>
                <Typography className='forecastAndAstroTitle'>Sunrise: {day.astro.sunrise}</Typography>
                <Typography className='forecastAndAstroTitle'>Sunset: {day.astro.sunset}</Typography>
                <Typography className='forecastAndAstroTitle'>Moonrise: {day.astro.moonrise}</Typography>
                <Typography className='forecastAndAstroTitle'>Moon Phase: {day.astro.moon_phase}</Typography>
                <Typography className='forecastAndAstroTitle'>Moon Illumination: {day.astro.moon_illumination}</Typography>
              </Box>
            </Box>
          );
        })}        
      </Box>
    )
  }
}
