import React, { Component } from 'react';
import {GlobalStyles} from '@mui/material';

export default class WeatherAppGlobalCss extends Component {
  render() {
    return (
      <>
        <GlobalStyles 
          styles={{ 
            h1: { 
              color: 'grey' 
            },
            locationStyle: {
              display:'flex', 
              px:1, 
              py:0.5
            }
          }} />
      </>
    )
  }
}
