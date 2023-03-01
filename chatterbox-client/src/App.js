import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
  };

  return (
    <div>
      
      {username ? (
        <Home username={username} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
