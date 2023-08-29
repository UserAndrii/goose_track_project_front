import React from 'react';
import { LinkTo } from './AuthNavigate.styled';

const AuthNavigate = ({ forgotPasswordText, alreadyRegisteredText, forgotPasswordLink, alreadyRegisteredLink }) => {
  return (
    <div>
      <div>
        {forgotPasswordText}
        <LinkTo to={forgotPasswordLink}> {forgotPasswordText}</LinkTo>
      </div>
      <div>
        {alreadyRegisteredText}
        <LinkTo to={alreadyRegisteredLink}> {alreadyRegisteredText}</LinkTo>
      </div>
    </div>
  );
};

export default AuthNavigate;