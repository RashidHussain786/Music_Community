import { Grid, Typography } from '@mui/material'
import React from 'react'

export const RightChildHero2 = () => {
  return (
    <>
     <Grid sx={{mt:'3rem',mb:'3rem'}}>
    <Typography variant='h5'component='div' align='center'sx={{pt:'20px',pb:'10px',mr:'4rem'}}>
    Step 2: Discover Similar Music Listeners
    </Typography>
    <Typography variant='subtitle' component='div' align='center' sx={{pt:'20px',pb:'10px',mr:'4rem'}} >
    Instantly discover other users who are currently tuned in to the same song, creating an opportunity to connect with like-minded individuals who share your musical taste.
    </Typography>
    </Grid>
    
    </>
  )
}
