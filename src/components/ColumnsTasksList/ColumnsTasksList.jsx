import {Container } from './ColumnsTasksList.styled';
import TasksColumnCard from 'components/TaskColumnCard';

const ColumnsTasksList = ({tasks}) => {

    return (
        <Container>
            {tasks.map((item) => (
                <li key={item.id}>
                <TasksColumnCard
                   task={item}
                />
                    </li>  
            ) )}
       
        </Container>
 )   
}
export default ColumnsTasksList;