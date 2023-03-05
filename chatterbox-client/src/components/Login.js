import React, { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (username) => {
    setLoggedIn(true);
    console.log(`${username} logged in`);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <p>You are logged in.</p>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('username', username); // save username to local storage
    localStorage.setItem('password', password); // save password to local storage

    onLogin(username); // call onLogin with the entered username
  };

  // check if there are saved login credentials in the local storage
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    // if there are saved credentials, try to log in with them automatically
    if (username === '' && password === '') {
      setUsername(savedUsername);
      setPassword(savedPassword);
      onLogin(savedUsername);
    }
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Login;