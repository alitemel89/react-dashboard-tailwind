import React from 'react';
import Dashboard from './scenes/dashboard/Dashboard';
import Sidebar from './scenes/global/Sidebar';

function App() {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
