import React from 'react';
import styles from './TodoList.module.css';
import Button from '../ui/Button';

const TodoList = ({ todos, changeStatus, getEditedObj, deleteTodo }) => {
  return (
    <div className="w-[30%]">
        <h2 className="m-5 text-3xl text-center text-white">TODO List Component</h2>
        <ul>
            {todos.map(item => (
                <li key={item.id} className="flex items-center justify-around w-full m-1">
                    <input type="checkbox" onChange={() => changeStatus(item.id)} />

                    <p className={item.status ? styles.completed : styles.undone}>{item.task}</p>

                    <div onClick={() => deleteTodo(item.id)}>
                      <Button>Delete Task</Button>
                    </div>

                    <div onClick={() => getEditedObj(item.id)}>
                      <Button>Edit Task</Button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList