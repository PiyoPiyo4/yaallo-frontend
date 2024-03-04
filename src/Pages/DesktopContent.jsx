import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Grid, Paper, Button} from '@mui/material';
import RightLogin from '../assets/rightvector.svg'
import LeftLogin from '../assets/leftvector.svg'
import TimeLine from '../Components/TimeLine';
// import { APICall } from '../helperFunction.js'

const DesktopContent = () => {
  const navigate = useNavigate();
  // async function dataApp() {
  //   // let fetchedData = [{}];
  //   try {
  //     const headers = {
  //       'Content-Type': 'application/json',
  //     };
  //     const requestBody = {
  //       pageSize: 1,
  //     };
  //     // console.log('here123');
  //     let data = await APICall(requestBody, `/add`, 'POST', headers);
  //     console.log(data)
  //   } catch (err) {
  //     console.log(err);
  //     alert(err);
  //   }
  // }
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
          <Box sx={{justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            {/* <Button onClick={() => dataApp()} sx={{ backgroundColor: 'black'}}></Button> */}
            <TimeLine />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ height: '100%',  backgroundColor: 'transparent'  }}>
          <Box sx={{justifyContent: 'center', alignItems: 'center' }}>
            <video autoPlay muted loop playsinline style={{ 
              // width: 'auto', 
              // marginLeft: '8px',
              maxWidth: '300px',
              // marginTop: '5px',
              // height: '200px',
              /* border-radius: 50%; */
            }}>
              <source src="https://yaallo.com/image/vid.mp4" type="video/mp4"/>
            </video>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  </div>
  )
}

export default DesktopContent;