import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from './../../../Hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking, handleBookingClose, booking, date, setBookingSuccess}) => {
    const {name, time} = booking;
    const {user} = useAuth();
    const initialInfo = {patientName: user.displayName, email: user.email, phone: ''}

    const [bookingInfo, setBookingInfo] = useState(initialInfo);


    const handleOnblur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...bookingInfo};
      newInfo[field] = value;
      setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
      // collect data
      const appointment ={
        ...bookingInfo,
        time,
        serviceName: name,
        date: date.toLocaleDateString()
      }
      // send to the server
      fetch('http://localhost:5000/appointments', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(appointment)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          setBookingSuccess(true);
          handleBookingClose();
        }
      });



      handleBookingClose();

      e.preventDefault();
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleBookingSubmit}>
              <TextField
                disabled
                sx={{width: '100%', m:1}}
                label="Time"
                id="outlined-size-small"
                defaultValue={time}
                size="small"
              />
              <TextField
                required
                sx={{width: '100%', m:1}}
                label="Name"
                id="outlined-size-small"
                name= "patientName"
                onBlur={handleOnblur}
                defaultValue={user.displayName}
                size="small"
              />
              <TextField
                required
                sx={{width: '100%', m:1}}
                label="Email"
                id="outlined-size-small"
                name= "email"
                onBlur={handleOnblur}
                defaultValue={user.email}
                size="small"
              />
              <TextField
                required
                sx={{width: '100%', m:1}}
                label="Phone"
                id="outlined-size-small"
                name= "phone"
                onBlur={handleOnblur}
                defaultValue="your phone number"
                size="small"
              />
              <TextField
                disabled
                sx={{width: '100%', m:1}}
                label="date"
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
              />
              <Button type="submit" style={{backgroundColor: '#64D7DC'}} variant="contained">Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;