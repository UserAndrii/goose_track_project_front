import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';

export const Container = styled.div`
  background-color: var(--accent-background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 40px 0;

  @media screen and (max-width: 767px) {
    min-width: 375px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Title = styled.h2`
  color: var(--btn-text-color);
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 28px;
  font-weight: 700;
  line-height: 1.09;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    font-size: 60px;
    line-height: 1.3;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 100px;
    line-height: 1.25;
    margin-bottom: 50px;
  }
`;

export const TitleSpan = styled.span`
  color: var(--btn-text-color);
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.09;

  @media screen and (min-width: 768px) {
    font-size: 60px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    font-size: 100px;
    line-height: 1.25;
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.28px;
  cursor: pointer;

  background: var(--main-background-color);
  color: var(--accent-color);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  width: auto;
  padding: 14px 28px;
  margin-top: auto;
  border: none;
  border-radius: 16px;

  :hover {
    color: var(--active-btn-color);
    box-shadow: 4px 2px 16px 0px rgba(255, 255, 255, 0.48);
  }

  @media screen and (min-width: 768px) {
    padding: 16px 23px;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }
`;

export const Icon = styled(LuLogOut)`
  width: 18px;
  height: 18px;
  vertical-align: middle;
  color: inherit;
  margin-left: 6px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin-left: 11px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 35px;
  /* margin-bottom: 60px; */
  gap: 30px;
  width: 100%;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 15px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: block;
  width: 150px;
  height: 150px;
  border-radius: 40px;
  background: var(--outlet-background-color);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-width: 200px;
    min-height: 200px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
`;

export const ItemSpan = styled.div`
  display: grid;
  gap: 5px;
`;

export const TextSpan = styled.a`
  display: flex;
  flex-direction: row;
  color: var(--btn-text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.29;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: font-size 0.3s;

  &:hover {
    text-decoration: underline;
    font-size: 130%
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: auto;
  }
`;

export const ItemIconLinkedin = styled(FaLinkedinIn)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: var(--btn-text-color);
  margin-left: 5px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const ItemIconGithub = styled(FaGithub)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: var(--btn-text-color);
  margin-left: 5px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
