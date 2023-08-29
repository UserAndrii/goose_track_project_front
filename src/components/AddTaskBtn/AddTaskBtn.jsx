import { Button, PlusIcon } from './AddTaskBtn.styled';

const AddTaskBtn = ({ onClick }) => {
    return (
    <Button onClick={onClick}>
      <PlusIcon />
      Add task
    </Button>
  );
};

export default AddTaskBtn;