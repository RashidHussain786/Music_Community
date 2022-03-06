import { Button, Card, Grid } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React, { useContext } from 'react'
import { SocketContext } from '../../Context';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';



export const PersonList = () => {

  const{me}=useContext(SocketContext);
  
  return (
    <>  
    <Card elevation={0} sx={{bgcolor:'primary.main',mt:1}}>
     <Grid container>
    <Grid item xs={12}md={2.5}>
    </Grid>   
    <Grid item xs={12}md={7}sx={{pr:'8px',pl:'8px'}}>       
    <CopyToClipboard text={me}>
    <Button fullWidth startIcon={<ContentCopyIcon/>} variant='contained' sx={{bgcolor:'primary.light'}}>Copy Id</Button>
    </CopyToClipboard> 
    </Grid>
    </Grid>
    </Card>
    
    </>
  )
}
