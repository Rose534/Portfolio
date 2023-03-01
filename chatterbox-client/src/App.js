import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
  };

  return (
    <div>
      <Navigation/>
      {username ? (
        <Home username={username} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
