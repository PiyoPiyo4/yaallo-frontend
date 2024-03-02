import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Grid, Paper, Button} from '@mui/material';
import TimeLine from '../Components/TimeLine';

const DesktopContent = () => {
  const navigate = useNavigate();
  return (
  <div style={{ overflow: 'hidden'}}>
    <Box sx={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', 
              alignItems: 'center', height: '55px', backgroundColor: 'white', paddingRight: '5px', fontSize: '12px'}}>
      <Button sx={{borderRadius: '8px', 
                  '&:hover': { backgroundColor: 'transparent'},
                  backgroundColor: '#FEDD12',
                  textTransform: 'none',
                  color : 'black',
                  width: '80px',
                  height: '20px',
                  fontSize: '12px',
                  }} disableRipple onClick={() => navigate('/login')}>
                  Sign In</Button>
      <Button sx={{borderRadius: '8px', 
                  border:'1px solid #fedd12', 
                  '&:hover': { backgroundColor: 'transparent'},
                  textTransform: 'none',
                  color: 'black',
                  width: '80px',
                  height: '20px',
                  fontSize: '12px',
                  }} disableRipple onClick={() => navigate('/signup')}> 
                  Sign Up </Button>
    </Box>
    <Grid sx={{mt: 2, width: '100%'}}>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ height: '100%', width: '100%' }}>
          <Box sx={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <TimeLine />
            {/* <Typography variant="h5">Pagination</Typography> */}
            {/* Replace with your pagination component */}
            {/* <Pagination count={10} color="primary" /> */}
          </Box>
        </Paper>
      </Grid>
    </Grid>
    {/* </Box> */}
  </div>
  )
}

export default DesktopContent;