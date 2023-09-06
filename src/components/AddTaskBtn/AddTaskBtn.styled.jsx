import styled from '@emotion/styled';
import { IoAdd } from "react-icons/io5";

export const Button = styled.button`
  width: 299px;
  height: 48px;
  margin-right: 12px;

  background-color: var(--background-button-day-add);
  color: var(--title-text-main-color);
  border: 1px dashed;

  border-radius: 8px;
  border-color: var(--accent-background-color);

  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14;
  line-height: calc(18 / 14);
  font-weight: 600;

  @media screen and (min-width: 768px) {
    width: 304px;
    height: 52px;
    margin-right: 13px;
  }
`;
export const PlusIcon = styled(IoAdd)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  color: inherit;
`;  