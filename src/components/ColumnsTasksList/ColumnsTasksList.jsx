import {Container } from './ColumnsTasksList.styled';
import TasksColumnCard from 'components/TaskColumnCard';

const ColumnsTasksList = ({tasks}) => {
    if (!tasks) {
        return ;
}
    return (
        <Container>
            {tasks.map((item) => (
                <li key={item._id}>
                <TasksColumnCard
                   task={item}
                />
                    </li>  
            ) )}
       
        </Container>
 )   
}
export default ColumnsTasksList;