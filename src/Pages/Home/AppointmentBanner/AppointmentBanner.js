import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import doctor from '../../../images/doctor.png'
import bgImg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bgImg})`,
    backgroundColor: 'rgba(95, 97, 114, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
          style={{width:400, marginTop: '-110px'}}
           src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex' , justifyContent: 'flex-start',alignItems: 'center', textAlign: 'left'}}>
          <Box>
          <Typography variant="h6" sx={{my:5}} style={{color: '#6CE5EB'}}>
              Appointment
          </Typography>
          <Typography variant="h4"  style={{color: 'white'}}>
              Make An Appointment Today
          </Typography>
          <Typography variant="h6" sx={{my:5}} style={{color: 'white', fontSize: 14, fontWeight: 300}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ipsum cumque ducimus saepe mollitia ipsa ad? Dolorem aut sed ipsum.
          </Typography>
          <Button variant="contained" style={{backgroundColor: '#64D7DC'}}>Learn More</Button>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;