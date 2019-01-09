import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    trasform: rotate(0deg);
  }

  to {
    trasform: rotate(360deg);
  }
`;

export const Spinner = styled.img`
  animation: ${rotate360} 2s linear infinite;
`;
