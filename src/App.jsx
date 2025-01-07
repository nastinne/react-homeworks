import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import MenuPage from './components/MenuPage/MenuPage';

const App = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

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
      </Routes>
    </Router>
  );
};

export default App;
