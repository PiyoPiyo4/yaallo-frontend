import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Menu, MenuItem, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../assets/yaallo.jpeg'
import { ButtonGroup } from '@mui/material';
import './styles/NavBar.css'

import { IoMdInformationCircleOutline, IoMdHelpCircleOutline } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const menuItems = [
  { title: 'About Yaallo', icon: <IoMdInformationCircleOutline size="25px" /> },
  { title: 'Data Privacy', icon: <GoShieldCheck size="25px" /> },
  { title: 'Settings', icon: <IoSettingsOutline size="25px" /> },
  { title: 'Help Center', icon: <MdOutlineMail size="25px" /> },
  { title: 'FAQs', icon: <IoMdHelpCircleOutline size="25px" /> },
  { title: 'Contact Us', icon: <FiPhoneCall size="25px" /> },
];

const ItemComponent = ({ title, icon, clickHandler }) => {
  return (
    <MenuItem onClick={clickHandler} sx={{ '&:hover': { backgroundColor: 'transparent'} }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: -1, mt: -1}}>
        <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '25%',
              backgroundColor: '#f5ba05',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 'none',
            }}>
          {icon}
        </div>
        <Typography sx={{ ml: 2 , fontSize: '13px', '&:hover': { color: 'blue' } }}>
          {title}
        </Typography>
      </Box>
    </MenuItem>
  );
};

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
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       // Removed unnecessary nesting (`.MuiOutlinedInput-notchedOutline`)
    //       border: 'none',
    //       '&.Mui-focused': {
    //         border: '2px solid black', // Apply styles directly
    //       },
    //     },
    //   },
    // },
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
          <div style={{ flexGrow: 3, flexBasis: 0}}></div>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 2}}>
          <img src={logo} style={{ height: '40px', cursor: 'pointer' }} alt='LogoYaallo'/>
            <TextField
              sx={{ ml: 2 , backgroundColor: '#d9d9d9', borderRadius: '5%' }}
              size="small"
              placeholder="Search"
              onFocus={() => {
                console.log('Text field focused!'); // Print message to console
              }}
              // InputProps={{
              //   startAdornment: (
              //     <IconButton edge="start" sx={{ color: 'text.primary' }}>
              //       <SearchIcon />
              //     </IconButton>
              //   ),
              // }}
            />
          </Typography>

          {/* Right Components */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 2, boxShadow: 'none' }}>
            <ButtonGroup disableRipple >
              <Button color="secondary" variant='text' sx={{ textTransform: 'none', '&:hover': { backgroundColor: 'transparent'} }}>Home</Button>
              <Button color="secondary" variant='text' sx={{ textTransform: 'none', '&:hover': { backgroundColor: 'transparent'} }}>Massage</Button>
              <Button color="secondary" variant='text' sx={{ textTransform: 'none', '&:hover': { backgroundColor: 'transparent'} }}>Notification</Button>
              <Button color="secondary" variant='text' sx={{ textTransform: 'none', '&:hover': { backgroundColor: 'transparent'} }}>Jobs</Button>
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
                {menuItems.map((item) => (
                  <React.Fragment key={item.title}>
                      <ItemComponent
                        key={item.title}
                        title={item.title}
                        icon={item.icon}
                        disableRipple
                      />
                    <Divider variant="middle" />
                  </React.Fragment>
                ))}
              </Menu>
            </Paper>
          </Box>
          <div style={{ flexGrow: 3, flexBasis: 0}}></div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
