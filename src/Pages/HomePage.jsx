import React, { useState, useEffect } from 'react';
import loadable from '@loadable/component'
import { Box, useMediaQuery } from '@mui/material';
import Collapse from '@mui/material/Collapse';


const NavBar = loadable(() => import('../Components/NavBar'))
const MobileNavBar = loadable(() => import('../Components/MobileNavBar'))
const HomeContent = loadable(() => import('./HomeContent'))
const MobileMenuPage = loadable(()=> import('./MobileMenuPage'))

const HomePage = () => {
  const mobileScreen = useMediaQuery('(max-width: 850px)');
  const [activeSection, setActiveSection] = React.useState('home');

  const handleSectionChange = (newSection) => {
    setActiveSection(newSection);
  };

  return (<>
  <div>
    { !mobileScreen && <NavBar onSectionChange={handleSectionChange}/>}
    { mobileScreen && <MobileNavBar onSectionChange={handleSectionChange}/>}
    {activeSection === 'home' && <HomeContent/>}
    {activeSection === 'mobileMenu' && <MobileMenuPage/> }
  </div>
  </>)
}

export default HomePage;