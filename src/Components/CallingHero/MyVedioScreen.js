import { Grid, Paper, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { SocketContext } from '../../Context';

export const MyVedioScreen = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <>
      <Grid container justifyContent="center" spacing={6}>
        {stream && (
          <Grid item>
            <Paper sx={{ padding: '10px', border: '2px solid black', mt: '3rem', mb: '2.5rem', bgcolor: 'primary.main' }}>
              <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
              <video playsInline muted ref={myVideo} autoPlay width='450px' />
            </Paper>
          </Grid>
        )}
        {callAccepted && !callEnded && (
          <Grid item>
            <Paper sx={{ padding: '10px', border: '2px solid black', mt: '3rem', mb: '2.5rem', bgcolor: 'primary.main' }}>
              <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
              <video playsInline ref={userVideo} autoPlay width='450px' />
            </Paper>
          </Grid>
        )}
      </Grid>
    </>
  );
};
