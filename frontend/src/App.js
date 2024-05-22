import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/LoginPage/LoginPage';
import ScriptBoard from './features/Board/ScriptBoard';
import { AuthProvider } from './components/AuthProvider';
import NavBar from './components/NavBar/NavBar';
import ScriptEditor from './features/EditPage/ScriptEditor';

const MainContent = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/scriptboard" element={<ScriptBoard />} />
        <Route path="/edit-script/:id" element={<ScriptEditor />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <MainContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
