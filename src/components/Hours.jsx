import React, { Component } from 'react';
import {Container, Box, Typography} from '@mui/material/';

export default class Hours extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentHour:false,
    }
  }

  findCurrentHour = ()=>{
    const d = new Date();
    return d.getHours();
  }

  render() {
    this.findCurrentHour()
    return (
      <Container id="hoursContainer" sx={{bgcolor:'#738083', fontSize:25, }} maxWidth={false}>
        <Typography>Time</Typography>
        {this.props.hours.forecastday[0].hour.map((thehour, index)=>{
          return(
            <Box key={thehour.time} sx={{display:'flex',  bgcolor: '#5085a5',border:'1px', m:0.2, p:0.5, }}>
              {
                (thehour.time.substring(11,13) == this.findCurrentHour()) ?
                <Typography sx={{display:'flex', p:0.3, px:2, alignItems: 'center', fontWeight:'bold', }} className="focused" autoFocus> {thehour.time.substring(11)} </Typography>
                :
                <Typography sx={{display:'flex', p:0.3, px:2, alignItems: 'center', fontWeight:'normal', }}> {thehour.time.substring(11)} </Typography>
              }
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

