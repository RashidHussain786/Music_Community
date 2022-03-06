import { Grid, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { SocketContext } from '../../Context';

export const MyVedioScreen = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  return (
    <>
    
    <Grid container >
      {stream && (
        <Paper sx={{padding:'10px',border:'2px solid black',ml:'3rem',mr:'3rem',mt:'3rem',mb:'2.5rem',bgcolor:'primary.main'}}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay width='450px'  />
          </Grid>
        </Paper> 
      )}
      {callAccepted && !callEnded && (
        <Paper sx={{padding:'10px',border:'2px solid black',ml:'3rem',mr:'3rem',mt:'3rem',mb:'2.5rem',bgcolor:'primary.main'}}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay  width='450px'/>
          </Grid>
        </Paper>
      )}
    </Grid>
    
    
    
    </>
  )
}
