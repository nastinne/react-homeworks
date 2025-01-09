import React, { useState, FormEvent } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './LoginPage.css';

interface User {
  username: string;
  password: string;
}

interface HeaderProps {
  itemCount: number;
}

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const [itemCount] = useState<number>(0); 


  const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
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

  
  const clearForm = (): void => {
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <>
      <Header itemCount={itemCount} /> 
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
                onClick={clearForm} 
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

