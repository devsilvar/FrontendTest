import { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';
import { MdEditDocument, MdDelete } from 'react-icons/md';
import { FaUndoAlt } from 'react-icons/fa';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { GrDocumentUpdate } from 'react-icons/gr';
import { ImCancelCircle } from 'react-icons/im';
import { TodoStructure } from '../utils/types';

/**
 * A component that displays a list of todos. It fetches the todos from the TodoContext
 * and displays them in an unordered list. Each todo is displayed as a list item
 * with a checkbox to toggle the todo's completion status, an edit button to edit the
 * todo's text, and a delete button to delete the todo. If the todo is being edited,
 * the text is displayed in a text input field instead of a span element.
 *
 * @returns A JSX element representing the todo list.
 */
const TodoList = () => {
  const { state, dispatch } = useTodoContext();
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');

  const toggleTodo = (id: number) =>
    dispatch({ type: 'TOGGLE_TODO', payload: id });

  const deleteTodo = (id: number) =>
    dispatch({ type: 'DELETE_TODO', payload: id });

  const editTodo = (id: number, currentText: string) => {
    setIsEditing(id);
    setEditText(currentText);
  };

  const saveEdit = (id: number) => {
    if (editText.trim()) {
      dispatch({ type: 'EDIT_TODO', payload: { id, text: editText } });
      setIsEditing(null);
      setEditText('');
    }
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setEditText('');
  };

  const renderEditTodo = (todo: TodoStructure) => (
    <div className='w-100 d-flex align-items-center gap-3 justify-content-between'>
      <input
        type='text'
        value={editText}
        className='form-control'
        onChange={(e) => setEditText(e.target.value)}
      />
      <GrDocumentUpdate
        className='fs-4 text-success'
        onClick={() => saveEdit(todo.id)}
      />
      <ImCancelCircle className='fs-4' onClick={cancelEdit} />
    </div>
  );

  const renderTodo = (todo: TodoStructure) => (
    <>
      <span
        className='text-dark'
        style={{
          textDecoration: todo.completed ? 'line-through' : '',
        }}
      >
        {todo.completed && <IoCheckmarkDoneCircleSharp className='fs-4 icon' />}
        {todo.text}
      </span>
      <div className='d-flex gap-2'>
        <div onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? (
            <FaUndoAlt className='fs-4 icon text-dark' />
          ) : (
            <IoCheckmarkDoneCircleSharp className='fs-4 icon text-dark' />
          )}
        </div>
        <MdDelete
          className='text-danger fs-4 icon'
          onClick={() => deleteTodo(todo.id)}
        />
        <MdEditDocument
          className='text-warning fs-4 icon'
          onClick={() => editTodo(todo.id, todo.text)}
        />
      </div>
    </>
  );

  return (
    <div className='w-100 mt-3'>
      {state.todos.map((todo) => (
        <div
          key={todo.id}
          className='d-flex bg-white align-items-center mb-2 p-2 shadow-sm justify-content-between'
        >
          {isEditing === todo.id ? renderEditTodo(todo) : renderTodo(todo)}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
