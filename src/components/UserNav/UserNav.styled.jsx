import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { LuUserCheck, LuCalendarCheck2 } from 'react-icons/lu';
import { BsBarChart } from 'react-icons/bs';

export const Container = styled.div`
  margin-top: 64px;
`;

export const Text = styled.p`
  color: rgba(52, 52, 52, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const LinkNav = styled(Link)`
  text-decoration: none;
  color: rgba(52, 52, 52, 0.5);
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
`;

export const IconUser = styled(LuUserCheck)`
  font-size: 24px;
  color: ${props =>
    props.isActive ? 'rgb(56, 114, 240)' : 'rgba(52, 52, 52, 0.5)'};
`;

export const IconCalendar = styled(LuCalendarCheck2)`
  font-size: 24px;
  color: ${props =>
    props.isActive ? 'rgb(56, 114, 240)' : 'rgba(52, 52, 52, 0.5)'};
`;

export const IconStatistics = styled(BsBarChart)`
  font-size: 24px;
  color: ${props =>
    props.isActive ? 'rgb(56, 114, 240)' : 'rgba(52, 52, 52, 0.5)'};
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 16px;
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
