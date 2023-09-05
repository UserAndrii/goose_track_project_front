import React from 'react';
import { Container } from './TasksColumnsList.styled';
import TasksColumn from '../TasksColumn';
import { DragDropContext } from 'react-beautiful-dnd';
import { tasksApi } from 'redux/tasks/tasksApi';
import { showErrorToast } from '../../utils/showToast';
import { useTranslation } from 'react-i18next';

const TasksColumnsList = ({ filteredTask }) => {
  const { t } = useTranslation();

  const [editTask, { isError }] = tasksApi.useEditTasksMutation();
  const priorityOrder = ['LOW', 'MEDIUM', 'HIGH'];

  let todoData = [];
  let inprogressData = [];
  let doneData = [];

  if (filteredTask) {
    todoData = filteredTask.filter(
      task => task.category.replace(/\s+/g, '').toLowerCase() === 'todo'
    );
    todoData.sort(
      (a, b) =>
        priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
    );

    inprogressData = filteredTask.filter(
      task => task.category.replace(/\s+/g, '').toLowerCase() === 'inprogress'
    );
    inprogressData.sort(
      (a, b) =>
        priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
    );

    doneData = filteredTask.filter(
      task => task.category.replace(/\s+/g, '').toLowerCase() === 'done'
    );
    doneData.sort(
      (a, b) =>
        priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
    );
  }
  const updateDrag = result => {
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

    const task = filteredTask.find(item => item._id === draggableId);
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
  };
  return (
    <DragDropContext
      onDragUpdate={updateDrag}
      disableInteractiveElementBlocking
    >
      <Container>
        <div>
          <TasksColumn
            columnId={'TODO'}
            category={t('statChart.todo')}
            tasks={todoData}
          />
          <TasksColumn
            columnId={'INPROGRESS'}
            category={t('statChart.inprogress')}
            tasks={inprogressData}
          />
          <TasksColumn
            columnId={'DONE'}
            category={t('statChart.done')}
            tasks={doneData}
          />
        </div>
      </Container>
    </DragDropContext>
  );
};
export default TasksColumnsList;
