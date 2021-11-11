import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {

        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization' : `Bearer ${token}` ,
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
        if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h1>This is make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            sx={{width: '50%'}}
            id="standard-basic" 
            label="Email" 
            variant="standard"
            onBlur={handleOnBlur} 
            type="email" />
            <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && 
                    <Alert severity="success">
                        <AlertTitle>Congress</AlertTitle>
                        Made Admin Successfully - <strong>check it out!</strong>
                    </Alert>}
        </div>
    );
};

export default MakeAdmin;