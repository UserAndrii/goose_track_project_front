import { useTranslation, Trans } from 'react-i18next';

import YuriiKlim from '../../images/America_YKlim.png';
import YuriiKag from '../../images/Ant-Man_YKag.webp';
import SergiyS from '../../images/Black_Panter_SS.jpg';
import GalinaK from '../../images/Red_Witch_GK.png';
import AnnaT from '../../images/Captain_Marvel_AT.jpg';
import AndriiK from '../../images/Doctor_Strange_AK.jpg';
import AndriiG from '../../images/Fury_AG.jpg';
import AlexV from '../../images/Hulk_OV.jpg';
import OleksandD from '../../images/Iron_Man_OD.png';
import VolodymrK from '../../images/Spider_Man_VK.jpg';
import IvettaD from '../../images/Gamora_ID.jpg';
import AndriyH from '../../images/Thor_AH.jpg';

import {
  Container,
  Title,
  TitleSpan,
  Button,
  Icon,
  List,
  Item,
  ItemSpan,
  TextSpan,
  ImageWrapper,
  Image,
  ItemIconLinkedin,
  ItemIconGithub,
} from './Team.styled';

const Team = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>
        <TitleSpan>
          <Trans i18nKey="team.o">CALENDAR </Trans>
        </TitleSpan>
        {t('team.urteam')}
      </Title>
      <Button to={'/'}>
        {t('team.back')} <Icon />
      </Button>
      <List>
        <Item key={1}>
          <ImageWrapper>
            <Image src={AndriiG} alt="AndriiG" />
          </ImageWrapper>
          <ItemSpan>
            <TextSpan
              href="https://www.linkedin.com/in/andrii-hadar/"
              target="_blank"
            >
              {t('team.hadar')}
              <ItemIconLinkedin
                href="https://www.linkedin.com/in/andrii-hadar/"
                target="_blank"
              />
            </TextSpan>
            <TextSpan href="https://github.com/UserAndrii" target="_blank">
              {t('team.teamlead')} ({t('team.front')})
              <ItemIconGithub
                href="https://github.com/UserAndrii"
                target="_blank"
              />
            </TextSpan>
          </ItemSpan>
        </Item>
        <Item key={2}>
          <ImageWrapper>
            <Image src={AlexV} alt="AlexV" />
          </ImageWrapper>
          <ItemSpan>
            <TextSpan
              href="https://www.linkedin.com/in/olexander-vainahii-849ba5280/"
              target="_blank"
            >
              {t('team.vaynagiy')}
              <ItemIconLinkedin
                href="https://www.linkedin.com/in/olexander-vainahii-849ba5280/"
                target="_blank"
              />
            </TextSpan>
            <TextSpan href="https://github.com/AlexVainahii" target="_blank">
              {t('team.teamlead')} ({t('team.back1')})
              <ItemIconGithub
                href="https://github.com/AlexVainahii"
                target="_blank"
              />
            </TextSpan>
          </ItemSpan>
        </Item>
        <Item key={3}>
          <ImageWrapper>
            <Image src={AnnaT} alt="AnnaT" />
          </ImageWrapper>
          <ItemSpan>
            <TextSpan
              href="https://www.linkedin.com/in/annatil1/"
              target="_blank"
            >
              {t('team.till')}
              <ItemIconLinkedin
                href="https://www.linkedin.com/in/annatil1/"
                target="_blank"
              />
            </TextSpan>
            <TextSpan href="https://github.com/annatill" target="_blank">
              {t('team.scrum')}
              <ItemIconGithub
                href="https://github.com/annatill"
                target="_blank"
              />
            </TextSpan>
          </ItemSpan>
        </Item>
        <Item key={4}>
          <ImageWrapper>
            <Image src={AndriiK} alt="AndriiK" />
          </ImageWrapper>
          <ItemSpan>
            <TextSpan
              href="https://www.linkedin.com/in/andrew-ketsko/"
              target="_blank"
            >
              {t('team.ketsko')}
              <ItemIconLinkedin
                href="https://www.linkedin.com/in/andrew-ketsko/"
                target="_blank"
              />
            </TextSpan>
            <TextSpan href="https://github.com/AndrewKetsko" target="_blank">
              {t('team.dev')} ({t('team.back1')})
              <ItemIconGithub
                href="https://github.com/AndrewKetsko"
                target="_blank"
              />
            </TextSpan>
          </ItemSpan>
        </Item>
        <Item key={5}>
          <ImageWrapper>
            <Image src={AndriyH} alt="AndriyH" />
          </ImageWrapper>
          <ItemSpan>
            <TextSpan
              href="https://www.linkedin.com/in/andriy-hanzel/"
              target="_blank"
            >
              {t('team.hanzel')}
              <ItemIconLinkedin
                href="https://www.linkedin.com/in/andriy-hanzel/"
                target="_blank"
              />
            </TextSpan>
            <TextSpan href="https://github.com/andriy-h80" target="_blank">
              {t('team.dev')} ({t('team.front')})
              <ItemIconGithub
                href="https://github.com/andriy-h80"
                target="_blank"
              />
            </TextSpan>
          </ItemSpan>
        </Item>
        <Item key={6}>
          <ImageWrapper>
            <Image src={SergiyS} alt="SergiyS" />
          </ImageWrapper>
          <ItemSpan>
            <TextSpan
              href="https://www.linkedin.com/in/siracenco-serghei/"
              target="_blank"
            >
              {t('team.siracenko')}
              <ItemIconLinkedin
                href="https://www.linkedin.com/in/siracenco-serghei/"
                target="_blank"
              />
            </TextSpan>
            <TextSpan
              href="https://github.com/SiracencoSerghei"
              target="_blank"
            >
              {t('team.dev')} ({t('team.front')})
              <ItemIconGithub
                href="https://github.com/SiracencoSerghei"
                target="_blank"
              />
            </TextSpan>
          </ItemSpan>
        </Item>
        <Item key={7}>
          <ImageWrapper>
            <Image src={YuriiKlim} alt="YuriiKlim" />
          </ImageWrapper>
          <ItemSpan>
            <TextSpan
              href="https://www.linkedin.com/in/yurii-klymenko-a5a073280/"
              target="_blank"
            >
              {t('team.klymenko')}
              <ItemIconLinkedin
                href="https://www.linkedin.com/in/yurii-klymenko-a5a073280/"
                target="_blank"
              />
            </TextSpan>
            <TextSpan href="https://github.com/Klimch1k" target="_blank">
              {t('team.dev')} ({t('team.front')})
              <ItemIconGithub
                href="https://github.com/Klimch1k"
                target="_blank"
              />
            </TextSpan>
          </ItemSpan>
        </Item>
        <Item key={8}>
          <ImageWrapper>
            <Image src={YuriiKag} alt="YuriiKag" />
          </ImageWrapper>
          <ItemSpan>
            <TextSpan
              href="https://www.linkedin.com/in/yurii-kahadii-79405a272/"
              target="_blank"
            >
              {t('team.kagadiy')}
              <ItemIconLinkedin
                href="https://www.linkedin.com/in/yurii-kahadii-79405a272/"
                target="_blank"
              />
            </TextSpan>
            <TextSpan href="https://github.com/YurionStyle" target="_blank">
              {t('team.dev')} ({t('team.front')})
              <ItemIconGithub
                href="https://github.com/YurionStyle"
                target="_blank"
              />
            </TextSpan>
          </ItemSpan>
        </Item>
        <Item key={9}>
          <ImageWrapper>
            <Image src={GalinaK} alt="GalinaK" />
          </ImageWrapper>
          <ItemSpan>
            <TextSpan
              href="https://www.linkedin.com/in/halyna-karpinskaya/"
              target="_blank"
            >
              {t('team.karpinska')}
              <ItemIconLinkedin
                href="https://www.linkedin.com/in/halyna-karpinskaya/"
                target="_blank"
              />
            </TextSpan>
            <TextSpan href="https://github.com/GalynkaK" target="_blank">
              {t('team.dev')} ({t('team.front')})
              <ItemIconGithub
                href="https://github.com/GalynkaK"
                target="_blank"
              />
            </TextSpan>
          </ItemSpan>
        </Item>
        <Item key={10}>
          <ImageWrapper>
            <Image src={OleksandD} alt="OleksandD" />
          </ImageWrapper>
          <ItemSpan>
            <TextSpan
              href="https://www.linkedin.com/in/oleksandr-deren/"
              target="_blank"
            >
              {t('team.deren')}
              <ItemIconLinkedin
                href="https://www.linkedin.com/in/oleksandr-deren/"
                target="_blank"
              />
            </TextSpan>
            <TextSpan href="https://github.com/Oderen" target="_blank">
              {t('team.dev')} ({t('team.front')})
              <ItemIconGithub
                href="https://github.com/Oderen"
                target="_blank"
              />
            </TextSpan>
          </ItemSpan>
        </Item>
        <Item key={11}>
          <ImageWrapper>
            <Image src={VolodymrK} alt="VolodymrK" />
          </ImageWrapper>
          <ItemSpan>
            <TextSpan
              href="https://www.linkedin.com/in/vkostenko/"
              target="_blank"
            >
              {t('team.kostenko')}
              <ItemIconLinkedin
                href="https://www.linkedin.com/in/vkostenko/"
                target="_blank"
              />
            </TextSpan>
            <TextSpan href="https://github.com/VolodymyrK2" target="_blank">
              {t('team.dev')} ({t('team.front')})
              <ItemIconGithub
                href="https://github.com/VolodymyrK2"
                target="_blank"
              />
            </TextSpan>
          </ItemSpan>
        </Item>
        <Item key={12}>
          <ImageWrapper>
            <Image src={IvettaD} alt="IvettaD" />
          </ImageWrapper>
          <ItemSpan>
            <TextSpan
              href="https://www.linkedin.com/in/ivettadashkova/"
              target="_blank"
            >
              {t('team.daskova')}
              <ItemIconLinkedin
                href="https://www.linkedin.com/in/ivettadashkova/"
                target="_blank"
              />
            </TextSpan>
            <TextSpan href="" target="_blank">
              {t('team.mentor')}
              <ItemIconGithub href="" target="_blank" />
            </TextSpan>
          </ItemSpan>
        </Item>
      </List>
    </Container>
  );
};

export default Team;
