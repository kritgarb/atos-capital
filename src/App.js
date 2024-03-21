import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Register from './pages/Register/Register'; 

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/register" element={<Register />} />
        <Route index element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
