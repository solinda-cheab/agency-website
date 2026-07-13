import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import SplashScreen from './components/layout/SplashScreen';

export default function App() {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    // Simulating initialization routines (auth/theme)
    const initTimer = setTimeout(() => setAppLoading(false), 1600);
    return () => clearTimeout(initTimer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {appLoading && <SplashScreen key="splash" />}
      </AnimatePresence>
      
      {!appLoading && <AppRoutes />}
    </BrowserRouter>
  );
}