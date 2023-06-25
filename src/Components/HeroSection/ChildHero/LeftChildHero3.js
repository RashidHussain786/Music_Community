import { Grid, Typography } from '@mui/material'
import React from 'react'

export const LeftChildHero3 = () => {
  return (
    <>
     <Grid sx={{mt:'3rem',mb:'3rem'}}>
    <Typography variant='h5'component='div' align='center'sx={{pt:'20px',pb:'10px',ml:'4rem'}}>
    Step 3: Connect through Video Calls
    </Typography>
    <Typography variant='subtitle' component='div' align='center' sx={{pt:'20px',pb:'10px',ml:'4rem'}} >
    Engage in live video conversations with fellow music enthusiasts who are listening to the same song, allowing you to discuss the music, share your thoughts, and form connections with people from around the world.
    </Typography>
    </Grid>
    </>
  )
}
