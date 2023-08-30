import React from 'react';
import { Container } from './TasksColumnsList.styled';
import TasksColumn from '../TasksColumn';
import { useSelector } from 'react-redux';

import { selectTasksByUser } from '../../FakeBackend/selectors';
// import { useGetMonthlyTasksQuery } from 'redux/tasks/tasksApi';

const TasksColumnsList = () => {
  //   console.log('currentDay', currentDay);

  //   const {
  //     data: { data: tasks },
  //   } = useGetMonthlyTasksQuery(
  //     { date: currentDay },
  //     { skip: currentDay === '' }
  //   );

  const tasks = useSelector(selectTasksByUser);
  const todoData = tasks.filter(task => task.Category === 'To do');
  const inprogressData = tasks.filter(task => task.Category === 'In progress');
  const doneData = tasks.filter(task => task.Category === 'Done');
  return (
    <Container>
      {todoData.length > 0 && (
        <TasksColumn category={'To do'} tasks={todoData} />
      )}
      {inprogressData.length > 0 && (
        <TasksColumn category={'In progress'} tasks={inprogressData} />
      )}
      {doneData.length > 0 && (
        <TasksColumn category={'Done'} tasks={doneData} />
      )}
    </Container>
  );
};
export default TasksColumnsList;
