import gooseM from '../../images/GOOSE_2_M.png';

import {
    Container,
    ImageWrapper,
    Image,
    Text,
    TextSpan,
    List,
    Button,
    ButtonText,
    ItemIcon,
    ItemText,
  } from './AuthSection.styled';

const AuthSection = () => {
    return (
        <Container>
            <ImageWrapper>
                <Image src={gooseM} alt="Goose"/>
            </ImageWrapper>
            <Text>
                G<TextSpan>oo</TextSpan>seTrack
            </Text>
            <List>
                    <Button>
                        <ButtonText>
                            Log in
                        </ButtonText>
                        <ItemIcon />
                    </Button>
                    <ItemText>
                        Sign up
                    </ItemText>
            </List>
        </Container>
    );
  };
  
export default AuthSection;
