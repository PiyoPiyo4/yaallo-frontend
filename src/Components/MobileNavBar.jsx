import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from '../assets/yaallo.jpeg'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { RiHomeLine } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { PiBagSimple } from "react-icons/pi";
import MenuIcon from '@mui/icons-material/Menu';
import { CgMenu } from "react-icons/cg";

import MobileMenuPage from '../Pages/MobileMenuPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000', 
    },
    bottomNavIcon: {
      main: '#fff', // Default color for bottom navigation icons
    },
  },
});

function BotNavBar() {
  const [activeSection, setActiveSection] = React.useState('home');

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ display: 'flex', justifyContent: 'center' , flexGrow : 1, flexBasis: 0}}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={logo} style={{ height: '40px', cursor: 'pointer' }} alt='LogoYaallo'/>
              <TextField
                sx={{ ml: 2 }}
                size="small"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <IconButton edge="start" sx={{ color: 'text.primary' }}>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
              </Box>
          </Typography>
        </Toolbar>
      </AppBar>
      {activeSection === 'menu' && <MobileMenuPage/>}
      <BottomNavigation
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.12)', }}
      >
        <BottomNavigationAction
          onClick={() => setActiveSection('home')}
          selected={activeSection === 'home'}
          sx={{ fontSize: 30 }} 
          icon={<RiHomeLine color="black" />} 
          disableRipple/>
        <BottomNavigationAction sx={{ fontSize: 30 }} icon={<BiMessageAltDetail color="black"/>}  disableRipple/>
        <BottomNavigationAction sx={{ fontSize: 30 }} icon={<FiBell color="black"/>} disableRipple/>
        <BottomNavigationAction sx={{ fontSize: 30 }} icon={<PiBagSimple color="black"/>} disableRipple/>
        <BottomNavigationAction
          onClick={() => setActiveSection('menu')}
          selected={activeSection === 'menu'}
          sx={{ fontSize: 30 }} 
          icon={<CgMenu color="#f8ce4e"/>} 
          disableRipple/>
      </BottomNavigation>
    </ThemeProvider>
  );
}

export default BotNavBar;
