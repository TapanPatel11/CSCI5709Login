import logo from './logo.svg';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './Components/ProfilePage';
import Users from './Components/Users';
import UserDetail from './Components/UserDetail';
import Login from './Components/Login';
function App() {



  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/profilePage/:firstName/:lastName/:email" element={<ProfilePage/>} />
        <Route path="/userDetail/:id" element={<UserDetail/>} />
        <Route path="/Users" element={<Users/>} />



       </Routes>

     </div>
  );
}

export default App;
