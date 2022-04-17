import React, { Component } from 'react';
import {Box, Typography, Button, Divider, Checkbox,CardMedia, Container} from '@mui/material/';
import axios from 'axios';
import Astro from './Astro';
import Alerts from './Alerts';
import Current from './Current';
import DayForcast from './DayForcast';
import Hours from './Hours';
import Location from './Location';
import Nav from './Nav';
let Latitude='';
let Longitude='';

// const weatherAPI = 'https://api.weatherapi.com/v1/forecast.json?key=a3804560a35340a8a3f102135222903&q=32.942445, 35.177224&days=2&aqi=yes&alerts=yes';
const weatherAPI = `https://api.weatherapi.com/v1/forecast.json?key=a3804560a35340a8a3f102135222903&q=${Latitude}, ${Longitude}&days=2&aqi=yes&alerts=yes`;

export default class Home extends Component {
  state ={
    weatherData:[],
    clientIP:'',
  }

  componentDidMount(){
    try {      
      getLocation();
    } catch (error) {
      console.log('Error getting your location', error);
    }
    try{      
      axios.get(`${weatherAPI}`)
      // axios.get('/data/weather.json')
      .then(res =>{
        // console.log('res: ',res.data);
        const weatherData = res.data;
        this.setState({weatherData});
      })
    }catch(error){
      console.log(`Couldn't fetch data from Waether API, error: ${error} `);
    }    
    function getLocation(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, handleError);
      } else {
        console.error('Geolocation is not supported by this browser.')      
      }
    }
    function watchLocation(){
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, handleError);
      } else {
        console.error('Geolocation is not supported by this browser.')
      }
    }
    function handleError(error) {
      let errorStr;
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorStr = 'User denied the request for Geolocation.';
          break;
        case error.POSITION_UNAVAILABLE:
          errorStr = 'Location information is unavailable.';
          break;
        case error.TIMEOUT:
          errorStr = 'The request to get user location timed out.';
          break;
        case error.UNKNOWN_ERROR:
          errorStr = 'An unknown error occurred.';
          break;
        default:
          errorStr = 'An unknown error occurred.';
      }
      console.error('Error occurred: ' + errorStr);
    }
    
    function showPosition(position) {      
      console.log(`Latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude}`);
      Latitude=position.coords.latitude;
      Longitude=position.coords.longitude;
    }
  }



  render() {
    return (
      <Container  sx={{display:'flex', flexDirection:'column'}} maxWidth={false}>
        <Box >
          {this.state.weatherData.location && <Location location={this.state.weatherData.location} />}
        </Box>
        <Box sx={{display:'flex'}}>
          <Box sx={{flexGrow:1}}>
            <Box>
              {this.state.weatherData.current && <Current location={this.state.weatherData.current} />}              
            </Box>
            <Box>          
              <DayForcast />
              {this.state.clientIP}<br/>
              Latitude: {Latitude}
              Longitude: {Longitude}
            </Box>
          </Box>
          <Box sx={{display:'flex'}}>
            <Box>
              {this.state.weatherData.forecast && <Astro forecast={this.state.weatherData.forecast}/>}
            </Box>
            <Box sx={{height:'90vh', overflow:'auto'}}>
              {this.state.weatherData.forecast && <Hours hours={this.state.weatherData.forecast}/>}
            </Box>        
          </Box>
        </Box>
      </Container>
    )
  }
}
