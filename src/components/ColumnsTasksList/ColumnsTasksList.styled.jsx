import styled from '@emotion/styled';

export const Container = styled.ul`
&::-webkit-scrollbar {
        width: 8px; /* ширина треку */
    }

    /* Стилізація "ползунка" (бару) */
    &::-webkit-scrollbar-thumb {
        background-color: #E7E5E5; /* колір ползунка */
        border-radius: 4px;        /* закруглені кути */
    }

    /* Стилізація треку поза "ползунком" */
    &::-webkit-scrollbar-track {
        background-color: #f1f1f1; /* колір треку */
        border-radius: 4px;    /* закруглені кути */
    }
height:55vh; 
overflow-y: auto; 
align-items: center;
margin-bottom:32px;
`;