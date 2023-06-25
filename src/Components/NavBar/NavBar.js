import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const NavBar = () => {
  const navigate = useNavigate();
  const { mettingId } = useParams();
  const [activeUserCount, setActiveUserCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3456/api/users/count')
      .then((response) => {
        setActiveUserCount(response.data.count);
      })
      .catch((error) => {
        console.error('Error retrieving user count:', error);
      });
  }, []);

  const handleBackClick = () => {
    axios.delete(`http://localhost:3456/api/delete/${mettingId}`)
      .then((response) => {
        console.log(response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error deleting user data:', error);
        navigate('/');
      });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleBackClick} sx={{ mr: '1rem' }}>
            <LibraryMusicIcon />
          </IconButton>
          <Typography onClick={handleBackClick} variant="h5" flexGrow="1" sx={{ cursor: 'pointer' }}>
            Music Meet
          </Typography>
          <Typography variant="h6" sx={{ mr: '2rem' }}>
            {activeUserCount}
            <IconButton>
              <GroupIcon />
            </IconButton>
            Active User
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
