import { useState, useEffect, useRef } from 'react';
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
  CustomInput,
} from './UserForm.styled';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/auth/operations';
import { format, parse } from 'date-fns';

const UserForm = () => {
  const user = useSelector(selectUser);

  const [startDate, setStartDate] = useState(
    parse(user.birthDay, 'dd/MM/yyyy', new Date()) ?? new Date()
  );

  const [newUserName, setNewUserName] = useState(user.userName ?? '');
  const [newEmail, setNewEmail] = useState(user.email ?? '');
  const [newPhone, setNewPhone] = useState(user.phone ?? '');
  const [newSkype, setNewSkype] = useState(user.skype ?? '');
  const [avatarURL, setAvatar] = useState(user.avatarURL ?? '');
  const [avatarPreviewUrl, setAvatarPreviewUrl] = useState('');

  const dispatch = useDispatch();
  const avatarInputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (avatarPreviewUrl) {
        URL.revokeObjectURL(avatarPreviewUrl);
      }
    };
  }, [avatarPreviewUrl]);

  if (!user.userName) {
    return;
  }

  const firstName = user?.userName?.split(' ')[0];
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
      setAvatarPreviewUrl(user.avatarURL);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('birthDay', format(startDate, 'dd/MM/yyyy'));
    console.log(avatarURL);

    dispatch(updateUser(formData));
  };

  return (
    <ContainerWrapper>
      <Container>
        <Forma onSubmit={handleSubmit}>
          <ImageContainer>
            {avatarPreviewUrl ? (
              <Image src={avatarPreviewUrl} alt={user.userName} />
            ) : user.avatarURL ? (
              <Image src={user.avatarURL} alt={user.userName} />
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

          <UserName>{user.userName}</UserName>
          <Text>User</Text>
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
                selected={startDate}
                onChange={date => setStartDate(date)}
                customInput={
                  <CustomInput
                    type="text"
                    name="birthDay"
                    placeholder="Add a birthday"
                    value={startDate.toString()}
                    // onChange={e => setStartDate(e.target.value)}
                  />
                }
              />
              {/* <DatePicker
                selected={startDate}
                onChange={event => setStartDate(event)}
                customInput={<input type="text" placeholder="aaaa" />}
              /> */}
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
          <Button type="submit">Save changes</Button>
        </Forma>
      </Container>
    </ContainerWrapper>
  );
};

export default UserForm;
