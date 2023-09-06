import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: var(--auth-background-color);
  text-align: center;
  width: 100%;

  @media screen and (max-width: 767px) {
    padding-top: 28px;
    padding-bottom: 28px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const Text = styled.h3`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--accent-color);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.14;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  @media screen and (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    line-height: 1.187;
  }
`;

export const TextSpan = styled.span`
  color: var(--accent-color);
  font-size: 16px;
  line-height: 1.14;
  margin-bottom: 5px;

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    font-size: 18px;
    line-height: 1.187;
  }
`;

export const Button = styled(Link)`
  color: var(--accent-color);
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  text-decoration: underline;
  transition: font-size 0.3s;

  :hover {
    color: var(--active-btn-color);
    text-decoration-line: none;
    font-size: 105%;
  }
`;
