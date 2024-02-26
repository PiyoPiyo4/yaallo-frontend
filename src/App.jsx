import React from 'react';
import './App.css';
import loadable from '@loadable/component'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './fonts/fonts.css';

const HomePage = loadable(() => import('./Pages/HomePage'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;