import React from 'react';
import { useSelector } from 'react-redux';

const Left3 = () => {
  // store에 접근해서 state value인 count 값을 출력
  // useSelector 훅을 사용하여 store의 state를 구독
  // 아래 코드가 최초 실행되는 시점은 currentState가 undefined인 경우, reducer의 if문이 실행되어 기본 state값이 반환되는 시점
  const count = useSelector((state) => state.count);
  return (
    <div>
      <h3>Left3</h3>
      count: {count}
    </div>
  );
};

export default Left3;
