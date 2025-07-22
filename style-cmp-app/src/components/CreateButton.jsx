import styled from 'styled-components';

export const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;

// SimpleButton을 상속받아서 SimpleButton css 적용(button 객체도 포함해서 상속)
export const LarggeButton = styled(SimpleButton)`
  font-size: 50px;
`;
