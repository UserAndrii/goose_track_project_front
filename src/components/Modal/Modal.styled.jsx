import styled from 'styled-components';

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
  height: 349px;
  width: 468px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  position: relative;
  z-index: 1100;

  @media (max-width: 767px) { /* Телефоны */
    width: 85%;
    padding: 10px;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
  svg {
    width: 24px;
    height: 24px;
    stroke: black;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
`;