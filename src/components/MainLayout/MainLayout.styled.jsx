import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--outlet-background-color);
  position: relative;

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

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-wrap: nowrap;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
