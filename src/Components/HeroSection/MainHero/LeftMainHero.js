
import { Button, Grid, TextField, Toolbar, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { SocketContext } from '../../../Context';



const useStyle = makeStyles({
  textspan:{
    color:'#57FEFF',
  }
});

export const LeftMainHero = () => {
  const [song ,setSong] = useState(" ");
  const{me}=useContext(SocketContext);
  
  const classes =useStyle();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3456/api/insert', { musicName: song, mettingId: me })
      .then((response) => {
        console.log('Data inserted successfully');
      })
      .catch((error) => {
        console.error('Error inserting data:', error);
      });
  
    window.location.href = 'http://localhost:3000/calling/' + me;
  };
  
  

  
  return (
    <>
    <Grid container sx={{pl:'3rem ',pr:'3 rem',mb:'2.5rem',mt:'4rem',display:'flex'}}>
    <Grid item xs={12}md={12} sx={{pl:'3rem ',pr:'3 rem',mb:'2.5rem',mt:'2rem',alignItems:'center',alignContent:'center'}}>
    <Typography variant='h3' fontSize='2.5rem'  fontFamily='cursive'  >
     Match Your <span className={classes.textspan}>Music Vibes</span> With Stranger All Over The World. 
    </Typography>
    </Grid>
    <Grid item xs={12}md={12} sx={{pl:'3rem ',pr:'3 rem',mb:'2.5rem',alignItems:'center',alignContent:'center'}}>
    <Typography variant='subtile'>
    Welcome to our innovative video chat platform where you can join others who are currently listening to the same songs as you. Immerse yourself in a shared music experience and connect with like-minded individuals from around the world in real time. Whether you're a fan of the latest chart-toppers, indie hits, or timeless classics, you'll find a community of music lovers eager to discuss, appreciate, and enjoy music together.
    </Typography>
   
    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ maxWidth: '80%', mt:'2.5rem',mr:"2rem"}}>
    <Toolbar >
    <TextField fullWidth label="Music Which You Love" onChange={(e)=>{setSong(e.target.value)}} sx={{bgcolor:'primary.light',borderRadius:'0.5rem'}}/> 
    <Button type="submit"  endIcon={<SendIcon/>} size='large' fullWidt variant="contained"  sx={{ ml:'2rem',mt:'2rem', mb:'2rem',bgcolor:'primary.light'}} >
    Submit
    </Button>
    </Toolbar>
    </Box>
    
    </Grid>
    </Grid>
    </>
  )
}
