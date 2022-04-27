import React, { Component } from 'react';
import {Container, Box, Typography, CardMedia } from '@mui/material/';

export default class Current extends Component {
  constructor(props){    
    super(props);
    // console.log('props: ',props);
  }

  render() {
    return (
      <Container sx={{bgcolor:'#b2ada3', fontSize:25, height:280}} maxWidth={false}>
        <Typography variant='h4' sx={{p:2}}>Current</Typography>            
        <Box key={this.props.current.last_updated_epoch} sx={{display:'flex', flexDirection:'column'}}>
            <Box sx={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
              <Typography sx={{fontSize:25}}>Condition: {this.props.current.condition.text}</Typography>
              <CardMedia sx={{maxWidth:50}}
                component="img"
                height="30"
                image={this.props.current.condition.icon}
                alt={this.props.current.condition.text}
              />
            </Box>
            <Typography sx={{fontSize:25}}>Temp: {this.props.current.temp_c} c</Typography>
            <Typography className='current' sx={{fontSize:25}}>Wind Speed: {this.props.current.wind_kph} kph</Typography>            
            <Typography sx={{fontSize:25}}>Humidity: {this.props.current.humidity}</Typography>            
            <Typography sx={{fontSize:25}}>Any clouds: {this.props.current.cloud}</Typography>            
            {/* <Typography>Will it rain today? {forecastday.day.daily_will_it_rain ? 'Yes' : 'No'}</Typography>            */}
            {/* <Typography>UV: {this.props.current.day.uv}</Typography>             */}
        </Box>
      </Container>
    )
  }
}

