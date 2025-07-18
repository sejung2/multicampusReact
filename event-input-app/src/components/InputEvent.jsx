import { useState } from 'react';

export default function InputEvent() {
  const [title, setTitle] = useState('지금 우리 학교는');
  const [inputValue, setInputValue] = useState('');

  //글자 입력 입력 시 이벤트 처리 함수
  //입력되고 있는 값으로 inputValue 값 변경
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <hr />
      <h2>{title}</h2>
      {/* input 태그에 값 입력하면 onChange 이벤트 발생
          입력된 값 : event.target.value 
      */}
      <input type='text' value={inputValue} onChange={onInputChange} /> &nbsp;
      <button onClick={() => setTitle(inputValue)}>변경</button>
    </div>
  );
}
