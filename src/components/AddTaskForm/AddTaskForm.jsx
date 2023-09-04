// import { TimePicker } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';
import toast from 'react-hot-toast';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useCreateTasksMutation } from '../../redux/tasks/tasksApi';
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

const AddTaskForm = ({ onClose, task }) => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [priority, setPriority] = useState('');
  const [createTask] = useCreateTasksMutation();

  const handleAddTask = async event => {
    event.preventDefault();
    if (!title || !startTime || !endTime || !priority) {
      toast.error('Please fill in all fields');
      return;
    }

    if (startTime > endTime) {
      toast.error('Start time cannot be after end time');
      console.log('Start time cannot be after end time');
      return;
    }

    const formatTime = time => {
      const hours = time.getHours().toString().padStart(2, '0');
      const minutes = time.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    };

    const newTask = {
      title: title,
      start: formatTime(startTime),
      end: formatTime(endTime),
      priority: priority,
      date: '2023-09-01', // Пример даты
      category: 'TODO',
    };

    try {
      const result = await createTask(newTask);
      console.log('New task created:', result);
      onClose();
    } catch (error) {
      console.error('Error creating task:', error);
      toast.error('Error creating task');
    }
  };

  const handlePriorityChange = event => {
    setPriority(event.target.value);
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
            onChange={date => setStartTime(date)}
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
        <Button type="submit" onClick={handleAddTask}>
          + Add
        </Button>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default AddTaskForm;
