import { useParams } from 'react-router-dom';
import { Text, Container, StyledButton } from './VerifyEmail.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getVerifyEmailUser } from 'redux/auth/operations';

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { verifyToken } = useParams();

  console.log(verifyToken);

  useEffect(() => {
    dispatch(getVerifyEmailUser(verifyToken));
  }, [dispatch, verifyToken]);

  return (
    <Container>
      <Text>Your email has been successfully verified! Thank you!</Text>
      <StyledButton to="/">Back to home</StyledButton>
    </Container>
  );
};

export default VerifyEmail;
