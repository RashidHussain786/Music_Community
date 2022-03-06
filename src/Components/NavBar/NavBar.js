import { AppBar,IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import GroupIcon from '@mui/icons-material/Group';
export const NavBar = () => {
  return (
    <>
    <AppBar position='static'>
        <Toolbar>
          <IconButton sx={{mr:'1rem'}}>
          <LibraryMusicIcon  />
          </IconButton>
         <Typography variant='h5' flexGrow='1'>
         Music Community
         </Typography>
         <Typography variant='h7' sx={{mr:'2rem'}}>
           2
         <IconButton>
           <GroupIcon />
         </IconButton>
           Active User
         </Typography>
        </Toolbar>
    </AppBar>
    
    </>
  )
}
