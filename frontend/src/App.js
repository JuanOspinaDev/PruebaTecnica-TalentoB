import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/LoginPage/LoginPage';
import HomePage from './features/Home/HomePage'; 
import { AuthProvider } from './components/AuthProvider';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          
            <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
