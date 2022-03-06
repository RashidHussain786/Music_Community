import {  Grid, Typography } from '@mui/material'
import React from 'react'
import { LeftChildHero } from './ChildHero/LeftChildHero'
import { LeftChildHero2 } from './ChildHero/LeftChildHero2'
import { RightChildHero } from './ChildHero/RightChildHero'
import { RightChildHero2 } from './ChildHero/RightChildHero2'
import { RightChildHero3 } from './ChildHero/RightChildHero3'
import { LeftMainHero } from './MainHero/LeftMainHero'
import { RightMainHero } from './MainHero/RightMainHero'
import {LeftChildHero3}  from './ChildHero/LeftChildHero3'
export const Hero = () => {
  return (
    <>
     {/*Main Hero */}
    <Grid container sx={{bgcolor:'primary.main',borderBottomLeftRadius:'140px'}}>
    <Grid item xs={12} md={6}>
    <LeftMainHero/>
    </Grid>
    <Grid item xs={12} md={6}>
    <RightMainHero/>
    </Grid>
    </Grid>

    {/*Child Hero */}
    <Grid container>
    <Grid container xs={12} sx={{mt:'3rem',mb:'1rem',justifyContent:'center'}}>
    <Typography variant='h4'>
    How We Find The People Around Us With Similar Test Of Music  
    </Typography> 
    </Grid>
    <Grid item sx={12} md={6}>
    <LeftChildHero/>
    </Grid>
    <Grid item sx={12} md={6}>
    <RightChildHero/>
    </Grid>
    <Grid item sx={12} md={6}>
    <LeftChildHero2/>
    </Grid>
    <Grid item sx={12} md={6}>
    <RightChildHero2/>
    </Grid>
    <Grid item sx={12} md={6}>
    <LeftChildHero3/>
    </Grid>
    <Grid item sx={12} md={6}>
    <RightChildHero3/>
    </Grid>
    </Grid>
    </>
  )
}
