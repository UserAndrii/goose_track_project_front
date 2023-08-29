import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #f7f6f9;
  position: relative;
  overflow: hidden;
  height: 100vh;

  @media screen and (min-width: 375px) {
    width: 375px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 100;
  backdrop-filter: blur(4px);
`;

export const Main = styled.main`
  flex: 1;
`;
