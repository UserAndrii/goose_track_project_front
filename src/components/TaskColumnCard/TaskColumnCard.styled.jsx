import styled from '@emotion/styled';

export const Container = styled.div`
${'' /* height: 112px; */}
padding: 14px;
background-color: #F7F6F9;
border-radius: 8px;
border: 1px solid #DCE3E5CC;
margin-bottom: 18px;
`;
export const Text = styled.div`
font-size: 14px;
line-height: calc(18/14);
font-weight: 500;
font-family: 'Inter', sans-serif;
color: #111111;
overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  margin-bottom: 32px;
`;
export const Board = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
`
export const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  border: 1.8px solid #3E85F3;
  border-radius: 32px;
`;
const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return '#EA3D65';
    case 'Medium':
      return '#F3B249';
    case 'Low':
      return '#72C2F8';
    default:
      return 'gray';
  }
};

export const PriorityBtn = styled.button`
cursor: pointer;
height: 20px;
border: none;
font-family: inherit;
padding-left: 12px;
padding-right: 12px;
margin-left: 8px;
border-radius:4px;
color: #F7F6F9;
background-color: ${({ priority }) => getPriorityColor(priority)};
font-size: 10px;
line-height:calc(12/10);
font-weight:600;
::first-letter {
    text-transform: capitalize;
  }
`;
export const ButtonsContainer = styled.div`
display:flex;
align-items: flex-end;
`