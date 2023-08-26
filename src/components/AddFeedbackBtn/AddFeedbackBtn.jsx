import { Button } from './AddFeedbackBtn.styled';

<<<<<<< Updated upstream
const AddFeedbackBtn = ({ onClick }) => {
  return <Button onClick={onClick}>Feedback</Button>;
=======
const AddFeedbackBtn = ({ isModalOpen = false}) => {
  return<div>
<Button onClick={isModalOpen=true}>Feedback</Button>
{isModalOpen  && <div>qqq</div>}
  </div> 
>>>>>>> Stashed changes
};

export default AddFeedbackBtn;
