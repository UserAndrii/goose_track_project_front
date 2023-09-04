import { useTranslation, Trans } from 'react-i18next';
import { Container, TextSpan, Text, Button } from './Footer.styled';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <TextSpan>
        &copy; 2023 | <Trans i18nKey="footer.rights">CALENDAR </Trans>
        |&nbsp;
      </TextSpan>
      <Text>
        {t('footer.develop')}
        <Button to="/team">{t('footer.avengers')}</Button>
      </Text>
    </Container>
  );
};

export default Footer;
