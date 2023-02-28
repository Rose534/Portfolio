import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    // Set the username in the state
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
