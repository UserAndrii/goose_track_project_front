import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CuatomTimePicker.css';


import {
  useCreateTasksMutation,
  useEditTasksMutation,
} from '../../redux/tasks/tasksApi';
import {
  Button,
  ButtonWrapper,
  ExampleCustomInput,
  Form,
  Input,
  Label,
  PriorityLabel,
  RadioInputBlue,
  RadioInputRed,
  RadioInputYellow,
  RadioWrapper,
  Span,
  TimePickerLabel,
  TimeWrapper,
  PlusIcon,
  EditIcon,
} from './AddTaskForm.styled';
import { showErrorToast, showSuccessToast } from '../../utils/showToast';

const AddTaskForm = ({ onClose, task, category }) => {
  const { t } = useTranslation();

  const initialEndTime = new Date();
  initialEndTime.setMinutes(initialEndTime.getMinutes() + 15);

  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(initialEndTime);
  const [priority, setPriority] = useState('');
  const { currentDate } = useParams();
  const [createTask] = useCreateTasksMutation();
  const [editTask] = useEditTasksMutation();

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setStartTime(new Date(`2000-01-01T${task.start}`));
      setEndTime(new Date(`2000-01-01T${task.end}`));
      setPriority(task.priority);
    }
  }, [task]);

  const handlePriorityChange = event => {
    setPriority(event.target.value);
  };

  const handleAddTask = async event => {
    event.preventDefault();
    if (!title || !startTime || !endTime || !priority) {
      showErrorToast(t('addtask.err1'));
      return;
    }

    if (startTime > endTime) {
      showErrorToast(t('addtask.err2'));
      return;
    }

    const formatTime = time => {
      const hours = time.getHours().toString().padStart(2, '0');
      const minutes = time.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    };

    const taskData = {
      title: title,
      start: formatTime(startTime),
      end: formatTime(endTime),
      priority: priority,
      date: currentDate,
      category: category ? category : task.category,
    };

    try {
      if (task) {
        await editTask({ id: task._id, ...taskData });
        showSuccessToast(t('addtask.succ1'));
      } else {
        await createTask(taskData);
        showSuccessToast(t('addtask.succ2'));
      }
      onClose();
    } catch (error) {
      showErrorToast(t('addtask.err3'));
    }
  };

  return (
    <Form onSubmit={handleAddTask}>
      <Label>
        {t('addtask.title')}
        <Input
          type="text"
          name="title"
          placeholder={t('addtask.titlehold')}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Label>
      <TimeWrapper>
        <TimePickerLabel>
          {t('addtask.start')}
          <DatePicker
            selected={startTime}
            onChange={date => {
              setStartTime(date);
              const newEndTime = new Date(date.getTime() + 15 * 60000);
              setEndTime(newEndTime);
            }}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            customInput={<ExampleCustomInput />}
            dateFormat="h:mm aa"
          />
        </TimePickerLabel>
        <TimePickerLabel>
          {t('addtask.end')}
          <DatePicker
            selected={endTime}
            onChange={date => setEndTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            customInput={<ExampleCustomInput />}
            dateFormat="h:mm aa"
            minTime={new Date(startTime.getTime() + 15 * 60000)}
            maxTime={new Date('2000-01-01T23:45')}
          />
        </TimePickerLabel>
      </TimeWrapper>

      <RadioWrapper>
        <PriorityLabel>
          <RadioInputBlue
            type="radio"
            name="priority"
            value="LOW"
            checked={priority === 'LOW'}
            onChange={handlePriorityChange}
          />
          <Span className="radio-label"> {t('addtask.low')}</Span>
        </PriorityLabel>

        <PriorityLabel>
          <RadioInputYellow
            type="radio"
            name="priority"
            value="MEDIUM"
            checked={priority === 'MEDIUM'}
            onChange={handlePriorityChange}
          />
          <Span className="radio-label"> {t('addtask.medium')}</Span>
        </PriorityLabel>

        <PriorityLabel>
          <RadioInputRed
            type="radio"
            name="priority"
            value="HIGH"
            checked={priority === 'HIGH'}
            onChange={handlePriorityChange}
          />
          <Span className="radio-label"> {t('addtask.high')}</Span>
        </PriorityLabel>
      </RadioWrapper>
      <ButtonWrapper>
        <Button type="submit" isActive={true}>
          {task ? <EditIcon /> : <PlusIcon />}
          {task ? t('addtask.edit') : t('addtask.add')}
        </Button>
        <Button type="button" onClick={onClose}>
          {t('addtask.cancel')}
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default AddTaskForm;
