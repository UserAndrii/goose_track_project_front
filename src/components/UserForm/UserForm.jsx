import { useState } from 'react';
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

const UserForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [newUserName, setNewUserName] = useState('');
  const [newBirthday, setNewBirthday] = useState(new Date());
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newSkype, setNewSkype] = useState('');

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  if (!user.userName) {
    return;
  }

  const firstName = user?.userName?.split(' ')[0];
  const firstLetter = firstName[0]?.toUpperCase();

  const handleSubmit = event => {
    event.preventDefault();

    const updatedUser = {
      userName: newUserName || user.userName,
      birthDay: newBirthday,
      email: newEmail || user.email,
      phone: newPhone || user.phone,
      skype: newSkype || user.skype,
    };

    dispatch(updateUser(updatedUser));
  };

  return (
    <ContainerWrapper>
      <Container>
        <ImageContainer>
          {user.avatarURL ? (
            <Image src={user.avatarURL} alt={user.userName} />
          ) : (
            <Letter>{firstLetter}</Letter>
          )}
          <IconContainer />
        </ImageContainer>

        <UserName>{user.userName}</UserName>
        <Text>User</Text>
        <Forma onSubmit={handleSubmit}>
          <div>
            <label>
              <p>User Name</p>
              <input
                type="text"
                name="username"
                placeholder={user.userName}
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
                    name="birthday"
                    placeholder={user.birthDay}
                    value={newBirthday}
                    onChange={e => setNewBirthday(e.target.value)}
                  />
                }
              />
            </label>
            <label>
              <p>Email</p>
              <input
                type="text"
                name="email"
                placeholder={user.email}
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
                placeholder={user.phone ? user.phone : '(000) 000-0000'}
                value={newPhone}
                onChange={e => setNewPhone(e.target.value)}
              />
            </label>
            <label>
              <p>Skype</p>
              <input
                type="text"
                name="skype"
                placeholder={user.skype ? user.skype : 'Add a skype number'}
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
