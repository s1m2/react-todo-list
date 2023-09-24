type AddTodo = {
  addTodo: (title: string) => void
};

export default function AddTodo({ addTodo }: AddTodo) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(e.currentTarget.add.value);
    e.currentTarget.add.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="add" id="add" autoComplete='off' />
    </form>
  )
}