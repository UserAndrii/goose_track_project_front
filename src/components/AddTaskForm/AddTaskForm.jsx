import { TimePicker } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';
import  toast  from 'react-hot-toast';
import { useState } from 'react';
import {
  Button,
  ButtonWrapper,
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

const AddTaskForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [priority, setPriority] = useState('');

  const handleAddTask = event => {
    event.preventDefault();
    if (!title || !startTime || !endTime || !priority) {
      toast.error('Please fill in all fields');
      return;
    }
    // Добавьте код для обработки добавления задачи
    console.log('Title:', title);
    console.log('Start Time:', startTime.value);
    console.log('End Time:', endTime.value);
    console.log('Priority:', priority);
    onClose();
  };
  

  const handlePriorityChange = event => {
    setPriority(event.target.value);
  };

  return (
    <Form onSubmit={handleAddTask}>
      <Label htmlFor="title">
        Title
        <Input
          type="text"
          id="title"
          placeholder="Enter text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Label>
      <TimeWrapper>
        <TimePickerLabel>
          Start
          <TimePicker onChange={setStartTime} />
        </TimePickerLabel>
        <TimePickerLabel>
          End
          <TimePicker onChange={setEndTime} />
        </TimePickerLabel>
      </TimeWrapper>

      <PriorityLabel>
        <RadioWrapper>
          <RadioInputBlue
            type="radio"
            name="priority"
            value="Low"
            checked={priority === 'Low'}
            onChange={handlePriorityChange}
          />
          <Span className="radio-label">Low</Span>

          <RadioInputYellow
            type="radio"
            name="priority"
            value="Medium"
            checked={priority === 'Medium'}
            onChange={handlePriorityChange}
          />
          <Span className="radio-label">Medium</Span>

          <RadioInputRed
            type="radio"
            name="priority"
            value="High"
            checked={priority === 'High'}
            onChange={handlePriorityChange}
          />
          <Span className="radio-label">High</Span>
        </RadioWrapper>
      </PriorityLabel>
      <ButtonWrapper>
        <Button type="submit">+ Add</Button>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default AddTaskForm;
