import { useTranslation, Trans } from 'react-i18next';
import UserNav from '../UserNav';
import LogoutBtn from '../LogoutBtn';
import {
  Container,
  Wrapper,
  Menu,
  CloseBtn,
  Image,
  Text,
  Span,
  LangSwitcherWrapper,
} from './SideBar.styled';

import { useEffect, useState } from 'react';
import LangSwitcher from 'components/LangSwitcher/LangSwitcher';

const SideBar = ({ closeSidebar, sidebarVisible }) => {
  const { t } = useTranslation();

  const screenWidth = window.innerWidth;
  const pixelRatio = window.devicePixelRatio || 1;
  const isRetina = pixelRatio > 1;

  let imageIndex = 0;
  if (screenWidth <= 375) {
    imageIndex = 0;
  } else if (screenWidth >= 768) {
    imageIndex = 1;
  } else if (screenWidth >= 1440) {
    imageIndex = 2;
  }

  if (isRetina) {
    imageIndex = imageIndex + 3;
  }

  const imagePaths = [
    require('../../images/GOOSE-mobile.png'),
    require('../../images/GOOSE-tablet.png'),
    require('../../images/GOOSE-desktop.png'),
    require('../../images/GOOSE-mobile@2x.png'),
    require('../../images/GOOSE-tablet@2x.png'),
    require('../../images/GOOSE-desktop@2x.png'),
  ];

  const selectedImagePath = imagePaths[imageIndex];

  const [containerStyle, setContainerStyle] = useState({
    transform: `translateX(${sidebarVisible ? '0' : '-225px'})`,
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newTransformValue = '';

      if (windowWidth < 768) {
        newTransformValue = sidebarVisible ? '0' : '-225px';
      } else if (windowWidth >= 768 && windowWidth <= 1439) {
        newTransformValue = sidebarVisible ? '0' : '-300px';
      } else if (windowWidth >= 1440) {
        newTransformValue = sidebarVisible ? '0' : '0';
      }

      setContainerStyle({
        transform: `translateX(${newTransformValue})`,
      });
    };

    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarVisible]);

  return (
    <Container style={containerStyle}>
      <Wrapper>
        <Menu>
          <Image src={selectedImagePath} alt="Goose Track" />
          <Text>
            <Trans i18nKey="authSection.g">G</Trans>
            <Span>{t('authSection.oo')}</Span>
            {t('authSection.setrack')}
          </Text>
          <CloseBtn onClick={closeSidebar} />
        </Menu>
        
          <LangSwitcherWrapper>
            <LangSwitcher />
          </LangSwitcherWrapper>

        <UserNav closeSidebar={closeSidebar} />
        <LogoutBtn />
      </Wrapper>
    </Container>
  );
};

export default SideBar;
