import React from 'react';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home'
import AuthForm from './components/auth/authForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route exact path={'/form'} element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
