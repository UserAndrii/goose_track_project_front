import AddFeedbackBtn from '../AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler';
import UserInfo from '../UserInfo';
import AddFeedbackModal from '../AddFeedbackModal';

const Header = () => {
  return (
    <>
      <h2>This is Header</h2>
      <AddFeedbackBtn />
      <ThemeToggler />
      <UserInfo />
      <AddFeedbackModal />
    </>
  );
};

export default Header;
