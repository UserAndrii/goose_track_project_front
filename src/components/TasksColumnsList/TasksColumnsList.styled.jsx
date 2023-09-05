import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  margin: 14px 0;

  overflow-x: auto;
  flex: 1;
  overflow-x: scroll;

  @media screen and (max-width: 768px) {
    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--scroll-color);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
      border-radius: 4px;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 16px 0;
  }

  @media screen and (min-width: 768px) {
    margin: 14px 0 0 0;
  }

  & > div {
    display: flex;
    flex: 1;
    gap: 30px;

    @media screen and (min-width: 768px) {
      gap: 16px;
    }

    @media screen and (min-width: 1440px) {
      justify-content: space-between;
    }
  }
`;
