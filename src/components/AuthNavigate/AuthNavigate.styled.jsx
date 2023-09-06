import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Text = styled.p`
  color: var(--title-text-main-color);
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.15;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const LinkTo = styled(Link)`
  color: var(--accent-background-color);
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.15;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
