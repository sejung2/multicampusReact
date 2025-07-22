import { createContext } from 'react';

export const ThemeContext = createContext({
  mode: 'light', // 현재 모드
  toggleMode: () => {}, // 모드 전환 함수
});
