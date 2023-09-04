import { Trans } from 'react-i18next';
import { Button } from './AddFeedbackBtn.styled';

const AddFeedbackBtn = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Trans i18nKey="feedback.feedbackbtn">Feedback</Trans>
    </Button>
  );
};

export default AddFeedbackBtn;
