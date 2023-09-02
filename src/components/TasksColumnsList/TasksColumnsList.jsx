import React from // useEffect,
// useState
'react';
import { Container } from './TasksColumnsList.styled';
import TasksColumn from '../TasksColumn';
// import { useSelector } from 'react-redux';

// import { selectTasksByUser } from '../../FakeBackend/selectors';
import { useGetMonthlyTasksQuery } from 'redux/tasks/tasksApi';
// import { all } from 'axios';

const TasksColumnsList = () => {
  //   console.log('currentDay', currentDay);

  //   const {
  //     data: { data: tasks },
  //   } = useGetMonthlyTasksQuery(
  //     { date: currentDay },
  //     { skip: currentDay === '' }
  //   );

  const { data } = useGetMonthlyTasksQuery('2023-08');
  const tasks = data?.data;

  // if (tasks) {
  const todoData = tasks.filter(
    task => task.category.replace(/\s+/g, '').toLowerCase() === 'todo'
  );
  const inprogressData = tasks.filter(
    task => task.category.replace(/\s+/g, '').toLowerCase() === 'inprogress'
  );
  const doneData = tasks.filter(
    task => task.category.replace(/\s+/g, '').toLowerCase() === 'done'
  );
  // }

  return (
    <Container>
      {todoData.length > 0 && (
        <TasksColumn key={1} category={'To do'} tasks={todoData} />
      )}
      {inprogressData.length > 0 && (
        <TasksColumn key={2} category={'In progress'} tasks={inprogressData} />
      )}
      {doneData.length > 0 && (
        <TasksColumn key={3} category={'Done'} tasks={doneData} />
      )}
    </Container>
  );
};
export default TasksColumnsList;
