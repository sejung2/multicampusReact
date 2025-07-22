import { Button } from '@mui/material';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function HookThemeButton() {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <Button onClick={toggleMode} variant='contained'>
      Mode {mode}
    </Button>
  );
}
