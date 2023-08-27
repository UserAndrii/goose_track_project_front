import UserNav from '../UserNav';
import LogoutBtn from '../LogoutBtn';
import {
  Container,
  Container2,
  Menu,
  CloseBtn,
  Image,
  Text,
  Span,
} from './SideBar.styled';

const SideBar = ({ closeSidebar, sidebarVisible }) => {
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
  const containerStyle = {
    transform: `translateX(${sidebarVisible ? '0' : '-225px'})`,
  };

  return (
    <Container style={containerStyle}>
      <Menu>
        <Image src={selectedImagePath} alt="Goose Track" />
        <Text>
          G<Span>oo</Span>seTrack
        </Text>
        <CloseBtn onClick={closeSidebar} />
      </Menu>
      <Container2>
        <UserNav />
        <LogoutBtn />
      </Container2>
    </Container>
  );
};

export default SideBar;