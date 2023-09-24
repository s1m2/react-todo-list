import { useState } from 'react';

import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';

import { Todo } from '@/model/todo';

import './assets/style/App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (title: string) => {
    setTodos([...todos, { id: crypto.randomUUID() , title, checked: false }]);
  }

  const deleteItem = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const toggleItem = (id: string) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    }));
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteItem={deleteItem} toggleItem={toggleItem}/>
    </>
  )
}

export default App
