import { useState, useEffect, useRef } from 'react';
import {
  ContainerWrapper,
  Container,
  InputWrapper,
  UserName,
  Image,
  ImageContainer,
  IconContainer,
  Text,
  Forma,
  Letter,
  Button,
  CustomInput,
} from './UserForm.styled';

// import uk from 'date-fns/locale/uk';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { updateUser } from 'redux/auth/operations';
import { format, parse } from 'date-fns';

const UserForm = () => {
  const { userName, email, phone, skype, birthDay, avatarURL } =
    useSelector(selectUser);

  const [startDate, setStartDate] = useState(
    birthDay === '' ? new Date() : parse(birthDay, 'dd/MM/yyyy', new Date())
  );
  const [newUserName, setNewUserName] = useState(userName ?? '');
  const [newEmail, setNewEmail] = useState(email ?? '');
  const [newPhone, setNewPhone] = useState(phone ?? '');
  const [newSkype, setNewSkype] = useState(skype ?? '');
  const [newAvatar, setAvatar] = useState(avatarURL ?? '');
  const [avatarPreviewUrl, setAvatarPreviewUrl] = useState('');

  const dispatch = useDispatch();
  const avatarInputRef = useRef(null);

  let someChanges =
    userName !== newUserName ||
    email !== newEmail ||
    phone !== newPhone ||
    skype !== newSkype ||
    birthDay !== format(startDate, 'dd/MM/yyyy') ||
    avatarPreviewUrl !== '';

  useEffect(() => {
    return () => {
      if (avatarPreviewUrl) {
        URL.revokeObjectURL(avatarPreviewUrl);
      }
    };
  }, [avatarPreviewUrl]);

  const firstName = userName?.split(' ')[0];
  const firstLetter = firstName[0]?.toUpperCase();

  const handleIconContainerClick = () => {
    if (avatarInputRef.current) {
      avatarInputRef.current.click();
    }
  };

  const handleIconOnClick = e => {
    const file = e.target.files[0];
    setAvatar(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreviewUrl(previewUrl);
    } else {
      setAvatarPreviewUrl(avatarURL);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (!someChanges) return;
    const formData = new FormData();
    if (userName !== newUserName) {
      formData.append('userName', newUserName);
    }
    if (email !== newEmail) {
      formData.append('email', newEmail);
    }
    if (phone !== newPhone) {
      formData.append('phone', newPhone);
    }
    if (skype !== newSkype) {
      formData.append('skype', newSkype);
    }
    if (birthDay !== format(startDate, 'dd/MM/yyyy')) {
      formData.append('birthDay', format(startDate, 'dd/MM/yyyy'));
    }
    if (avatarPreviewUrl !== '') {
      formData.append('avatar', newAvatar);
    }
    dispatch(updateUser(formData));
  };

  return (
    <ContainerWrapper>
      <Container>
        <Forma onSubmit={handleSubmit}>
          <ImageContainer>
            {avatarPreviewUrl ? (
              <Image src={avatarPreviewUrl} alt={userName} />
            ) : avatarURL ? (
              <Image src={avatarURL} alt={userName} />
            ) : (
              <Letter>{firstLetter}</Letter>
            )}
            <IconContainer onClick={handleIconContainerClick} />
            <input
              type="file"
              accept="image/*"
              ref={avatarInputRef}
              onChange={handleIconOnClick}
              style={{ display: 'none' }}
              name="avatar"
            />
          </ImageContainer>
          <UserName>{userName}</UserName>
          <Text>User</Text>
          <InputWrapper>
            <div>
              <label>
                <p>User Name</p>
                <input
                  type="text"
                  name="userName"
                  placeholder="Add a username"
                  value={newUserName}
                  onChange={e => setNewUserName(e.target.value)}
                />
              </label>
              <label>
                <p>Birthday</p>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  calendarStartDay={1}
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  customInput={
                    <CustomInput
                      type="text"
                      name="birthDay"
                      placeholder="Add a birthday"
                      value={startDate.toString()}
                    />
                  }
                />
              </label>
              <label>
                <p>Email</p>
                <input
                  type="text"
                  name="email"
                  placeholder="Add an email"
                  value={newEmail}
                  onChange={e => setNewEmail(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                <p>Phone</p>
                <input
                  type="text"
                  name="phone"
                  placeholder="Add a phone number"
                  value={newPhone}
                  onChange={e => setNewPhone(e.target.value)}
                />
              </label>
              <label>
                <p>Skype</p>
                <input
                  type="text"
                  name="skype"
                  placeholder="Add a skype number"
                  value={newSkype}
                  onChange={e => setNewSkype(e.target.value)}
                />
              </label>
            </div>
            <Button type="submit" disabled={!someChanges}>
              Save changes
            </Button>
          </InputWrapper>
        </Forma>
      </Container>
    </ContainerWrapper>
  );
};

export default UserForm;
