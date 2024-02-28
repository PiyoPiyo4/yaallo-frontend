import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Box,
} from '@mui/material';
import RightLogin from '../assets/rightbigvector.svg';
import LeftLogin from '../assets/leftbigvector.svg';
// import signupvec from '../assets/signupmobilevec.svg'
import logo from '../assets/yaallo.jpeg'

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ overflow: 'hidden'}}>
      <Box sx={{ minHeight: '100vh', minWidth: '100vw', position: 'relative'}}>
        <Box sx={{top: 0, right: 0, position: 'absolute'}}>
          <img src={RightLogin} alt='bg' style={{ maxWidth: '100%', height: 'auto'}}/>
        </Box>
        <Box sx={{bottom: 0, left:0 , position: 'absolute',}}>
          <img src={LeftLogin} alt='bg' style={{ maxWidth: '100%', height: 'auto', display: 'block'}}/>
        </Box>
        {/* <Box sx={{ '@media (max-width: 768px)': {top:0, right: 0, zIndex: 10, position: 'absolute',}}}>
          <img src={signupvec} alt='bg'/>
        </Box> */}
        <Box sx={{ justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', display: 'flex', position:'absolute' }}>
          <Box sx= {{width: '350px', padding: '2rem', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <Box sx={{textAlign: 'center', gap: '1.5rem', flexDirection: 'column', width: '100%', height: '100%', display:'flex'}}>
              <h1 style={{ fontSize: '40px', fontWeight: '500'}}> Sign Up </h1>
              <Button
                sx={{
                  borderRadius: '40px', 
                  '&:hover': { backgroundColor: 'transparent'},
                  backgroundColor: '#FEDD12',
                  textTransform: 'none',
                  color : 'white',
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  height: '57.37px',
                  boxShadow: '0px 4px 8px 0px #00000040',
                }}
                disableRipple
                onClick={() => navigate('/signup-brand')}
              > Register as a brand </Button>
              <Button
                sx={{
                  borderRadius: '40px', 
                  '&:hover': { backgroundColor: 'transparent'},
                  backgroundColor: '#FEDD12',
                  textTransform: 'none',
                  color : 'white',
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  height: '57.37px',
                  boxShadow: '0px 4px 8px 0px #00000040',
                }}
                disableRipple
                onClick={() => navigate('/signup-user')}
              > Register as a user </Button>
              <p style={{ fontSize: '16px'}}> <span>Have an account? </span> <span style={{ color:'#FEDD12', textDecoration: 'underline', fontWeight: '500' }} onClick={() => navigate('/login')}>Sign In</span> </p>
            </Box>
          </Box>
        </Box>
        <Box sx={{ padding: '1.5rem', position: 'absolute'}}>
          <img src={logo} alt='bg' style={{ maxWidth: '127px', height: 'auto', display: 'block'}} onClick={() => navigate('/')}/>
        </Box>
      </Box>
    </div>
  );
};

export default LoginPage;
