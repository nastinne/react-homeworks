import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setError('');
      alert('Login successful!');
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = '/';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <Header />
      <div className="login-page-wrapper">
        <div className="login-container">
          <h2>Log in</h2>
          <form onSubmit={handleLogin}>
            {error && <div className="error">{error}</div>}
            <label htmlFor="username">User name</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="buttons">
              <button type="submit" className="submit">
                Submit
              </button>
              <button
                type="button"
                className="cancel"
                onClick={() => {
                  setUsername('');
                  setPassword('');
                  setError('');
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
