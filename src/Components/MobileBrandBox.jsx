import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Paper, Button, Divider} from '@mui/material';
import { APICall } from '../helperFunction.js'
import Rec from '../assets/recbackground2.svg'
import Defaultpp from '../assets/defaultpp.svg'

import { PiGlobeBold } from "react-icons/pi";
import { RiMapPin2Line } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { LuPlaySquare } from "react-icons/lu";
import { MdOutlinePostAdd } from "react-icons/md";


const LoginSignUpBox = ({setToken}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const logginOut = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'token': token
      };
      const data = await APICall(null, `/logout`, 'POST', headers);
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.clear();
      setToken('')
    } catch (err) {
      alert(err);
      navigate('/');
    }
  }
  return (
    <Paper sx={{ height: '100%', display: 'flex', justifyContent: 'center', backgroundColor: 'transparent', boxShadow: 'none',   }}>
      <Box sx={{ maxWidth: '95%',height: '550px', flex: 2, borderRadius: '5px', position: 'relative', backgroundColor: '#fff', mt: 2 }}>
        <Box sx={{top: 0, right: 0,position: 'absolute'}}>
            <img src={Rec} alt='bg' style={{ width: '100%' }} />
            <img src={Defaultpp}   style={{ position: 'absolute', top: '100%', left: '15%', transform: 'translate(-50%, -50%)'}} alt='logo'/>
        </Box>
        <Box sx={{
          // border: '1px solid black',
          width: '100%',
          top: '21%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-end',
          height: '7%'
        }}>
          <p style={{ marginRight: 10 }}> BrandName </p>
        </Box>
        <Box sx={{
          // border: '1px solid black',
          width: '100%',
          top: '20%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          height: '7%'
        }}>
          <p style={{ marginLeft: 10 }}>Edit</p>
          <p style={{ marginRight: 10 }}> Fans </p>
        </Box>
        <Divider variant="middle"  component="div" sx={{ borderColor: '#F5BA04', position: 'relative', top: '22%', }}/>
        <Box sx={{
          // border: '1px solid black',
          width: '100%',
          top: '23%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          height: '5%',
          margin: 0,
        }}>
          <p style={{ margin: 0 }}> Description </p>
        </Box>
        <Box sx={{
          // border: '1px solid black',
          width: '100%',
          top: '27%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          height: '10%',
          // margin: 0,
          flexDirection: 'column',
          gap: '0.5rem',
          // ml : 0.1
        }}>
          <p style={{ margin: 0, marginLeft: 10, display: 'flex', alignItems: 'center', }}> <PiGlobeBold size='22px'/> <span style={{ marginLeft: 5 }}> Website</span></p>
          <p style={{ margin: 0, marginLeft: 10, display: 'flex', alignItems: 'center', }}> <RiMapPin2Line size='22px'/> <span style={{ marginLeft: 5 }}> Location</span></p>
          <p style={{ margin: 0, marginLeft: 10, display: 'flex', alignItems: 'center', }}> <IoIosInformationCircleOutline size='22px'/>  <span style={{ marginLeft: 5 }}> Email</span></p>
        </Box>
        <Box sx={{
          // border: '1px solid black',
          width: '100%',
          top: '32%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-evenly',
          // height: '10%',
          // margin: 0,
          // gap: '0.5rem',
          // ml : 0.1
        }}>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Box sx={{ borderRadius: '50%', backgroundColor: '#F5BA04', width: '63px', height: '63px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 1}}>
              <MdOutlinePhotoCamera size='40px'/>
            </Box>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: 'bold'}}>Post Photo</p>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Box sx={{ borderRadius: '50%', backgroundColor: '#F5BA04', width: '63px', height: '63px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 1}}>
              <LuPlaySquare size='40px'/>
            </Box>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: 'bold'}}>Post Video</p>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Box sx={{ borderRadius: '50%', backgroundColor: '#F5BA04', width: '63px', height: '63px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 1}}>
              <MdOutlinePostAdd size='40px'/>
            </Box>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: 'bold'}}>Post Content</p>
          </Box>
        </Box>
        <Box sx={{
          // border: '1px solid black',
          width: '100%',
          top: '40%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          height: '8%'
        }}>
          <Button sx={{borderRadius: '40px', 
                          border:'2px solid #fedd12',  
                          '&:hover': { backgroundColor: 'transparent'},
                          textTransform: 'none',
                          color: 'black',
                          width: '80%'
                          }} disableRipple onClick={() => logginOut()}> 
                          Logout</Button>
        </Box>
      </Box>
    </Paper>
  )

}

export default LoginSignUpBox