import React from 'react';
import LoginPage from './features/LoginPage/LoginPage';
import { AuthProvider } from './components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <LoginPage />
      </div>
    </AuthProvider>
  );
}

export default App;
