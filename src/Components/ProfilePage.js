import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const params = useParams();

  
  return (
    <div>
      <h2>Profile Page</h2>
      <p>First Name: {params.firstName}</p>
      <p>Last Name: {params.lastName}</p>
    </div>
  );
};

export default ProfilePage;
