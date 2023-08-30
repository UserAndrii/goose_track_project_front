import styled from '@emotion/styled';
import { AiFillPlusCircle } from 'react-icons/ai';

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  padding: 59px 18px 40px 18px;
  background-color: #ffffff;
  border-radius: 16px;
  text-align: center;
  position: relative;
  margin: 0 auto;
  margin-bottom: 40px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 299px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 40px 175px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    padding: 60px 165px;
  }
`;

export const UserName = styled.h1`
  color: #343434;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;

export const ImageContainer = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  position: absolute;
  top: -31px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 18px;
  border: 1px solid rgb(47, 103, 228);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
    position: relative;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 60px;
  }
`;

export const IconContainer = styled(AiFillPlusCircle)`
  position: absolute;
  right: 80px;
  top: 20px;
  background-color: #ffffff;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: rgb(47, 103, 228);
  border: none;
  cursor: pointer;
  @media screen and (min-width: 375px) and (max-width: 767px) {
    right: 115px;
    top: 20px;
  }

  @media screen and (min-width: 768px) {
    right: 310px;
    top: 155px;
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 1440px) {
    right: 495px;
    top: 190px;
  }
`;

export const Text = styled.p`
  color: #343434;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Letter = styled.p`
  color: #3e85f3;
  font-weight: 700;
  font-size: 33px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > label {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-bottom: 18px;
    &:last-of-type {
      margin-bottom: 40px;
    }

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }

  & > label > input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    padding: 12px 14px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: #343434;
    outline: none;

    &::placeholder {
      color: #242725;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      width: 271px;
    }

    @media screen and (min-width: 768px) {
      width: 354px;
    }
  }

  & > label > p {
    color: #111111;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
  }
`;

export const Button = styled.button`
  max-width: 195px;
  height: 46px;
  border-radius: 16px;
  background: #3e85f3;
  border: none;
  padding: 14px 50px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    background-color: #3cbc81;
  }
  &:disabled {
    background-color: #e0e0e0;
    cursor: default;
  }

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
    padding: 10px 20px;
  }
`;
