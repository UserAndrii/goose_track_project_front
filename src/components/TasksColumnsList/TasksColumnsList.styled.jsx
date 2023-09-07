import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  margin: 14px 0;
  flex: 1;

  @media screen and (max-width: 1439px) {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--scroll-color);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--sidebar-background-color);
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
