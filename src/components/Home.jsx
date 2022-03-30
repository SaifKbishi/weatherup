import React, { Component } from 'react';
import axios from 'axios';
import Location from './Location';

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
    console.log('32 ',this.state.weatherData.location);
    return (
      <>
        <h1>Home</h1>
        {this.state.weatherData.location && <Location location={this.state.weatherData.location} />}
        
      </>
    )
  }
}
