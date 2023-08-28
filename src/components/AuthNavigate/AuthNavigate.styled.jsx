import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LinkTo = styled(Link)`
  color: #3e85f3;
  font-size: 16px;
  line-height: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;