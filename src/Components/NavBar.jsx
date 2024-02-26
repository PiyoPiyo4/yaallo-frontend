import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Grid, Menu, MenuItem, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../assets/yaallo.jpeg'
import { ButtonGroup } from '@mui/material';
import styles from './styles/NavBar.css'

import { IoMdInformationCircleOutline, IoMdHelpCircleOutline } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

// Costum Theme for the Navigation Bar
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000', 
    },
  },
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',
        },
      },
    },
  },
});

function Navbar() {
  const [menuDrop, setMenuDrop] = React.useState(null);

  const handleMenuOpen = (event) => {
    setMenuDrop(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setMenuDrop(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ boxShadow: 'none' }}>
        <Toolbar>
          {/* Left Components */}
          <div style={{ flexGrow: 2, flexBasis: 0}}></div>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 2}}>
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
          </Typography>

          {/* Right Components */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 2, boxShadow: 'none' }}>
            <ButtonGroup disableRipple >
              <Button color="secondary" variant='text'>Home</Button>
              <Button color="secondary" variant='text'>Massage</Button>
              <Button color="secondary" variant='text'>Notification</Button>
              <Button color="secondary" variant='text'>Jobs</Button>
            </ButtonGroup>
            <IconButton color="inherit" disableRipple>
              <AccountCircleIcon />
            </IconButton>
            <IconButton
              disableRipple
              onClick={handleMenuOpen}
              sx = {{ color: '#f8ce4e'}}
            >
              <MenuIcon />
            </IconButton>
            {/* Menu Dropdown */}
            <Paper sx={{ boxShadow: 'none', borderRadius: '4px'}}>
            <Menu
              anchorEl={menuDrop}
              open={Boolean(menuDrop)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} sx={{ display: 'flex', alignItems: 'center',boxShadow: 'none' }}>
                <div className='iconContainer'>
                  <IoMdInformationCircleOutline size="30px"/>
                </div>
                About yaallO</MenuItem>
              <Divider variant="middle" component="li"/>
              <MenuItem onClick={handleMenuClose}>
                <div className='iconContainer'>
                  <GoShieldCheck size="30px"/>
                </div>
                Data Privacy</MenuItem>
              <Divider variant="middle" component="li"/>
              <MenuItem onClick={handleMenuClose}>
                <div className='iconContainer'>
                  <IoSettingsOutline size="30px"/>
                </div>
                Setting</MenuItem>
              <Divider variant="middle" component="li"/>
              <MenuItem onClick={handleMenuClose}>
                <div className='iconContainer'>
                  <MdOutlineMail size="30px"/>
                </div>
                Help Center</MenuItem>
              <Divider variant="middle" component="li"/>
              <MenuItem onClick={handleMenuClose}>
                <div className='iconContainer'>
                  <IoMdHelpCircleOutline size="30px"/>
                </div>
                FAQs</MenuItem>
              <Divider variant="middle" component="li"/>
              <MenuItem onClick={handleMenuClose}>
              <div className='iconContainer'>
                  <FiPhoneCall size="30px"/>
                </div>
                Contact Us</MenuItem>
            </Menu>
            </Paper>
          </Box>
          <div style={{ flexGrow: 2, flexBasis: 0}}></div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
