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
  // const tasks = data?.data;
  let todoData = [];
  let inprogressData = [];
  let doneData = [];
  if (data) {
    let tasks = data?.data;
    // console.log('tasks', tasks);
    tasks = tasks.filter(item => item.date === '2023-08-10')
    console.log('tasks', tasks);
   todoData = tasks.filter(
    task => task.category.replace(/\s+/g, '').toLowerCase() === 'todo'
  );
  inprogressData = tasks.filter(
    task => task.category.replace(/\s+/g, '').toLowerCase() === 'inprogress'
  );
  doneData = tasks.filter(
    task => task.category.replace(/\s+/g, '').toLowerCase() === 'done'
  );
  }

  return (
    <Container>
        <TasksColumn key={1} category={'To do'} tasks={todoData} />
        <TasksColumn key={2} category={'In progress'} tasks={inprogressData} />
        <TasksColumn key={3} category={'Done'} tasks={doneData} />
    </Container>
  );
};
export default TasksColumnsList;
