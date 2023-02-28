import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

   
    if (username === 'rose' && password === 'password123') {
      
      onLogin(username);
    } else {
    
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-form">
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
    </div>
  );
}

export default Login;
