import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const AddTodo = ({ createTodo }) => {
    const [task, setTask] = useState('');

    const getTask = e => {
        setTask(e.target.value);
    };

    const createTask = () => {
        if(!task.trim()) {
            alert('Input is empty!');
            return;
        };

        const newTask = {
            id: Date.now(),
            status: false,
            task: task
        };

        createTodo(newTask);

        setTask('');
    };

  return (
    <div className="text-white">

        <h2 className="text-3xl text-center m-2">Add TODO Component</h2>

        <Input handleFunc={getTask} inpValue={task} />
        
        <div onClick={createTask} className="m-2">
            <Button>Add</Button>
        </div>
    </div>
  )
}

export default AddTodo