import styled from '@emotion/styled';

export const Container = styled.div`
  width: 335px;
  max-height: 432px;
  background-color: var(--main-background-color);
  padding: 18px 6px 10px 16px;
  border: 1px solid var(--outlet-background-color);
  border-radius: 8px;
  

  @media screen and (min-width: 768px) {
    width: 344px;
    max-height: 568px;
    padding: 18px 10px 28px 14px;
  }
`;
