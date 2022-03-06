import { Card,CardMedia } from '@mui/material'
import React from 'react'

export const RightMainHero = () => {
  return (
    <>
    <Card sx={{bgcolor:'primary.main'}}elevation={0} >
        <CardMedia
         component="img"
         height="auto"
         image="/static/Image/21.svg"
         alt="Main hero pic"
        />
    </Card>

    </>
  )
}
