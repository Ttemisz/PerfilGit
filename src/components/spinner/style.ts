import { keyframes, styled } from "styled-components";

const girar = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerEstilo = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #14b86c;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${girar} 1s linear infinite;
  margin: 20px auto;
`;