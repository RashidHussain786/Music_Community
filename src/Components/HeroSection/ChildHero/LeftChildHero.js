import { Grid, Typography } from '@mui/material'
import React from 'react'

export const LeftChildHero = () => {
  return (
    <>
    <Grid sx={{mt:'3rem',mb:'3rem'}}>
    <Typography variant='h5'component='div' align='center'sx={{pt:'20px',pb:'10px',ml:'4rem'}}>
       Step One
    </Typography>
    <Typography variant='subtitle' component='div' align='center' sx={{pt:'20px',pb:'10px',ml:'4rem'}} >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum vel magna ut gravida. Maecenas id blandit lacus. Fusce eleifend sodales augue, sit amet scelerisque velit dictum sit amet. Vivamus eget diam venenatis, dapibus orci id, pellentesque dui. Suspendisse accumsan metus nec lorem maximus condimentum. Morbi ornare interdum varius. Quisque sed sem sapien.
    </Typography>
    </Grid>
    </>
  )
}
