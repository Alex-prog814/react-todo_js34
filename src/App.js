import React, { useState } from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import EditTodo from './components/EditTodo/EditTodo'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


const App = () => {
  const [todos, setTodos] = useState([]);
  const [editedObj, setEditedObj] = useState(null);
  const [component, setComponent] = useState('todos');

  function createTodo(newTodo) {
    let newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  };

  function changeStatus(id) {
    const newTodos = todos.map(item => {
      if(item.id === id) {
        item.status = !item.status;
      };
      return item;
    });
    setTodos(newTodos);
  };

  function getEditedObj(id) {
    const todoObj = todos.find(item => item.id === id);
    setEditedObj(todoObj);
    setComponent('edit');
  };

  function saveChanges(newObj) {
    const newTodos = todos.map(item => {
      if(item.id === newObj.id) return newObj;
      return item;
    });
    setTodos(newTodos);
    setEditedObj(null);
  };

  function deleteTodo(id) {
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar setComponent={setComponent} />
      <div className="w-full h-[86vh] bg-gray-600 flex flex-col items-center justify-center">

        {component === 'create' && <AddTodo createTodo={createTodo} />}

        {component === 'todos' && <TodoList todos={todos} changeStatus={changeStatus} getEditedObj={getEditedObj} deleteTodo={deleteTodo} />}

        {component === 'edit' && <EditTodo editedObj={editedObj} saveChanges={saveChanges} setComponent={setComponent} />}
      </div>
      <Footer />
    </>
  )
}

export default App