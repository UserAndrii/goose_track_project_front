import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 47px;
  padding-right: 47px;
  margin: 0 auto;
  width: 100%;
  background-color: #F7F6F9; 
  text-align: center;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    padding-left: 132px;
    padding-right: 132px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 261px;
    padding-right: 261px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 469px;
    padding-right: 469px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const Picture = styled.picture`
  margin: 0 -30px;

  @media screen and (min-width: 768px) {
    margin: 0 -60px;
  }
`;

export const Number = styled.span`
  color: #3E85F3; 
  font-size: 100px;
  font-family: "InterBold";
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 1.25;
  }
`;

export const Text = styled.p`
  margin: 0 auto;
  color: #111111B2;
  font-size: 14px;
  line-height: 1.29;
  font-family: "InterMedium";
  font-weight: 500;
  max-width: 281px;

  @media screen and (min-width: 768px) {
    max-width: 387px;
  }
`;

export const Link = styled(Link)`
  color: #FFFFFF;
  text-decoration-line: underline;
  transition: ;

  :hover,
  :focus {
    color: #E5EDFA; // !! ПЕРЕВіРИТИ 
  }
`;

export const StyledButton = styled(Button)`
  background-color: #3E85F3;
  color: #FFFFFF;
  padding: 14px 32px;
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  margin-top: 24px;
  font-family: 'Inter, sans-serif';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.286;
  text-transform: none;

  &:hover, &:focus {
    background-color:  #21222C;  // !! ПЕРЕВіРИТИ 
  }

  @media screen and (min-width: 768px) {
    padding: 16px 48px;
    font-size: 18px;
    line-height: 1.333;
    margin-top: 32px;
  }
`;