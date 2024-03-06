import React , {useState, useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Grid, Paper, Button} from '@mui/material';
import TimeLine from '../Components/TimeLine';

// import UserBox from '../Components/UserBox'
import BrandBox from '../Components/MobileBrandBox'
import UserBox from '../Components/MobileUserBox'

const DesktopContent = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [acc_type, setAccType] = useState('')

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedAccType = localStorage.getItem('acc_type');
    setToken(storedToken);
    setAccType(storedAccType);
  }, [token, acc_type])
  return (
  <div style={{ overflow: 'hidden'}}>
    { !token &&
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
    </Box>}
    {(token && acc_type === 'BRAND') && <BrandBox setToken={setToken} /> }
    {(token && acc_type === 'USER') && <UserBox setToken={setToken}/>}
    <BrandBox />
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