import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('oi vai passord thik kore likhen')
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt: 8}} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading &&
                    <form onSubmit={handleLoginSubmit}>
                    <TextField 
                        required
                        sx={{width: '75%', m:1}}
                        id="standard-basic"  
                        label="Your name"
                        type="text"  
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard" 
                     />
                    <TextField 
                        required
                        sx={{width: '75%', m:1}}
                        id="standard-basic"  
                        label="Your email"
                        type="email"  
                        name="email"
                        onBlur={handleOnBlur}
                        variant="standard" 
                     />
                    <TextField
                        required
                        sx={{width: '75%', m:1}}
                        id="standard-password-input"
                        label="Your Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <TextField
                        required
                        sx={{width: '75%', m:1}}
                        id="standard-password-input"
                        label="Re-Type Your Password"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        autoComplete="current-password"
                        variant="standard"
                    />
                    
                    <Button variant="contained" type="submit" sx={{width: '75%', m:1}}>Register</Button>
                    <NavLink style={{textDecoration: "none"}} to="/login">
                        <Button variant="text">Already Registered ? Please Login</Button>
                    </NavLink>
                    </form>
                    }
                    {isLoading && <CircularProgress />}
                    {user?.email && 
                    <Alert severity="success">
                        <AlertTitle>Congress</AlertTitle>
                        User Created Successfully - <strong>check it out!</strong>
                    </Alert>}
                    { authError && 
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                            {authError} - <strong>check it out!</strong>
                    </Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;