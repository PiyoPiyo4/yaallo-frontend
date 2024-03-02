import React from 'react';
import './App.css';
import loadable from '@loadable/component'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './fonts/fonts.css';

const HomePage = loadable(() => import('./Pages/HomePage'))
const LoginPage = loadable(() => import('./Pages/LoginPage'))
const SignUpUserPage = loadable(() => import('./Pages/SignUpUserPage'))
const SignUpBrandPage = loadable(() => import('./Pages/SignUpBrandPage'))
const SignUpPage = loadable(() => import('./Pages/SignUpPage'))
const ForgotPasswordPage1 = loadable(() => import('./Pages/ForgotPasswordPage1'))
const ForgotPasswordPage2 = loadable(() => import('./Pages/ForgotPasswordPage2'))
const ForgotPasswordPage3 = loadable(() => import('./Pages/ForgotPasswordPage3'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/forgot-password' element={<ForgotPasswordPage1/>}/>
          <Route path='/forgot-password/otp' element={<ForgotPasswordPage2/>}/>
          <Route path='/forgot-password/reset' element={<ForgotPasswordPage3/>}/>
          <Route path='/signup-user' element={<SignUpUserPage/>}/>
          <Route path='/signup-brand' element={<SignUpBrandPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;