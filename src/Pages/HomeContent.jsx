import React, { useState, useEffect } from 'react';
// import loadable from '@loadable/component'
import { useMediaQuery } from '@mui/material';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import ads from '../assets/yaallo_ads.jpeg'

const icon = (
  <Paper sx={{ width: '100%', height: '100%' }} elevation={4}>
    {/* Your ad or photo content here */}
    <img src={ads} style={{ height: '100%' , width: '100%'}} alt='ads'/>
  </Paper>
);

const HomeContent = () => {

  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsCollapsed(true), 2000); // Delay by 5 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  return (<>
    <Collapse in={isCollapsed} sx={{ position: 'absolute', width: '100%', timeout: '90000ms' }}>
        {icon}
    </Collapse>
  </>)
}

export default HomeContent;