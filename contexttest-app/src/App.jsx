import { createContext, useContext } from 'react';
import './style.css';

//적용할 css 테마로 구성 - context 생성
const themeDefault = { border: '10px solid blue' };
const themeContext = createContext(themeDefault); // Context 생성, 전역으로 사용 가능

export default function App() {
  const theme = useContext(themeContext);

  return (
    <div className='root' style={theme}>
      <h1>Hello</h1>
      <Sub1></Sub1>
    </div>
  );
}

function Sub1() {
  const theme = useContext(themeContext);
  return (
    <themeContext.Provider value={{ border: '10px solid green' }}>
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2></Sub2>
      </div>
    </themeContext.Provider>
  );
}
function Sub2() {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3></Sub3>
    </div>
  );
}
function Sub3() {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}
