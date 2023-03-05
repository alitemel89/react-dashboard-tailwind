import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Dashboard from './scenes/dashboard/Dashboard';
import Sidebar from './scenes/global/Sidebar';
import useThemeStore, { applyThemePreference } from './stores/useThemeStore';

function App() {
  const theme = useThemeStore((state) => state.theme);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      applyThemePreference(theme);
    }, 500)
    return () => clearTimeout(timer);
  }, [theme]);

  return (

    <div className='flex'>
      <Sidebar />
      {location.pathname === "/" ? <Dashboard /> : <Outlet />}
    </div>
  );
}

export default App;
