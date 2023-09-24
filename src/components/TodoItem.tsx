import trash from '@/assets/icons/trash.svg';
import { Todo } from '@/model/todo';

type TodoItemProps = {
  todo: Todo, 
  deleteItem: (id: string) => void,
  toggleItem: (id: string) => void
}

export default function TodoItem({ todo, deleteItem, toggleItem}: TodoItemProps) {
  const handleDelete = (id: string) => deleteItem(id);
  const handleToggle = () => toggleItem(todo.id);

  return (
    <li className={todo.checked ?'completed' : ''}>
      <span>
        <input type="checkbox" name="completed" id="completed" onChange={ handleToggle } />
        {todo.title}
      </span>
      
      <img src={trash} alt='logo' onClick={() => handleDelete(todo.id)} />
    </li>
  )
}