import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import MenuPage from './components/MenuPage/MenuPage';

const App: React.FC = () => {
  // Safely parse localStorage value
  const loggedInUser = (() => {
    try {
      const storedUser = localStorage.getItem('loggedInUser');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Error parsing loggedInUser from localStorage:', error);
      return null;
    }
  })();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={loggedInUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/menu"
          element={loggedInUser ? <MenuPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;




