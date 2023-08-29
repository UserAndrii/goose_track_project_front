import styled from '@emotion/styled';
import { IoAdd } from "react-icons/io5";

export const Button = styled.button`
  ${'' /* position: fixed; */}
  width: 100%;
  background-color: #E3F3FF;
  color: #111111;
  border: 1px dashed;
    ${'' /* border-width: 1px; */}
  border-radius: 8px;
  border-color: #3E85F3;

  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14;
  line-height: calc(18/14);
  font-weight: 600;
  `
export const PlusIcon = styled(IoAdd)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  color: #111111;
`  