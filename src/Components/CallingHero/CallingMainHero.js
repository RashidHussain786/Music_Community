import {  Button, Card, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { MyVedioScreen } from './MyVedioScreen'
import { PersonList } from './PersonList'
import Sidebar from './Sidebar'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SocketContext } from '../../Context';
import FirstPageIcon from '@mui/icons-material/FirstPage';


export const CallingMainHero = () => {
  const navigate = useNavigate();
  const {mettingId}=useParams();
  const{me}=useContext(SocketContext);
  
  const [similarSongs, setSimilarSongs] = useState([]);

  useEffect(() => {
    // Fetch similar songs from the database
    axios.get(`http://localhost:3456/api/get/${mettingId}`)
      .then((response) => {
        setSimilarSongs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Update the mettingId with the current user's ID
    axios.post('http://localhost:3456/api/update', { mettingId: mettingId, updatemettingId: me })
      .then((response) => {
        console.log("Data insert");
      });
     
  }, [mettingId, me]);

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

    <Grid container sx={{minHeight:'92vh',bgcolor:'primary.main'}}> 
    <Grid item xs={12}md={2.5}>
    <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
    <Button onClick={handleBackClick} startIcon={<FirstPageIcon/>} variant="contained" sx={{ bgcolor: 'primary.light' ,mt:1}}> Home Page</Button>
    </Grid>   
    <Typography component='div' variant='h5'sx={{pt:3}} align='center'>
    *** List Of Persons ***
    </Typography>
    <PersonList similarSongs={similarSongs}/>
    </Grid>
    <Grid item xs={12}md={9.5}>
    <Card  elevation={0}>
    <Grid container xs={12}md={12} sx={{bgcolor:'primary.dark'}} >
    <MyVedioScreen/> 
    <Grid item xs={12}md={12}>
    <Sidebar/>
    </Grid>
   </Grid>    
    </Card>
    </Grid>
    </Grid>

    </>
  )
}
