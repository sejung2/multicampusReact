import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import MyThemeProvider from './components/MyThemeProvider.jsx';
import HookThemeButton from './components/HookThemeButton.jsx';

createRoot(document.getElementById('root')).render(
  <MyThemeProvider>
    <HookThemeButton />
  </MyThemeProvider>
);
