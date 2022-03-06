import {  Card, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { MyVedioScreen } from './MyVedioScreen'
import { PersonList } from './PersonList'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SocketContext } from '../../Context'


export const CallingMainHero = () => {
  const {mettingId}=useParams();
  const{me}=useContext(SocketContext);
  
  axios.post('http://localhost:3456/api/update',{mettingId:mettingId,updatemettingId:me})
    .then((responce)=>{
      alert(responce)
    })
  
  return ( 
    <>

    <Grid container sx={{minHeight:'92vh',bgcolor:'primary.main'}}> 
    <Grid item xs={12}md={2.5}> 
    <Typography component='div' variant='h5'sx={{pt:3}} align='center'>
     List Of Persons
    </Typography>
    <PersonList />
    <PersonList />
    <PersonList />
    <PersonList />
    <PersonList />
    <PersonList />
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
