import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const EditTodo = ({ editedObj, saveChanges, setComponent }) => {
    const [editedTodo, setEditedTodo] = useState(editedObj);

    function editTodo(e) {
        setEditedTodo({
            ...editedTodo,
            task: e.target.value
        });
    };
  
    return (
    <div className="text-white">
        <h2 className="text-3xl text-center m-2">EditTodo Component</h2>

        <Input handleFunc={editTodo} inpValue={editedTodo.task} />

        <div onClick={() => {
            saveChanges(editedTodo);
            setComponent('todos');
        }} className="m-2">
            <Button>Save Changes</Button>
        </div>
    </div>
  )
}

export default EditTodo