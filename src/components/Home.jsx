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

const weatherAPI = 'https://api.weatherapi.com/v1/forecast.json?key=a3804560a35340a8a3f102135222903&q=32.942445, 35.177224&days=2&aqi=yes&alerts=yes';

export default class Home extends Component {
  state ={
    weatherData:[],
  }

  componentDidMount(){
    try{
      // axios.get(`${weatherAPI}`)
      axios.get('/data/weather.json')
      .then(res =>{
        console.log('res: ',res.data);
        const weatherData = res.data;
        // console.log('21 weatherData: ',weatherData);
        // console.log('23 Location : ',weatherData.location);
        // console.log('24 Current: ',weatherData.current);
        // console.log('25 Forecast: ',weatherData.forecast);
        this.setState({weatherData});
      })
    }catch(error){
      console.log(`Couldn't fetch data from Waether API, error: ${error} `);
    }    
  }
  render() {
    console.log('32 ',this.state.weatherData);
    // console.log('32 ',this.state.weatherData.forecast);
    return (
      <Container  sx={{display:'flex', flexDirection:'column', maxHeight:'100vh'}} maxWidth={false}>
        <Box>
          {this.state.weatherData.location && <Location location={this.state.weatherData.location} />}
        </Box>
        <Box sx={{display:'flex'}}>
          <Box sx={{flexGrow:1}}>
            <Box>          
              <Current />
            </Box>
            <Box>          
              <DayForcast />
            </Box>
          </Box>
          <Box sx={{display:'flex'}}>
            <Box>
              {this.state.weatherData.forecast && <Astro forecast={this.state.weatherData.forecast}/>}
            </Box>
            <Box>
              {this.state.weatherData.forecast && <Hours hours={this.state.weatherData.forecast}/>}
            </Box>        
          </Box>
        </Box>
      </Container>
    )
  }
}
