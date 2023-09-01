import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(2px);
  align-items: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 28px 20px;
  position: relative;
  z-index: 1100;
  overflow: hidden;

  @media screen and (max-width: 374px) {
    max-width: 335px;
    min-height: 290px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    min-width: 335px;
    min-height: 290px;
  }

  @media screen and (min-width: 767px) {
    padding: 32px;
    min-width: 468px;
    min-height: 300px;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
  padding: 0;
  svg {
    width: 24px;
    height: 24px;
    stroke: black;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  @media (min-width: 767px) {
    top: 18px;
    right: 18px;
  }
`;
