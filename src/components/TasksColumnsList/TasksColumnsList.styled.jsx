import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  margin-top: 16px;
  overflow-x: auto;
  margin-left: -14px;
  @media screen and (min-width: 768px) {
   margin-left: -16px;
  };
  @media screen and (min-width: 1440px){
   margin-left: -27px;
 }
`;
