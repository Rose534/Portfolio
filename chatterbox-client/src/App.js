import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
    setActivePage('home');
  };

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      {username && <Navigation onNavClick={handleNavClick} />}
      {username ? (
        <>
          {activePage === 'home' && <Home username={username} />}
          {activePage === 'portfolio' && <Portfolio />}
          {activePage === 'skills' && <Skills />}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
