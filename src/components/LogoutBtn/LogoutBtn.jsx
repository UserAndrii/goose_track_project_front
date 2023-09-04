import { Trans } from 'react-i18next';
import { Button, Icon } from './LogoutBtn.styled.jsx';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      onClick={() => {
        dispatch(logOut());
        document.body.style.overflow = 'auto';
      }}
    >
      <Trans i18nKey="authSection.logout">Log out</Trans>
      <Icon />
    </Button>
  );
};

export default LogoutBtn;
