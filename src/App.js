import React, { useEffect } from 'react';
import Dashboard from './scenes/dashboard/Dashboard';
import Sidebar from './scenes/global/Sidebar';
import useThemeStore, { applyThemePreference } from './stores/useThemeStore';

function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const timer = setTimeout(() => {
      applyThemePreference(theme);
    }, 500)
    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <div className='flex'>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
