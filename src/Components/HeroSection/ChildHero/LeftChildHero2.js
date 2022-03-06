import { Card, CardMedia } from '@mui/material'
import React from 'react'

export const LeftChildHero2 = () => {
  return (
    <>
    <Card elevation={0} >
    <CardMedia
    sx={{objectFit:'fill'}}
     component="img"
     height="300rem"
     image="/static/Image/12.svg"
     alt="Main hero pic"
    />
    </Card> 
    </>
  )
}
