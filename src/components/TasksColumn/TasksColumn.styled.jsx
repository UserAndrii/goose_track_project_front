import styled from '@emotion/styled';

export const Container = styled.div`
min-width: 335px;
${props => props.tasksLength === 0 && `height: 155px;`}
background-color: #fff;
padding: 18px 14px 10px 14px;
border: 1px solid #F7F6F9;
border-radius: 8px;
margin-left: 14px;

@media screen and (min-width: 768px) {
    width: 344px;
    padding: 18px 18px 28px 14px;
  }
`