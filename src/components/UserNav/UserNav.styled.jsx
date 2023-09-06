import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { LuUserCheck, LuCalendarCheck2 } from 'react-icons/lu';
import { BsBarChart } from 'react-icons/bs';

export const Container = styled.div`
  margin-top: 64px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 32px;
  }
`;

export const Text = styled.p`
  color: var(--feedback-form-text);
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 32px;
  }
`;

export const LinkNav = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  width: 100%;
  height: 100%;
  color: var(--feedback-form-text-input);
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;


  @media screen and (min-width: 768px) {
    font-size: 16px;
    adding: 16px 20px
  }
`;

export const IconUser = styled(LuUserCheck)`
  width: 20px;
  height: 20px;
  font-size: 24px;
  margin-right: 8px;
  color: ${props =>
    props.isactive ? 'rgb(56, 114, 240)' : "var(--feedback-form-text)"};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

export const IconCalendar = styled(LuCalendarCheck2)`
  width: 20px;
  height: 20px;
  font-size: 24px;
  margin-right: 8px;
  color: ${props =>
    props.isactive ? 'rgb(56, 114, 240)' : 'var(--feedback-form-text)'};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

export const IconStatistics = styled(BsBarChart)`
  width: 20px;
  height: 20px;
  font-size: 24px;
  margin-right: 8px;
  color: ${props =>
    props.isactive ? 'rgb(56, 114, 240)' : "var(--feedback-form-text)"};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

export const List = styled.ul`
  display: grid;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const ListItem = styled.li`
  width: 185px;
  height: 40px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 225px;
    height: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 241px;
  }

  &:hover {
    background-color: var(--auth-background-color);
  }
  &:hover .icon,
  &:hover .text {
    color: var(--active-btn-color);
  }
  &.active {
    background-color: var(--auth-background-color);
  }

  &.active .icon,
  &.active .text {
    color: var(--active-btn-color);
  }
`;
