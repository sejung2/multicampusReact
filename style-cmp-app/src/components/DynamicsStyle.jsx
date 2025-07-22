import styled from 'styled-components';

export const PrimaryButton = styled.button`
  color: ${(props) => (props.primary ? 'red' : 'black')};

  background-color: ${(props) => (props.primary ? 'red' : 'gray')};
`;
