import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { IoMdInformationCircleOutline, IoMdHelpCircleOutline } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

// import { IoMdInformationCircleOutline, GoShieldCheck, IoSettingsOutline, MdOutlineMail, IoMdHelpCircleOutline, FiPhoneCall } from 'react-icons/all';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom'; // Import for navigation

const menuItems = [
  { title: 'About Yaallo', icon: <IoMdInformationCircleOutline size="30px" /> },
  { title: 'Data Privacy', icon: <GoShieldCheck size="30px" /> },
  { title: 'Settings', icon: <IoSettingsOutline size="30px" /> },
  { title: 'Help Center', icon: <MdOutlineMail size="30px" /> },
  { title: 'FAQs', icon: <IoMdHelpCircleOutline size="30px" /> },
  { title: 'Contact Us', icon: <FiPhoneCall size="30px" /> },
];

const ItemComponent = ({ title, icon, clickHandler }) => {
  return (
    <MenuItem onClick={clickHandler}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '25%',
              backgroundColor: '#f8ce4e',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 'none',
            }}>
          {icon}
        </div>
        <Typography variant="body1" sx={{ ml: 2 }}>
          {title}
        </Typography>
      </Box>
    </MenuItem>
  );
};

function MobileMenuPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // const handleMenuItemClick = (title) => {
  //   // Handle navigation or action based on title
  //   const pathToNavigate = `/menu/${title.toLowerCase()}`; // Dynamically construct path
  //   if (location.pathname !== pathToNavigate) {
  //     navigate(pathToNavigate); // Navigate only if different path
  //   }
  // };

  return (
    <div>
      {/* Other page content, if any */}
      <Box sx={{ mx: 2, my: 4 }}>
        {menuItems.map((item) => (
          <React.Fragment key={item.title}>
              <ItemComponent
                key={item.title}
                title={item.title}
                icon={item.icon}
                disableRipple
                // clickHandler={() => handleMenuItemClick(item.title)} // Pass handler
              />
            <Divider variant="middle" />
          </React.Fragment>
        ))}
      </Box>
    </div>
  );
}

export default MobileMenuPage;