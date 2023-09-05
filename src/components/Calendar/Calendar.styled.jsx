import styled from '@emotion/styled';

const Calendar = styled.div`
display: flex;
flex-direction: column;
flex:1;
width: 100%;
height: 100%;
  padding: 0px 20px 52px 20px;

  @media screen and (min-width: 768px) {
    padding: 0px 32px 42px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 32px 32px 32px;
  }
`;

export { Calendar };
