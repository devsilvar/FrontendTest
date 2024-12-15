import TodoForm from './Todoform';
import TodoList from './TodoList';
const TodoWrapper = () => {
  return (
    <div>
      <h2>Todo list Application</h2>
      <div className='bg-light p-3 shadow-lg mycard'>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoWrapper;
