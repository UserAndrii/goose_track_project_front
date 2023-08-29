import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1057px;
  height: 752px;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 375px) {
    width: 100%;
    height: auto;
    margin: 0;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    width: 335px;
    height: 684px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 704px;
    height: 854px;
  }
`;
