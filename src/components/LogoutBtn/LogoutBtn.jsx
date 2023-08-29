import { Button, Icon } from './LogoutBtn.styled.jsx';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  return (
    <Button type="button" onClick={() => dispatch(logOut())}>
      Log out
      <Icon />
    </Button>
  );
};

export default LogoutBtn;
