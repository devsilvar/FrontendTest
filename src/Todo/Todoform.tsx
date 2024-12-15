import React, { useState, useEffect } from 'react';
import { useTodoContext } from '../context/TodoContext';
import { IoAddCircleOutline } from 'react-icons/io5';
import { TodoFormProps } from '../utils/types';

/**
 * A form component for adding new to-do items to the list.
 *
 * Handles the onSubmit event by dispatching an action to add the new to-do
 * item to the list. The input field value is cleared after submitting the
 * form. The dispatch function is obtained from the TodoContext.
 *
 * @returns A form component for adding new to-do items to the list.
 */
const TodoForm: React.FC<TodoFormProps> = () => {
  const [input, setInput] = useState<string>('');
  const { dispatch } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='p-1'>
      <input
        type='text'
        value={input}
        className='form-control my-3'
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter a new to-do'
      />
      <button type='submit' className='btn btn-warning'>
        Add Todo
        <IoAddCircleOutline className='fs-5 fw-bold ms-2' />
      </button>
    </form>
  );
};

export default TodoForm;
