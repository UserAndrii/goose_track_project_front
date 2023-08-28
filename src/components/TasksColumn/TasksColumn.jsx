import React from 'react';
import { Container } from './TasksColumn.styled';
import ColumnHeadBar from '../ColumnHeadBar';
import AddTaskBtn from '../AddTaskBtn';
import ColumnsTasksList from '../ColumnsTasksList';


const TasksColumn = ({ category, tasks }) => {
  
 
    return (
      <Container>
         <ColumnHeadBar
                category={category}
            />
        <ColumnsTasksList
          tasks={tasks} />
            <AddTaskBtn/>
    </Container>
  );
};

export default TasksColumn;