import React from 'react';
import loadable from '@loadable/component'
import useMediaQuery from '@mui/material/useMediaQuery';
// import '../fonts/fonts.css';
// import './styles/MainPageCSS.css'

const TopNavBar = loadable(() => import('../Components/NavBar'))
const BotNavBar = loadable(() => import('../Components/MobileNavBar'))

const HomePage = () => {
  const mobileScreen = useMediaQuery('(max-width: 850px)');

  return (<>
  <div>
    { !mobileScreen && <TopNavBar/>}
    { mobileScreen && <BotNavBar/>}
  </div>
  </>)
}

export default HomePage;