import { Container, TextSpan, Text, Button } from './Footer.styled';

const Footer = () => {
  return (
    <Container>
      <TextSpan>&copy; 2023 | All Rights Reserved |&nbsp;</TextSpan>
      <Text>
        Developed by
        <Button to="/team">Agence Digitale</Button>
      </Text>
    </Container>
  );
};

export default Footer;
