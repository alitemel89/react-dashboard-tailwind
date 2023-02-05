import React from 'react';
import Dashboard from './scenes/dashboard/Dashboard';
import Sidebar from './scenes/global/Sidebar';

function App() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
