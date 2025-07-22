import { useState } from 'react';
import './App.css';
import Left1 from './components/Left1';
import Right1 from './components/Right1';

function App() {
  const [count, setCount] = useState(0);

  //+버튼 이벤트 처리함수
  const onCountAdd = () => setCount(count + 1);
  //-버튼 이벤트 처리함수
  const onCountSub = () => setCount(count > 0 ? count - 1 : 0);
  return (
    <div className='App'>
      <h3>Root</h3>
      <div id='container'>
        <Left1 count={count}></Left1>
        <Right1 onCountAdd={onCountAdd} onCountSub={onCountSub}></Right1>
      </div>
    </div>
  );
}

export default App;
