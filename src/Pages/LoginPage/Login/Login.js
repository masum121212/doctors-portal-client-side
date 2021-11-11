import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError, signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();



    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt: 8}} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField 
                        sx={{width: '75%', m:1}}
                        id="standard-basic"  
                        label="Your email"
                        type="email"  
                        name="email"
                        onChange={handleOnChange}
                        variant="standard" 
                     />
                    <TextField
                        sx={{width: '75%', m:1}}
                        id="standard-password-input"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        autoComplete="current-password"
                        variant="standard"
                    />
                    
                    <Button variant="contained" type="submit" sx={{width: '75%', m:1}}>Login</Button>
                    <NavLink style={{textDecoration: "none"}} to="/register">
                        <Button variant="text">New User ? Please Register</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.email && 
                    <Alert severity="success">
                        <AlertTitle>Congress</AlertTitle>
                        Login Successfully - <strong>check it out!</strong>
                    </Alert>}
                    { authError && 
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                            {authError} - <strong>check it out!</strong>
                    </Alert>}
                    </form>
                    <p>__________or_________</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                    
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;