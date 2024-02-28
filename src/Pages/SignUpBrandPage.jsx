import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
} from '@mui/material';
import RightLogin from '../assets/rightbigvector.svg';
import LeftLogin from '../assets/leftbigvector.svg';
import logo from '../assets/yaallo.jpeg'

import PasswordField from '../Components/PasswordField';

const LoginPage = () => {
 const navigate = useNavigate();
 const [updateUser, setUpdateUser] = useState(false);

const handleChange = (event) => {
  setUpdateUser(event.target.checked);
};


 const TextBox = ({ placeholder }) => (
  <TextField
    placeholder={placeholder}
    fontSize= '14px'
    sx={{ backgroundColor: '#F5F5F5', borderRadius: '40px', fontFamily: 'Inter',
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
  />
);
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
            <h1 style={{ fontSize: '40px', fontWeight: '500'}}> Brand Register </h1>
            <TextBox placeholder={'Brand Name'}/>
            <TextBox placeholder={'Email Address'}/>
            <PasswordField />
            <FormControlLabel
              control={<Checkbox checked={updateUser} onChange={handleChange} />}
              sx={{ mt: 1, 
                    "& .MuiFormControlLabel-label": {
                    fontSize: '11px', 
                    textAlign: 'left',
                    } 
                 }}
              label="Get informed on promotions and new posts and you can opt-out at any time."
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
            > Sign Up </Button>
            <Box style={{ textAlign: 'left', color: '#ABABAB', fontSize: '10px'}}>
              <p >By signing up, you agree to our Terms of Use and the Terms of our Privacy and Cookies Statement.</p>
              <p> This site is protected by reCAPTCHA and the yaallO Privacy Policy and Terms of Service apply.</p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: '1.5rem', position: 'absolute'}} onClick={() => navigate('/')}>
        <img src={logo} alt='bg' style={{ maxWidth: '200px', height: 'auto', display: 'block'}} onClick={() => navigate('/')} />
      </Box>
    </Box>
  </div>
 );
};

export default LoginPage;
