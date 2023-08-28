import styled from '@emotion/styled';
import { FiPlusCircle } from "react-icons/fi";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 28px;
`;
export const Title = styled.h2`
color:#111111;
font-size: 20;
line-height: 1.2;
font-weight: 700;
`;
export const PlusBtn = styled(FiPlusCircle)`
 width: 24px;
  height: 24px;
  color: #111111;
  cursor: pointer;
  transition: color 0.2s;
   &:hover {
    color: #3E85F3;
  }
  `;
