import React from 'react';
import { useParams } from 'react-router-dom';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, Card, CardContent, CardMedia,Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {  InputAdornment, Grid, Box } from '@mui/material';
const Users = () => {
  
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
    const navigeteToUserDetailPage = useNavigate();
    
  const params = useParams();
  const [userCollection,setUserCollection] = React.useState([]);
  const [filterUserCollection,setfilterUserCollection] = React.useState([]);
  const [search,setSearch] = React.useState("");

  React.useEffect( () => {

      
    

    fetch('https://express-t4.onrender.com/api/users').then(res => res.json())
    .then(res => {
        setfilterUserCollection(res) 
        setUserCollection(res)
    });
    toast.success('Login Successful!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  } , [])
  
  function openDetailPage(id)
  {
    navigeteToUserDetailPage(`/userDetail/${id}`);
  }

  const handleOnChange = (e) =>
  {
        setSearch(e.target.value);
    
        const filters = userCollection.filter( user => user.name.toLowerCase().includes(search.toLowerCase()) );
        e.target.value!="" || e.target.value  ? setfilterUserCollection(filters) : setfilterUserCollection(userCollection);

  }
  return (
    
    <div>
      <h1>User Page</h1>
      <div>
        {/* <input type="text" onChange={handleOnChange} value={search} placeholder="Search users..." /> */}
        <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <TextField
              value={search}
              onChange={handleOnChange}
              placeholder="Search users..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              
            />
          </Box>
        </Grid>
      </Grid>
       
      </div>
      <hr />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filterUserCollection.map(user => (
          <Card key={user.guid} style={{ width: '250px', backgroundColor: '#f8f8f8' }}>
            <CardMedia component="img" height="140" image={user.picture} alt={user.name} />
            <CardContent style={{ backgroundColor: '#ffffff' }}>
              <Typography variant="h6" style={{ color: '#333333' }}>
                {user.name}
              </Typography>
            </CardContent>
            <CardContent onClick={() => openDetailPage(user._id)} style={{ backgroundColor: '#f5f5f5', cursor: 'pointer' }}>
              <Typography color="primary">View Details</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Users;
