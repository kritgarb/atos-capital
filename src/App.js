// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';// Importe suas páginas aqui
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
