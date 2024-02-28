import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import {Collapse, useMediaQuery } from '@mui/material';
import ads from '../assets/yaallo_ads.jpeg'
import loadable from '@loadable/component'

const DesktopContent = loadable(()=> import('./DesktopContent'))
const MobileContent = loadable(()=> import('./MobileContent'))
const icon = (
  <Paper sx={{ width: '100%', height: '100%' }} elevation={4}>
    <img src={ads} style={{ height: '100%' , width: '100%'}} alt='ads'/>
  </Paper>
);

const HomeContent = () => {
  const mobileScreen = useMediaQuery('(max-width: 850px)');

  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsCollapsed(true), 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
  <div style={{ backgroundColor: '#d9d9d9'}}>
    <Collapse in={isCollapsed} timeout={3000} easing="easeInOut">
      {icon}
    </Collapse>
    {!mobileScreen && <DesktopContent />}
    {mobileScreen && <MobileContent />}
  </div>
  )
}

export default HomeContent;