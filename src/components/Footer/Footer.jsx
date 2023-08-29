import { useLocation } from 'react-router-dom';

import {
    Container,
    TextSpan,
    Text,
    Button,
  } from './Footer.styled';

const Footer = () => {
    const location = useLocation();

    return (
        <Container>
            <TextSpan>
                &copy; 2023 | All Rights Reserved |&nbsp;
            </TextSpan>
            <Text>
                Developed by
            <Button to='team' state={{ from: location }}>
                Agence Digitale
            </Button>
            </Text>
        </Container>
    );
};

export default Footer;
