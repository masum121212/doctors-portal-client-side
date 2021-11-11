import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';



const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    height: 450,
    alignItems: 'center'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{ ...verticalCenter ,textAlign: 'left'}} item xs={12} md={6}>
          <Box>
          <Typography variant="h3">
              Your New Smile <br />
              Starts Here
          </Typography>
          <Typography variant="h6" sx={{ my: 5,fontSize:13, fontWeight: 300, color: 'gray'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laudantium natus debitis architecto amet qui a ex porro dolorum quos!
          </Typography>
          <Button variant="contained" style={{backgroundColor: '#64D7DC'}}>GET APPOINTMENT</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width: '350px'}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;