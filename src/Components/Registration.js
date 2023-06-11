import React, { useState } from 'react';
import DialogPopOver from './DialogPopOver';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { TextField, Button, Grid, Box } from '@mui/material';
import { AccountCircle, Email, Lock } from '@mui/icons-material';

// import { useHistory } from 'react-router-dom';
const RegistrationForm = () => {

    const navigeteToProfilePage = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here
    console.log(event);

    navigeteToProfilePage(`/profilePage/${firstName}/${lastName}/${email}`);
    // Redirect to profile page
  };

  return (
    <div>     <h1>Registration Page</h1>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            inputProps={{ pattern: '[A-Za-z]+' }}
            fullWidth
            size="small"
            margin="normal"
            InputProps={{
              startAdornment: <AccountCircle />,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            required
            inputProps={{ pattern: '[A-Za-z]+' }}
            fullWidth
            size="small"
            margin="normal"
            InputProps={{
              startAdornment: <AccountCircle />,
            }}
          />
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            fullWidth
            size="small"
            margin="normal"
            InputProps={{
              startAdornment: <Lock />,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
    </div>

       
     
  );
};

export default RegistrationForm;
