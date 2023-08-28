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
  color: rgba(52, 52, 52, 0.5);
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
  color: rgba(52, 52, 52, 0.5);
  font-size: 14px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const IconUser = styled(LuUserCheck)`
  width: 20px;
  height: 20px;
  font-size: 24px;
  margin-right: 8px;
  color: ${props =>
    props.isactive ? 'rgb(56, 114, 240)' : 'rgba(52, 52, 52, 0.5)'};

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
    props.isactive ? 'rgb(56, 114, 240)' : 'rgba(52, 52, 52, 0.5)'};

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
    props.isactive ? 'rgb(56, 114, 240)' : 'rgba(52, 52, 52, 0.5)'};

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
  padding: 10px 20px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 16px 20px;
  }

  &:hover {
    background-color: rgb(221, 240, 255);
  }
  &:hover .icon,
  &:hover .text {
    color: rgb(56, 114, 240);
  }
  &.active {
    background-color: rgb(221, 240, 255);
  }

  &.active .icon,
  &.active .text {
    color: rgb(56, 114, 240);
  }
`;
