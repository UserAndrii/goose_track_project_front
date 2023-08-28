import { Button, PlusIcon } from './AddTaskBtn.styled';

const AddTaskBtn = ({ id }) => {
    return (
    <Button>
      <PlusIcon />
      Add task
    </Button>
  );
};

export default AddTaskBtn;