import {
  Container,
  Text,
  Avatar,
  Board,
  PriorityBtn,
  ButtonsContainer,
  Letter,
} from './TaskColumnCard.styled';
import TaskToolbar from '../TaskToolbar';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const TaskColumnCard = ({ task }) => {
  const { userName, avatarURL } = useSelector(selectUser);
    const firstName = userName.split(' ')[0];
    const firstLetter = firstName[0]?.toUpperCase();

  return (
    <Container>
      <Text>{task.title}</Text>
      <Board>
        <ButtonsContainer>
          <Avatar>
            {avatarURL ? (
              <img src={avatarURL} alt={userName} />
            ) : (
              <Letter>{firstLetter}</Letter>
            )}
          </Avatar>
          <PriorityBtn priority={task.priority} type="button">
            {task.priority}
          </PriorityBtn>
        </ButtonsContainer>
        <TaskToolbar task={task} />
      </Board>
    </Container>
  );
};

export default TaskColumnCard;
