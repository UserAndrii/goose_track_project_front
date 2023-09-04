import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import {
  Container,
  List,
  Item,
  ItemSpan,
  Number,
  Title,
  SubTitle,
  TextSpan,
  ImageWrapper,
  Image,
} from './Description.styled';
// import LangSwitcher from 'components/LangSwitcher/LangSwitcher';

const Description = () => {
  const { t } = useTranslation();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [pixelRatio, setPixelRatio] = useState(window.devicePixelRatio || 1);
  const isRetina = pixelRatio > 1;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setPixelRatio(window.devicePixelRatio || 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let imageIndex = 0;
  if (screenWidth >= 1440) {
    imageIndex = 2;
  } else if (screenWidth >= 768) {
    imageIndex = 1;
  } else if (screenWidth <= 375) {
    imageIndex = 0;
  }

  if (isRetina) {
    imageIndex = imageIndex + 3;
  }

  const calendarPaths = [
    require('../../images/mobile-calendar.jpg'),
    require('../../images/tablet-calendar.jpg'),
    require('../../images/desktop-calendar.jpg'),
    require('../../images/mobile-calendar@2x.jpg'),
    require('../../images/tablet-calendar@2x.jpg'),
    require('../../images/desktop-calendar@2x.jpg'),
  ];

  const sidebarPaths = [
    require('../../images/mobile-sidebar.jpg'),
    require('../../images/tablet-sidebar.jpg'),
    require('../../images/desktop-sidebar.jpg'),
    require('../../images/mobile-sidebar@2x.jpg'),
    require('../../images/tablet-sidebar@2x.jpg'),
    require('../../images/desktop-sidebar@2x.jpg'),
  ];

  const allPaths = [
    require('../../images/mobile-all.jpg'),
    require('../../images/tablet-all.jpg'),
    require('../../images/desktop-all.jpg'),
    require('../../images/mobile-all@2x.jpg'),
    require('../../images/tablet-all@2x.jpg'),
    require('../../images/desktop-all@2x.jpg'),
  ];

  const selectedCalendarPath = calendarPaths[imageIndex];
  const selectedSidebarPath = sidebarPaths[imageIndex];
  const selectedAllPath = allPaths[imageIndex];

  return (
    <Container>
      <List>
        <Item key={1}>
          <ItemSpan>
            <Number>1.</Number>
            <div>
              <Title>
                <SubTitle>
                  <Trans i18nKey="description.calendar">CALENDAR </Trans>
                </SubTitle>
                {t('description.view')}
              </Title>
            </div>
            <TextSpan>{t('description.calendarText')}</TextSpan>
          </ItemSpan>
          <ImageWrapper>
            <Image src={selectedCalendarPath} alt="Calendar" />
          </ImageWrapper>
        </Item>
        <Item key={2}>
          <ItemSpan className="reverse">
            <Number>2.</Number>
            <div>
              <Title> {t('description.sidebar')}</Title>
            </div>
            <TextSpan>{t('description.sidebarText')}</TextSpan>
          </ItemSpan>
          <ImageWrapper>
            <Image src={selectedSidebarPath} alt="Sidebar" />
          </ImageWrapper>
        </Item>
        <Item key={3}>
          <ItemSpan>
            <Number>3.</Number>
            <div>
              <Title>
                <SubTitle>{t('description.allIn')}</SubTitle>
                {t('description.one')}
              </Title>
            </div>
            <TextSpan>{t('description.allInText')}</TextSpan>
          </ItemSpan>
          <ImageWrapper>
            <Image src={selectedAllPath} alt="All" />
          </ImageWrapper>
        </Item>
      </List>
    </Container>
  );
};

export default Description;
