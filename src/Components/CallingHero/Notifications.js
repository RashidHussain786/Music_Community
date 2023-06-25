import React, { useContext } from 'react';
import {  Button, Toolbar, Typography } from '@mui/material';

import { SocketContext } from '../../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <>
        <Toolbar>
          <Typography variant='h5' component='div'sx={{mr:'2rem'}}>
          {call.name} is calling...
          </Typography>
          <Button variant="contained" color="primary" sx={{width:'40%'}} onClick={answerCall}>
            Answer
          </Button>
          </Toolbar>
        </>
      )}
    </>
  );
};

export default Notifications;