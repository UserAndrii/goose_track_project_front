import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  background-color: #3e85f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;

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
  margin-top: 14px;
  margin-bottom: 10px;
  color: #ffffff;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.25;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 15px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const Button = styled(Link)`
  background: #ffffff;
  color: #3e85f3;
  display: flex;
  border: none;
  border-radius: 14px;
  padding: 2px 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.29;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    padding: 5px 15px;
    margin-bottom: 0;
    font-size: 20px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 35px;
  margin-bottom: 60px;
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
  background: #e3f3ff;
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
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.29;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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
  color: #ffffff;
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
  color: #ffffff;
  margin-left: 5px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
