import React from 'react';
import { useDispatch } from 'react-redux';

const Right3 = () => {
  // store에 접근해서 state value인 count 값을 변경하는 기능을 수행(action)
  // action은 dispatch를 통해 store에 전달되어야 함
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => dispatch({ type: 'SUB' })}>-</button> &nbsp; &nbsp;
      <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
    </div>
  );
};

export default Right3;
