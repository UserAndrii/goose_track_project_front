import React from 'react';
import { Link } from 'react-router-dom';

const TemporaryNavigation = () => {
  return (
    <div>
      <ul style={navigationListStyle}>
        <li>
          <Link to="/" style={navLinkStyle}>
            MainPage
          </Link>
        </li>
        <li>
          <Link to="/register" style={navLinkStyle}>
            RegisterPage
          </Link>
        </li>
        <li>
          <Link to="/login" style={navLinkStyle}>
            LoginPage
          </Link>
        </li>
        <li>
          <Link to="/account" style={navLinkStyle}>
            AccountPage
          </Link>
        </li>
        <li>
          <Link to="/calendar" style={navLinkStyle}>
            CalendarPage
          </Link>
        </li>
        <li>
          <Link to="/statistics" style={navLinkStyle}>
            StatisticsPage
          </Link>
        </li>
      </ul>
    </div>
  );
};

const navigationListStyle = {
  backgroundColor: '#a1a2a3',
  listStyleType: 'none',
  display: 'flex',
  gap: '20px',
  padding: 10,
  justifyContent: 'center',
};

const navLinkStyle = {
  display: 'inline-block',
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: 'white',
  textDecoration: 'none',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default TemporaryNavigation;
