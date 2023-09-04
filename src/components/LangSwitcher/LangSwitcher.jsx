import i18next from 'i18next';
import { Button, Container } from './LangSwitcher.styled';

const lngs = {
  en: { nativeName: 'EN' },
  ua: { nativeName: 'UA' },
};

const LangSwitcher = () => {
  return (
    <Container>
      {Object.keys(lngs).map(lng => (
        <Button
          key={lng}
          style={{
            fontWeight: i18next.resolvedLanguage === lng ? 'bold' : 'normal',
          }}
          type="submit"
          onClick={() => i18next.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </Button>
      ))}
    </Container>
  );
};

export default LangSwitcher;
