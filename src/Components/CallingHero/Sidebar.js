import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import {SocketContext }  from '../../Context';
import { makeStyles } from '@mui/styles';
import Notifications from './Notifications';
import VideoCallIcon from '@mui/icons-material/VideoCall';


const useStyles=makeStyles({
    root:{
        display:'flex',
        flexDirection:'column',
    }
})

const Sidebar = ({ children }) => {
    const { callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const classes = useStyles();
  
    return (
      <Container sx={{width:'100%',margin:'10px 10px'}}>
        <Paper elevation={10} sx={{border:'2px solid black'}} >
          <form  noValidate autoComplete="off" className={classes.root}>
            <Grid container width='90%'>
              <Grid item xs={12} md={6} sx={{pr:'3rem'}} >
                <Typography gutterBottom variant="h6"sx={{ml:'2rem',mr:'2rem'}}>Account Info</Typography>
                <TextField label="Name"sx={{ml:'2rem'}} value={name} onChange={(e) => setName(e.target.value)} fullWidth/>
                <Notifications/>
              </Grid>
              <Grid item xs={12} md={6} sx={{pr:'4rem'}} >
                <Typography gutterBottom variant="h6"sx={{ml:'2rem',mr:'2rem'}}>Make a call</Typography>
                <TextField label="ID to call"sx={{ml:'2rem',mr:'2rem'}} value={idToCall} onChange={(e) => setIdToCall(e.target.value)}fullWidth  />
                {callAccepted && !callEnded ? (
                  <Button variant="contained" sx={{pl:'2rem',pr:'2rem',ml:'2rem',mt:'1rem',mb:'1rem'}} color="secondary" startIcon={<PhoneDisabledIcon fontSize="large" />} fullWidth onClick={leaveCall}  >
                    Hang Up
                  </Button>
                ) : (
                  <Button variant="contained"sx={{pl:'2rem',pr:'2rem',ml:'2rem',mt:'1rem',mb:'1rem'}} color="primary" startIcon={<VideoCallIcon fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} >
                    Call
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
          {children}
        </Paper>
      </Container>
    );
  };
  
  export default Sidebar;