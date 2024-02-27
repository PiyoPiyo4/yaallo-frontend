import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import logo from '../assets/yaallo.jpeg'
import { RiHomeLine } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { PiBagSimple } from "react-icons/pi";
import { CgMenu } from "react-icons/cg";

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000', 
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        },
      },
    },
  },
});

function BotNavBar({ onSectionChange }) {
  const [activeSection, setActiveSection] = React.useState('home');
  
  const handleSectionClick = (section) => {
    setActiveSection(section);
    onSectionChange(section);
  };
  
  return (
    <ThemeProvider theme={theme}>
      {/* Top Navigation Bar */}
      <AppBar position="static" sx={{ boxShadow: 'none' , mt: 1 }}>
        <Toolbar sx={{ padding: 0}}>
          <Typography variant="h6" noWrap component="div" sx={{ padding: 0}}>
              <img src={logo} style={{ height: '50px', cursor: 'pointer' }} alt='LogoYaallo'/>
              <TextField
                sx={{ ml: 1, mt: 2  , backgroundColor: '#d9d9d9', borderRadius: '5px',
                '& .MuiInputBase-root': {
                  height: 20,
                  width: 200,
                  fontSize: 10,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .Mui-focused': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid #000 !important',
                    },
                },
              }}
                size="small"
                placeholder="Search"
              />
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Bottom Navigation Bar */}
      <BottomNavigation
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.12)', zIndex: 100, pl: 2 , pr: 2}}
      >
        <BottomNavigationAction
          onClick={() => handleSectionClick('home')}
          sx={{ fontSize: 25, ml: 2 }} 
          icon={<RiHomeLine color={activeSection === 'home' ? '#f8ce4e' : 'black'}/>} 
          disableRipple/>
        <BottomNavigationAction sx={{ fontSize: 25 }} onClick={() => handleSectionClick('message')}icon={<BiMessageAltDetail color={activeSection === 'message' ? '#f8ce4e' : 'black'} />}  disableRipple/>
        <BottomNavigationAction sx={{ fontSize: 25 }} onClick={() => handleSectionClick('notification')}icon={<FiBell color={activeSection === 'notification' ? '#f8ce4e' : 'black'}/>} disableRipple/>
        <BottomNavigationAction sx={{ fontSize: 25 }} onClick={() => handleSectionClick('jobs')}icon={<PiBagSimple color={activeSection === 'jobs' ? '#f8ce4e' : 'black'}/>} disableRipple/>
        <BottomNavigationAction
          onClick={() => handleSectionClick('mobileMenu')}
          sx={{ fontSize: 25, mr: 2 }} 
          icon={<CgMenu color="#f8ce4e"/>} 
          disableRipple/>
      </BottomNavigation>
    </ThemeProvider>
  );
}

export default BotNavBar;
