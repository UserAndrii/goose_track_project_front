import { Container, List } from './ColumnsTasksList.styled';
import TasksColumnCard from 'components/TaskColumnCard';
import { Droppable } from 'react-beautiful-dnd';

const ColumnsTasksList = ({ tasks, columnId }) => {
  if (!tasks) {
    return;
  }
  return (
    <Droppable key={columnId} droppableId={columnId}>
      {provided => (
        <Container
          ref={provided.innerRef}
          {...provided.droppableProps}
          tasksLength={tasks.length}
        >
          <List>
            {tasks.map((item, index) => (
              <li key={item._id}>
                <TasksColumnCard task={item} index={index} />
              </li>
            ))}
            {provided.placeholder}
          </List>
        </Container>
      )}
    </Droppable>
  );
};
export default ColumnsTasksList;
