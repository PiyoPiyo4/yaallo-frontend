import React, { useState, useEffect } from 'react';
// import loadable from '@loadable/component'
// import { useMediaQuery } from '@mui/material';
import Paper from '@mui/material/Paper';
import {Collapse} from '@mui/material';
import ads from '../assets/yaallo_ads.jpeg'

const icon = (
  <Paper sx={{ width: '100%', height: '100%' }} elevation={4}>
    <img src={ads} style={{ height: '100%' , width: '100%'}} alt='ads'/>
  </Paper>
);

const HomeContent = () => {

  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsCollapsed(true), 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
  <div>
    <Collapse in={isCollapsed} timeout={3000} easing="easeInOut">
        {icon}
      </Collapse>
  </div>
  )
}

export default HomeContent;