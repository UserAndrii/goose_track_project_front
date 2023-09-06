import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 100%;
  max-height: 300px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-color);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--sidebar-background-color);
    border-radius: 4px;
  }

  overflow-y: scroll;
  margin-bottom: 10px;
  ${props => (props.tasksLength === 0 && 'height: 1px')};

  @media screen and (min-width: 768px) {
    margin-bottom: ${props => (props.tasksLength > 0 ? '32px' : 0)};
    max-height: 376px;
  }

  @media screen and (max-height: 820px) and (min-width: 1440px) {
    max-height: 303px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;
