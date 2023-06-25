import { Grid,Typography,Button } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react'

export const Footer = () => {
  return (
    <>
    <Grid container sx={{height:'10rem', mt:'4rem',bgcolor:'primary.main',borderTopRightRadius:'100px'}}>
    <Grid container xs={12}md={4} justifyContent='center'sx={{mt:7, mb: 2}}>
    <Typography variant='h5'>Music Community</Typography>
    </Grid>
    <Grid container xs={12}md={4} justifyContent='center'sx={{mt:7, mb: 2}}>
    <Typography variant='subtitle1'>
      © Copyright {new Date().getFullYear()} Rashid Hussain .All rights reserved.
    </Typography>
    </Grid>
    <Grid container xs={12}md={4} justifyContent='center'>
    <Grid item > 
    <Button startIcon={<LinkedInIcon/>} fullWidt variant="contained" href="https://www.linkedin.com/in/rashid-hussain-9b737b1b0/" sx={{ mt:7, mb: 2,ml:1,bgcolor:'primary.light'}}>LinkedIn</Button>
    <Button startIcon={<GitHubIcon/>} fullWidt variant="contained" href="https://github.com/RashidHussain786" sx={{ mt:7, mb: 2,ml:1,bgcolor:'primary.light'}}>Github</Button>
    <Button startIcon={<TwitterIcon/>} fullWidt variant="contained"  sx={{ mt:7, mb: 2,ml:1,bgcolor:'primary.light'}}>Twitter</Button>
    </Grid>
    </Grid> 
    </Grid>

    </>
  )
}
