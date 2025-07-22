import './style.css';
import { HookContextChild } from './components/HookContextChild';
import { CreateContext } from 'react';

//context 초기화
export const MyAppContext = CreateContext();

// context에서 전달할 객체 준비
const config = {
  title: 'React 프로젝트',
  lang: 'ko-kr',
};

export default function MainApp() {
  return (
    <MyAppContext.Provider value={config}>
      <div id='c_main'>
        <HookContextChild />
      </div>
    </MyAppContext.Provider>
  );
}
