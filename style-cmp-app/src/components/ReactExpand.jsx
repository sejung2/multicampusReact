import styled from 'styled-components';
import ReactButton from './ReactButton';

// 일반적인 컴포넌트 상속받아 새로운 스타일 컴포넌트로 확장
// ReactButton의 스타일 상속받고 font-size를 변경
// 아래와 같이 상속 받으면 상속받은 객체는 모두 표현됨
export const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;
