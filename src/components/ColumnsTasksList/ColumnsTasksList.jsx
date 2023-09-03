import {Container } from './ColumnsTasksList.styled';
import TasksColumnCard from 'components/TaskColumnCard';
import { Droppable } from 'react-beautiful-dnd';

const ColumnsTasksList = ({tasks,columnId}) => {
    if (!tasks) {
        return ;
}
    return (
         <Droppable droppableId={columnId}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    tasksLength={tasks.length}
                >
                    {tasks.map((item, index) => (
                        <li key={item._id}>
                            <TasksColumnCard
                                task={item}
                                index={index}
                            />
                        </li>
                    ))}
                    {provided.placeholder}
                </Container>
            )}
                </Droppable>
 )   
}
export default ColumnsTasksList;