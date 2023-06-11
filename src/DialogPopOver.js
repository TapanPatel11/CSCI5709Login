import React from 'react';
import { Dialog } from '@mui/material';
import RegistrationForm from './Registration'; 
const DialogPopOver = ({ open, handleClose }) => {
  return (
    // <Dialog open={open} onClose={handleClose}>
        <RegistrationForm/>
    // </Dialog>
  );
};

export default DialogPopOver;