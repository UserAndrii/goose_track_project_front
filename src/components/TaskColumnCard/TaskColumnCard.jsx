import {Container,Text, AvatarImage, Board, PriorityBtn,ButtonsContainer} from './TaskColumnCard.styled';
import TaskToolbar from '../TaskToolbar';

const TaskColumnCard = ({ task, priority }) => {
    
    return (
        <Container>
            <Text>{task}</Text>
            <Board>
                <ButtonsContainer>
                <AvatarImage src='https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?w=640' alt="Avatar" />
                <PriorityBtn
                    priority={priority}
                    type="button">
                    {priority}
                    </PriorityBtn>
                </ButtonsContainer>
                 <TaskToolbar />
                </Board>
            
        </Container>
            
   
  );
};

export default TaskColumnCard;
