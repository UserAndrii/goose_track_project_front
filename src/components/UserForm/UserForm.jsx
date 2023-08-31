import {
  ContainerWrapper,
  Container,
  UserName,
  Image,
  ImageContainer,
  IconContainer,
  Text,
  Forma,
  Letter,
  Button,
} from './UserForm.styled';

import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const UserForm = () => {
  const user = useSelector(selectUser);

  const firstName = user.userName.split(' ')[0];
  const firstLetter = firstName[0]?.toUpperCase();

  return (
    <ContainerWrapper>
      <Container>
        <ImageContainer>
          {user.avatarURL ? (
            <Image src={user.avatarURL} alt={user.userName} />
          ) : (
            <Letter>{firstLetter}</Letter>
          )}
        </ImageContainer>
        <IconContainer />

        <UserName>{user.userName}</UserName>
        <Text>User</Text>
        <Forma>
          <label>
            <p>User Name</p>
            <input type="text" name="username" placeholder={user.userName} />
          </label>
          <label>
            <p>Birthday</p>
            <input type="text" name="birthday" placeholder={user.birthDay} />
          </label>
          <label>
            <p>Email</p>
            <input type="text" name="email" placeholder={user.email} />
          </label>
          <label>
            <p>Phone</p>
            <input
              type="text"
              name="phone"
              placeholder={user.phone ? user.phone : '38 (000) 000 00 00'}
            />
          </label>
          <label>
            <p>Skype</p>
            <input
              type="text"
              name="skype"
              placeholder={user.skype ? user.skype : 'Add a skype number'}
            />
          </label>
        </Forma>
        <Button type="submit">Save changes</Button>
      </Container>
    </ContainerWrapper>
  );
};

export default UserForm;
