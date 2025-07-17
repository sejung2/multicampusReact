import { React, useState } from 'react';

const Message = () => {
  const [message, setMessage] = useState('출력 메세지'); //mesesage값 변화 상태 관리, 값 변화시 리렌더링
  const [color, setColor] = useState('black');

  const onClickEnter = () => {
    setMessage('안녕하세요');
  };
  const onClickExit = () => {
    setMessage('안녕히 가세요');
  };
  const onClickInit = () => {
    setMessage('출력메세지');
  };

  return (
    <div>
      <h3>{message}</h3>
      <p />
      {/* onClickEnter 함수를 onClick 이벤트의 콜백함수로 전달 */}
      <button onClick={onClickEnter}>입장</button> &nbsp;
      <button onClick={onClickExit}>퇴장</button> &nbsp;
      <button onClick={onClickInit}>시작</button> &nbsp;
      <hr />
      <h3 style={{ color: color }}>{color}</h3>
      {/* 이벤트 콜백함수 화살표함수로 만들어 직접 연결 */}
      <button onClick={() => setColor('red')}>빨강</button> &nbsp;
      <button onClick={() => setColor('blue')}>파랑</button> &nbsp;
      <button onClick={() => setColor('green')}>초록</button> &nbsp;
    </div>
  );
};

export default Message;
