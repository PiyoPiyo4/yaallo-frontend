import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Grid, Paper, Button} from '@mui/material';
import RightLogin from '../assets/rightvector.svg'
import LeftLogin from '../assets/leftvector.svg'

const DesktopContent = () => {
  const navigate = useNavigate();
  return (
  <div style={{ overflow: 'hidden'}}>
    <Grid container spacing={2} sx={{mt: 2, width: '100%'}}>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ height: '100%', display: 'flex', justifyContent: 'flex-end', backgroundColor: 'transparent'  }}>
          <Box sx={{ maxWidth: '241px', height: '500px', flex: 2, borderRadius: '5px', position: 'relative', backgroundColor: '#fff' }}>
            <Box sx={{top: 0, right: 0, position: 'absolute'}}>
                <img src={RightLogin} alt='bg' style={{ width: '150px', height: 'auto'}}/>
            </Box>
            <Box sx={{display: 'flex', 
                      justifyContent: 'center', 
                      flexDirection: 'column', 
                      alignItems: 'stretch', 
                      padding: '0.5rem',
                      gap:'0.5rem',
                      height: '100%'}}>
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>Fashion Lifestyle Platform</p>
                <Button sx={{borderRadius: '40px', 
                            '&:hover': { backgroundColor: 'transparent'},
                            backgroundColor: '#FEDD12',
                            textTransform: 'none',
                            color : 'white',
                            }} disableRipple onClick={() => navigate('/login')}>
                            Login</Button>
                <Button sx={{borderRadius: '40px', 
                            border:'2px solid #fedd12', 
                            marginBottom: '60px', 
                            '&:hover': { backgroundColor: 'transparent'},
                            textTransform: 'none',
                            color: 'black',
                            }} disableRipple onClick={() => navigate('/signup')}> 
                            Sign up </Button>
            </Box>
            <Box sx={{bottom: 0, left:0 , position: 'absolute'}}>
                <img src={LeftLogin} alt='bg' style={{ width: '150px', height: 'auto', display: 'block'}}/>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p>Middle</p>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p>Right</p>
            <img src="your_image.jpg" alt="vid" width="100%" height="auto" />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  </div>
  )
}

export default DesktopContent;