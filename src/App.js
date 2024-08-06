import React, { Fragment } from 'react';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home'
import AuthForm from './components/auth/authForm'
import Navbar from './Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route exact path={'/login'} element={<AuthForm />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
