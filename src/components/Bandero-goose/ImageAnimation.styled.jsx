import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
const moveAnimation = keyframes`
0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-20vh); 
  }
`;
const moveAnimation1 = keyframes`
0% {
    transform: translateX(-50vh);
  }
20%{
    transform: translateX(40vh);
}
  100% {
    transform: translateX(70vh); 
  }
`;
const ContainerR = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;
`;
const Img = styled.img`
  width: 120vw;
  height: 100vh;
  position: absolute;
  left: -20;
  animation: ${moveAnimation} 3s linear infinite;
`;
const Img1 = styled.img`
  max-width: 30%;
  max-height: 30vh;
  position: absolute;

  animation: ${moveAnimation1} 3s linear forwards;
`;

export { ContainerR, Img, Img1 };
