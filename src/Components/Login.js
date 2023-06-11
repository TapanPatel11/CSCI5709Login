import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

import { TextField, Button, Grid, Box } from '@mui/material';
import { AccountCircle, Email, Lock } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    
    const navigeteToUsersPage = useNavigate();

 
    function handleSubmit(event)
    {

      event.preventDefault();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "username" : email, "password" : password
            })
    };
    fetch('https://express-t4.onrender.com/api/login', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();
            

            if (!response.ok) {
                const error = (data && data.message) || response.status;
                toast.error(data.message, {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  });
            }
            else 
            {
              
                navigeteToUsersPage('/Users');
                
            }

        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });

        
    }

 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>

      <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
            size="small"
            margin="normal"
            InputProps={{
              startAdornment: <Email />,
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            fullWidth
            size="small"
            margin="normal"
            InputProps={{
              startAdornment: <Lock />,
            }}
          />
 <Button type="submit"  variant="contained" color="primary">
            Login
          </Button>     
           </form>
           <ToastContainer />

    </div>
  );
};

export default Login;
