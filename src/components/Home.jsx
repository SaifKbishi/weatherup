import React, { Component } from 'react';
import {Box, Typography, Divider, Container} from '@mui/material/';
import axios from 'axios';
import Astro from './Astro';
import Current from './Current';
import DayForcast from './DayForcast';
import Hours from './Hours';
import Location from './Location';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      weatherData:[],
      Latitude: 0,
      Longitude: 0,
      test:'',
    }
    this.showPosition = this.showPosition.bind(this);
    this.getClientPostion = this.getClientPostion.bind(this);
  }
  handleError(error) {
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
  watchLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(this.showPosition, this.handleError);
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }  
  showPosition(position){
    // console.log('showPosition');
    this.setState({test:'showPosition'});
    // console.log(`Latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude}`);
    this.setState({Latitude: position.coords.latitude, Longitude: position.coords.longitude}, ()=>{
      this.getClientPostion();
    });
  }
  async getLocation(){
    // console.log('getLocation');
    if (navigator.geolocation) {
      this.setState({test:'geoLocation'});
      navigator.geolocation.getCurrentPosition(this.showPosition, this.handleError);      
    } else {
      console.error('Geolocation is not supported by this browser.')      
    }
  }//getLocation  
  async getClientPostion(){
    // console.log('getClientPostion');
    try{
      // await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=a3804560a35340a8a3f102135222903&q=${this.state.Latitude},${this.state.Longitude}&days=2&aqi=yes&alerts=yes`)      
      await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=a3804560a35340a8a3f102135222903&q=${this.state.Latitude},${this.state.Longitude}&days=5&aqi=yes`)      
      // axios.get('/data/weather.json')
      .then(res =>{
        const weatherData = res.data;
        this.setState({weatherData});
      })
    }catch(error){
      console.log(`Couldn't fetch data from Waether API, error: ${error} `);
    }
  }

  async componentDidMount(){
    await this.getLocation();   

  }//componentDidMount


  render() {
    return (
      <Container sx={{display:'flex', flexDirection:'column',px:{xs:0, md:1}}} maxWidth={false}>
        <Box sx={{minWidth:'100%'}}>
          {this.state.weatherData.location && <Location location={this.state.weatherData.location} />}
        </Box>
        <Box sx={{display:{xs:'flex', md:'flex'}, m:0}} >
          <Box sx={{flexGrow:1}}>
            <Box>
              {this.state.weatherData.current && <Current current={this.state.weatherData.current} />}              
            </Box>
            <Divider/>
            <Box>
              {this.state.weatherData.current && <DayForcast forecastday={this.state.weatherData.forecast.forecastday} />}
            </Box>
          </Box>
          <Box sx={{display:{xs:'none', md:'flex'}}}>
            <Box>
              {this.state.weatherData.forecast && <Astro forecast={this.state.weatherData.forecast}/>}
            </Box>
            <Box sx={{height:'87vh', overflow:'auto'}}>
              {this.state.weatherData.forecast && <Hours hours={this.state.weatherData.forecast}/>}
            </Box>        
          </Box>
        </Box>
      </Container>
    )
  }
}
