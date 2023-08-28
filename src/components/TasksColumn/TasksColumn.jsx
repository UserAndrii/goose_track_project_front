import { Container } from './TasksColumn.styled';
import ColumnHeadBar from '../ColumnHeadBar';
import AddTaskBtn from '../AddTaskBtn';
import ColumnsTasksList from 'components/ColumnsTasksList';


const TasksColumn = () => {
   
    return (
    <Container>
            <ColumnHeadBar
                title={'To do'}
               
            />
            <ColumnsTasksList/>
            <AddTaskBtn/>
    </Container>
  );
};

export default TasksColumn;