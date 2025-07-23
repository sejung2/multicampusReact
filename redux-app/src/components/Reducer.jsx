import React from 'react';

const Reducer = (currentState, action) => {
  //currentState가 정의되지 않은 경우 기본 state값 반환
  if (currentState === undefined) {
    return { count: 0 };
  }

  //각 state의 불변성 유지하기 위해 state 복제해서 사용
  const newState = { ...currentState }; // ... 을 사용하여 currentState를 복제

  // state값 변경
  if (action.type === 'ADD') {
    newState.count += 1; // count 값을 1 증가
  }

  if (action.type === 'SUB') {
    newState.count -= 1; // count 값을 1 감소
  }

  // 변화시킨 값을 반환
  return newState;
};

export default Reducer;
