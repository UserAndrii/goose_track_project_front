import React from 'react';
import { Container } from './TasksColumnsList.styled';
import TasksColumn from '../TasksColumn';
import { DragDropContext } from 'react-beautiful-dnd';
import { tasksApi } from 'redux/tasks/tasksApi';
import { showErrorToast } from '../../utils/showToast';
import ImageAnimation from 'components/Bandero-goose/ImageAnimation';


const TasksColumnsList = ({ filteredTask, currentDay }) => {
  const [editTask, { isLoading, isError } ] = tasksApi.useEditTasksMutation();
  let todoData = [];
  let inprogressData = [];
  let doneData = [];
  if (filteredTask) {
    todoData = filteredTask.filter(
    task => task.category.replace(/\s+/g, '').toLowerCase() === 'todo'
  );
  inprogressData = filteredTask.filter(
    task => task.category.replace(/\s+/g, '').toLowerCase() === 'inprogress'
  );
  doneData = filteredTask.filter(
    task => task.category.replace(/\s+/g, '').toLowerCase() === 'done'
  );
  }
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const task =  filteredTask.find(item => (item._id === draggableId));
    const { _id, ...newTask } = task;
    const editedTask = { ...newTask, category: destination.droppableId };
    try {
      editTask({ id: task._id, ...editedTask });
      if (isError) {
      throw new Error();
      }
    } catch (error) {
      showErrorToast('Something went wrong...');
    }

  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
          {isLoading && <ImageAnimation/>}
        <TasksColumn columnId={"TODO"} category={'To do'} tasks={todoData} />
        <TasksColumn columnId={"INPROGRESS"} category={'In progress'} tasks={inprogressData} />
        <TasksColumn columnId={"DONE"} category={'Done'} tasks={doneData} />
      </Container>
      </DragDropContext>
  );
};
export default TasksColumnsList;
