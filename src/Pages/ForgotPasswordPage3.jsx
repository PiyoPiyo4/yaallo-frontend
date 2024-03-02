import React , {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  TextField,
  Button,
  Box,
} from '@mui/material';
import RightLogin from '../assets/rightbigvector.svg';
import LeftLogin from '../assets/leftbigvector.svg';
import logo from '../assets/yaallo.jpeg'

import { APICall } from '../helperFunction.js'

const api_key = process.env.SENDGRID_API_KEY


const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const [newpass, setNewPass] = useState('');
  const newPassSent = async (email, newpass) => {
      let data = null;
      try {
        const requestBody = {
          email: email,
          newPassword: newpass,
        };
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${api_key}`
        };
        data = await APICall(requestBody, '/reset-password', 'POST', headers);
        console.log(data)
        navigate('/login')
      } catch (err) {
        alert(err);
      }
    }
  return (
    <div style={{ overflow: 'hidden'}}>
      <Box sx={{ minHeight: '100vh', minWidth: '100vw', position: 'relative'}}>
        <Box sx={{top: 0, right: 0, position: 'absolute'}}>
          <img src={RightLogin} alt='bg' style={{ maxWidth: '100%', height: 'auto'}}/>
        </Box>
        <Box sx={{bottom: 0, left:0 , position: 'absolute'}}>
          <img src={LeftLogin} alt='bg' style={{ maxWidth: '100%', height: 'auto', display: 'block'}}/>
        </Box>
        <Box sx={{ justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', display: 'flex', position:'absolute' }}>
          <Box sx= {{width: '350px', padding: '2rem', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <Box sx={{textAlign: 'center', gap: '1.5rem', flexDirection: 'column', width: '100%', height: '100%', display:'flex'}}>
              <Box sx={{textAlign: 'left' , marginLeft: '2px'}}>
                <h1 style={{ fontSize: '40px', fontWeight: '500', marginBottom: 0, marginLeft: -2}}>Forgot Password </h1>
                <span style={{ fontSize:'13px'}}>Please enter your new password for the registered email </span>
              </Box>
              <TextField 
                fontSize= '14px'
                placeholder='New Password'
                sx={{ mt: 2 , backgroundColor: '#F5F5F5', borderRadius: '40px', fontFamily: 'Inter',
                '& .MuiInputBase-root': {
                  height: '50px',
                  width: '350px',
                  fontSize: '14px',
                  paddingLeft: '10px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '& .Mui-focused': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid black !important',
                    borderRadius: '40px',
                    },
                },
              }}
              value={newpass}
              onChange={(e) => setNewPass(e.target.value)}
              />
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
                onClick={() => newPassSent(email, newpass)}
              > Reset Password </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ padding: '1.5rem', position: 'absolute'}}>
        <img src={logo} alt='bg' style={{ maxWidth: '200px', height: 'auto', display: 'block'}} onClick={() => navigate('/')}/>
        </Box>
      </Box>
    </div>
  );
};

export default LoginPage;
