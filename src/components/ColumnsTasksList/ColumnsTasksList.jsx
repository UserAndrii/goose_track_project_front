import {Container } from './ColumnsTasksList.styled';
import TasksColumnCard from 'components/TaskColumnCard';

const ColumnsTasksList = ({tasks}) => {

    return (
        <Container>
            {tasks.map((item) => (
                <TasksColumnCard
                key={item.id}
                task={item.task}
                priority={item.priority} />
            ) )}
       
        </Container>
 )   
}
export default ColumnsTasksList;