import { useSelector } from 'react-redux';
import { Wrapper, Name, Avatar, Letter } from './UserInfo.styled';
import { selectUser } from 'redux/auth/selectors';

const UserInfo = () => {
  const { userName, avatarURL } = useSelector(selectUser);

  if (!userName) {
    return;
  }

  const firstName = userName.split(' ')[0];
  const firstLetter = firstName[0]?.toUpperCase();

  return (
    <Wrapper>
      <Name>{firstName}</Name>
      <Avatar>
        {avatarURL ? (
          <img src={avatarURL} alt={userName} />
        ) : (
          <Letter>{firstLetter}</Letter>
        )}
      </Avatar>
    </Wrapper>
  );
};

export default UserInfo;
