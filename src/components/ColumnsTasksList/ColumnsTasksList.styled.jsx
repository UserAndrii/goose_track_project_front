import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 100%;
  max-height: 300px;

  &::-webkit-scrollbar {
    width: 8px; /* ширина треку */
  }

  /* Стилізація "ползунка" (бару) */
  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-color); /* колір ползунка */
    border-radius: 4px; /* закруглені кути */
  }

  /* Стилізація треку поза "ползунком" */
  &::-webkit-scrollbar-track {
    background-color: var(--sidebar-background-color); /* колір треку */
    border-radius: 4px; /* закруглені кути */
  }

  overflow-y: scroll;
  margin-bottom: 10px;

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
