import TodoItem from "@/components/TodoItem";
import { Todo } from '@/model/todo';

type TodoListProps = {
  todos: Todo[], 
  deleteItem: (id: string) => void,
  toggleItem: (id: string) => void
}

export default function TodoList({ todos, deleteItem, toggleItem }: TodoListProps) {
  const handleDelete = (id: string) => deleteItem(id);
  const handleToggle = (id: string) => toggleItem(id);

  return (
    <ul>
      {todos.map((todo: Todo, index: number) => (
        <TodoItem key={index} todo={todo} deleteItem={() => handleDelete(todo.id)} toggleItem={() => handleToggle(todo.id)} />
      ))}
    </ul>
  )
}