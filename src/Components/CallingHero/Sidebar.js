import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import { SocketContext } from '../../Context';
import { makeStyles } from '@mui/styles';
import Notifications from './Notifications';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  
});

const Sidebar = ({ children }) => {
  const { callAccepted, name, setName, callEnded, leaveCall, callUser, toggleAudio, toggleVideo, isAudioOn, isVideoOn } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();

  return (
    <Container sx={{ width: '100%', margin: '10px 10px' }}>
      <Paper elevation={10} sx={{ border: '2px solid black' }}>
        <form noValidate autoComplete="off" className={classes.root}>
          <Grid container width="90%">
            <Grid item xs={12} md={6} sx={{ pr: '3rem' }}>
              <Typography gutterBottom variant="h6" sx={{ ml: '2rem', mr: '2rem' }}>
                Account Info
              </Typography>
              <TextField label="Name" sx={{ ml: '2rem' }} value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <Notifications />
            </Grid>
            <Grid item xs={12} md={6} >
              <Typography gutterBottom variant="h6" sx={{ ml: '2rem', mr: '2rem' }}>
                Make a call
              </Typography>
              <TextField
                label="ID to call"
                sx={{ ml: '2rem', mr: '2rem' }}
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <Grid container justifyContent="space-between" alignItems="center" sx={{ml:'1rem',pl:'2rem' }}>
                  <Button
                    variant="contained"
                    sx={{ width:'60%', mt: '1rem', mb: '1rem' }}
                    color="secondary"
                    startIcon={<PhoneDisabledIcon fontSize="large" />}
                    onClick={leaveCall}
                  >
                    Hang Up
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: isAudioOn ? 'transparent' : 'red',
                      color: isAudioOn ? 'primary.main' : 'white',
                      borderRadius: '2.5rem',
                      '&:hover': {
                        backgroundColor: isAudioOn ? 'transparent' : 'darkred',
                      },
                    }}
                    onClick={toggleAudio}
                  >
                    {isAudioOn ? <MicIcon fontSize="large" /> : <MicOffIcon fontSize="large" />}
                  </Button>
                  
                  <Button
                    variant="contained"
                    sx={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: isVideoOn ? 'transparent' : 'red',
                      color: isVideoOn ? 'primary.main' : 'white',
                      borderRadius: '2.5rem',
                      '&:hover': {
                        backgroundColor: isVideoOn ? 'transparent' : 'darkred',
                      },
                    }}
                    onClick={toggleVideo}
                  >
                    {isVideoOn ? <VideocamIcon fontSize="large" /> : <VideocamOffIcon fontSize="large" />}
                  </Button>
                  
                </Grid>
              ) : (
                <Grid container justifyContent="space-between" alignItems="center" sx={{ml:'1rem',pl:'2rem' }}>
                <Button
                  variant="contained"
                  sx={{ width:'60%', mt: '1rem', mb: '1rem' }}
                  color="primary"
                  startIcon={<VideoCallIcon fontSize="large" />}
                  onClick={() => callUser(idToCall)}
                >
                  Call
                </Button>

                <Button
                    variant="contained"
                    sx={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: isAudioOn ? 'transparent' : 'red',
                      color: isAudioOn ? 'primary.main' : 'white',
                      borderRadius: '2.5rem',
                      '&:hover': {
                        backgroundColor: isAudioOn ? 'transparent' : 'darkred',
                      },
                    }}
                    onClick={toggleAudio}
                  >
                    {isAudioOn ? <MicIcon fontSize="large" /> : <MicOffIcon fontSize="large" />}
                  </Button>

                <Button
                    variant="contained"
                    sx={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: isVideoOn ? 'transparent' : 'red',
                      color: isVideoOn ? 'primary.main' : 'white',
                      borderRadius: '2.5rem',
                      '&:hover': {
                        backgroundColor: isVideoOn ? 'transparent' : 'darkred',
                      },
                    }}
                    onClick={toggleVideo}
                  >
                    {isVideoOn ? <VideocamIcon fontSize="large" /> : <VideocamOffIcon fontSize="large" />}
                  </Button>
                </Grid>
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
