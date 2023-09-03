import styled from '@emotion/styled';

export const Container = styled.ul`
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
    background-color: #f1f1f1; /* колір треку */
    border-radius: 4px; /* закруглені кути */
  }
 margin-bottom: 32px;
  height: 55vh;
   ${props => props.tasksLength === 0 && `height: 0;`}
   ${props => props.tasksLength === 0 && `margin-bottom: 10`}
  overflow-y: auto;
  align-items: center;
  
`;