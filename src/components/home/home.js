import React from 'react';
import Navbar from '../../Navbar.js';
import '../home/home.css';

function App() {
  return (
    <div>
      <Navbar />
      <section className='background'>
        <div className='content'>
          <h2>Figma to Code Ch2</h2>
          <h1>Forget About Code</h1>
          <p>Leverage AI to automate tasks, gain insights, and streamline processes. Focus on creativity while AI handles complexities, boosting efficiency and unlocking new potential.</p>
          <a href='/'>Get Started</a>
        </div>
      </section>
    </div>

  );
}

export default App;
