import { Trans } from 'react-i18next';
import { Button, PlusIcon } from './AddTaskBtn.styled';

const AddTaskBtn = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <PlusIcon />
      <Trans i18nKey="addtask.addtaskbtn">Add task</Trans>
    </Button>
  );
};

export default AddTaskBtn;
