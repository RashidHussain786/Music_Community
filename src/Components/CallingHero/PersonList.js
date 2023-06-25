import { Button, Card, Grid } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React, { useContext } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';


export const PersonList = ({ similarSongs }) => {
  
  return (
    <>
      <Card elevation={0} sx={{ bgcolor: 'primary.main', mt: 1 }}>
        <Grid container>
          <Grid item xs={12} md={2.5}></Grid>
          <Grid item xs={12} md={7} sx={{ pr: '8px', pl: '8px' }}>
            {similarSongs.map((song,index) => (
              <div key={song.updatemettingid}>
                <CopyToClipboard text={song.updatemettingid}>
                  <Button startIcon={<ContentCopyIcon />} variant="contained" sx={{ bgcolor: 'primary.light' ,mt:1}}>
                  {index+1} - ID to Call  
                  </Button>
                </CopyToClipboard>
              </div>
            ))}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

