
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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum vel magna ut gravida. Maecenas id blandit lacus. Fusce eleifend sodales augue, sit amet scelerisque velit dictum sit amet. Vivamus eget diam venenatis, dapibus orci id, pellentesque dui. Suspendisse accumsan metus nec lorem maximus condimentum. Morbi ornare interdum varius. Quisque sed sem sapien. Phasellus non mauris blandit, ullamcorper ipsum vitae, posuere turpis. Suspendisse potenti.
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
