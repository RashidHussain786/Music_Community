import { Grid, Typography } from '@mui/material'
import React from 'react'

export const LeftChildHero = () => {
  return (
    <>
    <Grid sx={{mt:'3rem',mb:'3rem'}}>
    <Typography variant='h5'component='div' align='center'sx={{pt:'20px',pb:'10px',ml:'4rem'}}>
     Step 1: Submit Your Song
    </Typography>
    <Typography variant='subtitle' component='div' align='center' sx={{pt:'20px',pb:'10px',ml:'4rem'}} >
    Submit your favorite song or choose from a variety of playlists available on the website to connect with people who are listening to the same song at the same time.
    </Typography>
    </Grid>
    </>
  )
}
