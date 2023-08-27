import {Container } from './ColumnsTasksList.styled';
import TasksColumnCard from 'components/TaskColumnCard';

const ColumnsTasksList = () => {
    const data = [
  { id: '1', task: 'Brainstorm ideas for new content or products', priority: 'low', title: 'to do' },
  { id: '2', task: 'Brainstorm ideas for new content or products', priority: 'high', title: 'to do' },
  { id: '3', task: 'Brainstorm ideas for new content or products', priority: 'medium', title: 'to do' },
  
];
    return (
        <Container>
            <ul>
                {data.map((item) => (
                          <TasksColumnCard
                            key={item.id}
                            task={item.task}
                            priority={item.priority} />
                   
               ) )}
        </ul>
        </Container>
 )   
}
export default ColumnsTasksList;