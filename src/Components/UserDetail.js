import React from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Grid, Card, CardContent, CardMedia,Typography } from '@mui/material';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,

} from 'mdb-react-ui-kit';
const UserDetail = () => {
  const params = useParams();
    const [userData, setuserDate] = React.useState(null);
  React.useEffect( () => {
    fetch(`https://express-t4.onrender.com/api/users/${params.id}`).then(res => res.json())
    .then(res => setuserDate(res));

  } , [])

const containerStyle = {
  width: '100%',
  height: '400px',
};
  function renderFriends(fc){ 
    return <span>{fc.map(f => f.name).join(",")}</span> ;
  }
  // function renderTags(fc){ 
  //   return <span>{fc.map(f => f$0).join(",")}</span> ;
  // }
  return (

    
        
    <div>
    <h2>Profile Page</h2>
    {userData && (
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <div style={{ display: 'flex' }}>
                <div>
                  <img src={userData.picture} alt="Profile Picture" style={{ width: '100px', marginRight: '10px' }} />
                </div>
                <div>
                  <Typography variant="h6" gutterBottom>
                    Name: {userData.name}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Gender: {userData.gender}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Age: {userData.age}
                  </Typography>
                </div>
              </div>
              <Typography variant="body1" gutterBottom>
                Email: {userData.email}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Phone: {userData.phone}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Address: {userData.address}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="body1" gutterBottom>
                About: {userData.about}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Greeting: {userData.greeting}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Eye Color: {userData.eyecolor}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Balance: {userData.balance}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Favorite Fruit: {userData.favouritefruit}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Latitude: {userData.latitude}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Longitude: {userData.longitude}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="body1" gutterBottom>
                Tags:
                {userData.tags && userData.tags.length > 0 && (
                  <ul>
                    {userData.tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                )}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="body1" gutterBottom>
                Friends:
                {userData.friends && userData.friends.length > 0 && renderFriends(userData.friends)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )}
  </div>
  
  
  );
};

export default UserDetail;
