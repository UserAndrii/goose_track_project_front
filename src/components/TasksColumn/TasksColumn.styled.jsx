import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: 335px;
  ${props => props.tasksLength === 0 && `height: 155px;`}
  background-color: var(--main-background-color);
  padding: 18px 14px 10px 14px;
  border: 1px solid var(--outlet-background-color);
  border-radius: 8px;
  margin-left: 14px;

  @media screen and (min-width: 768px) {
    width: 344px;
    padding: 18px 18px 28px 14px;
  }
`;