import React from 'react';
import { Container } from './TasksColumnsList.styled';
import TasksColumn from '../TasksColumn';

const TasksColumnsList = () => {
    const todoData = [
        { id: '1', task: 'Brainstorm ideas for new content or products', priority: 'low', title: 'to do' },
        { id: '2', task: 'Brainstorm ideas for new content or products', priority: 'high', title: 'to do' },
        { id: '3', task: 'Brainstorm ideas for new content or products', priority: 'medium', title: 'to do' },
        { id: '4', task: 'Brainstorm ideas for new content or products', priority: 'medium', title: 'to do' },
  
  
    ];
    const inprogressData = [
        { id: '1', task: 'Brainstorm ideas for new content or products', priority: 'low', title: 'to do' },
        { id: '2', task: 'Brainstorm ideas for new content or products', priority: 'high', title: 'to do' },
        { id: '3', task: 'Brainstorm ideas for new content or products', priority: 'medium', title: 'to do' },
  
    ];
    const doneData = [
        { id: '1', task: 'Brainstorm ideas for new content or products', priority: 'low', title: 'to do' },
        { id: '2', task: 'Brainstorm ideas for new content or products', priority: 'high', title: 'to do' },
        { id: '3', task: 'Brainstorm ideas for new content or products', priority: 'medium', title: 'to do' },
  
    ];
      
    return (
        <Container>
            {todoData.length > 0 && <TasksColumn category={'To do'} tasks={todoData} />}
            {inprogressData.length > 0 && <TasksColumn category={'In progress'} tasks={inprogressData} />}
            {doneData.length>0 && <TasksColumn category={'Done'} tasks={doneData} />}
        </Container>
    );
};
export default TasksColumnsList;