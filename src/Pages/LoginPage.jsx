import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Box,
} from '@mui/material';
import RightLogin from '../assets/rightbigvector.svg';
import LeftLogin from '../assets/leftbigvector.svg';
import logo from '../assets/yaallo.jpeg'
import PasswordField from '../Components/PasswordField';
import { APICall } from '../helperFunction.js'

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = async (email, password) => {
    let data = null;
    try {
      const requestBody = {
        email: email,
        password: password ,
      };
      const headers = {
        'Content-Type': 'application/json',
      };
      data = await APICall(requestBody, '/login', 'POST', headers);
      // console.log(data);
      localStorage.setItem('token', data['token']);
      localStorage.setItem('acc_type', data['acc_type']);
      navigate('/')
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
              <h1 style={{ fontSize: '40px', fontWeight: '500'}}> Sign In </h1>
              <TextField 
                fontSize= '14px'
                placeholder='Email Address'
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <div onChange={(e) => setPassword(e.target.value)}>
                <PasswordField value={password}  />
              </div>
              <Box sx={{textAlign: 'right', fontSize: '12px', textDecoration:'underline', mt: -4, fontWeight: '400'}}>
                <p onClick={() => navigate('/forgot-password')}> Forgot Password? </p>
              </Box>
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
                onClick={ () => login(email, password)}
                disableRipple
              > Login </Button>
              <p style={{ fontSize: '16px'}}> <span>Don't have an account? </span> <span style={{ color:'#FEDD12', textDecoration: 'underline', fontWeight: '500' }} onClick={() => navigate('/signup')} >Sign Up</span> </p>
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
