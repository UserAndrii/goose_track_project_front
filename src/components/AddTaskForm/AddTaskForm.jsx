import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import {
  useCreateTasksMutation,
  useEditTasksMutation,
} from '../../redux/tasks/tasksApi';
import { showErrorToast, showSuccessToast } from '../../utils/showToast';
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
} from './AddTaskForm.styled';

const AddTaskForm = ({ onClose, task, category }) => {
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
      showErrorToast('Please fill in all fields');
      return;
    }

    if (startTime > endTime) {
      showErrorToast('Start time cannot be after end time');
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
        showSuccessToast('Task edited:');
      } else {
        await createTask(taskData);
        showSuccessToast('New task created:');
      }
      onClose();
    } catch (error) {
      showErrorToast('Error creating/editing task');
    }
  };

  return (
    <Form onSubmit={handleAddTask}>
      <Label>
        Title
        <Input
          type="text"
          name="title"
          placeholder="Enter text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Label>
      <TimeWrapper>
        <TimePickerLabel>
          Start
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
          End
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
          <Span className="radio-label">Low</Span>
        </PriorityLabel>

        <PriorityLabel>
          <RadioInputYellow
            type="radio"
            name="priority"
            value="MEDIUM"
            checked={priority === 'MEDIUM'}
            onChange={handlePriorityChange}
          />
          <Span className="radio-label">Medium</Span>
        </PriorityLabel>

        <PriorityLabel>
          <RadioInputRed
            type="radio"
            name="priority"
            value="HIGH"
            checked={priority === 'HIGH'}
            onChange={handlePriorityChange}
          />
          <Span className="radio-label">High</Span>
        </PriorityLabel>
      </RadioWrapper>
      <ButtonWrapper>
        <Button type="submit">{task ? 'Edit' : '+ Add'}</Button>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default AddTaskForm;
