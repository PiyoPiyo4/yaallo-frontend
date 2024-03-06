import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import {Box, Grid, Paper, 
  // Button
} from '@mui/material';
// import RightLogin from '../assets/rightvector.svg'
// import LeftLogin from '../assets/leftvector.svg'
import TimeLine from '../Components/TimeLine';
import LoginSignUpBox from '../Components/DesktopLoginSignUpBox'
import BrandBox from '../Components/DesktopBrandBox'
import UserBox from '../Components/DesktopUserBox'
// import { APICall } from '../helperFunction.js'

const DesktopContent = () => {
  // const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [acc_type, setAccType] = useState('')
  
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedAccType = localStorage.getItem('acc_type');
    setToken(storedToken);
    setAccType(storedAccType);
  }, [token, acc_type])
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
    <Grid container spacing={2} sx={{mt: 2, width: '100%', boxShadow: 'none' }}>
      <Grid item xs={12} sm={4} >
        {(token && acc_type === 'BRAND') && <BrandBox setToken={setToken} /> }
        {(token && acc_type === 'USER') && <UserBox setToken={setToken}/>}
        {!token && <LoginSignUpBox />}
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ height: '100%', backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Box sx={{justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: 'transparent' }}>
            {/* <Button onClick={() => dataApp()} sx={{ backgroundColor: 'black'}}></Button> */}
            <TimeLine />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ height: '100%',  backgroundColor: 'transparent', boxShadow: 'none'  }}>
          <Box sx={{justifyContent: 'center', alignItems: 'center' }}>
            <video autoPlay muted loop playsInline style={{ 
              maxWidth: '300px',
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