import { useSelector } from 'react-redux';
import { Wrapper, Name, Avatar, Letter } from './UserInfo.styled';

const user = {
  name: 'Nadiia Doe',
  avatar: '',
};

const UserInfo = () => {
  // const user = useSelector(state => state.auth.user);
  const { name, avatar } = user;

  const firstName = name.split(' ')[0];
  const firstLetter = firstName[0].toUpperCase();

  return (
    <Wrapper>
      <Name>Nadiia</Name>
      <Avatar>
        {avatar ? (
          <img src={avatar} alt={name} />
        ) : (
          <Letter>{firstLetter}</Letter>
        )}
      </Avatar>
    </Wrapper>
  );
};

export default UserInfo;
