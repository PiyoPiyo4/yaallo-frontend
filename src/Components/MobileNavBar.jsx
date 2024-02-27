import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import HomeIcon from '@mui/icons-material/Home';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import SearchIcon from '@mui/icons-material/Search';
// import SettingsIcon from '@mui/icons-material/Settings';
import logo from '../assets/yaallo.jpeg'
import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { RiHomeLine } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { PiBagSimple } from "react-icons/pi";
// import MenuIcon from '@mui/icons-material/Menu';
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
      <AppBar position="static" sx={{ boxShadow: 'none' , mt: 1 }}>
        <Toolbar sx={{ padding: 0}}>
          <Typography variant="h6" noWrap component="div" sx={{ padding: 0}}>
            {/* <Box sx={{ display: 'flex', justifyContent: 'space-between' }}> */}
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
                // InputProps={{
                //   startAdornment: (
                //     <IconButton edge="start" sx={{ color: 'text.primary' }}>
                //       <SearchIcon />
                //     </IconButton>
                //   ),
                // }}
              />
            {/* </Box> */}
          </Typography>
          {/* <div style={{ flexGrow: 1, flexBasis: 0}}></div> */}
        </Toolbar>
      </AppBar>
      {/* {activeSection === 'menu' && <MobileMenuPage/>} */}
      {/* {activeSection === 'home' && <HomeContent/>} */}
      <BottomNavigation
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.12)', zIndex: 100, pl: 2 , pr: 2}}
      >
        <BottomNavigationAction
          // onClick={() => setActiveSection('home')}
          // selected={color= ''}
          onClick={() => handleSectionClick('home')}
          sx={{ fontSize: 25, ml: 2 }} 
          icon={<RiHomeLine color={activeSection === 'home' ? '#f8ce4e' : 'black'}/>} 
          disableRipple/>
        <BottomNavigationAction sx={{ fontSize: 25 }} onClick={() => handleSectionClick('message')}icon={<BiMessageAltDetail color={activeSection === 'message' ? '#f8ce4e' : 'black'} />}  disableRipple/>
        <BottomNavigationAction sx={{ fontSize: 25 }} onClick={() => handleSectionClick('notification')}icon={<FiBell color={activeSection === 'notification' ? '#f8ce4e' : 'black'}/>} disableRipple/>
        <BottomNavigationAction sx={{ fontSize: 25 }} onClick={() => handleSectionClick('jobs')}icon={<PiBagSimple color={activeSection === 'jobs' ? '#f8ce4e' : 'black'}/>} disableRipple/>
        <BottomNavigationAction
          // onClick={() => setActiveSection('menu')}
          // selected={activeSection === 'menu'}
          onClick={() => handleSectionClick('mobileMenu')}
          sx={{ fontSize: 25, mr: 2 }} 
          icon={<CgMenu color="#f8ce4e"/>} 
          disableRipple/>
      </BottomNavigation>
    </ThemeProvider>
  );
}

export default BotNavBar;
