import React, { createContext, useContext, useReducer, useEffect } from 'react';
import {
  TodoStructure,
  DispatchActionProps,
  TodoState,
  InitialContext,
  ChildrenProp,
} from '../utils/types';

// Load initial state from localStorage
const loadTodosFromLocalStorage = (): TodoStructure[] => {
  const storedTodos = localStorage.getItem('TodoData');
  return storedTodos ? JSON.parse(storedTodos) : [];
};
const initialState: TodoState = {
  todos: loadTodosFromLocalStorage(),
};

// Initial State of Data that is being transferred to Other Components
const initialContext = {
  state: initialState,
  dispatch: () => null,
};

export const TodoContext = createContext<InitialContext>(initialContext);

const todoReducer = (
  state: TodoState,
  action: DispatchActionProps
): TodoState => {
  let updatedTodos;
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo: TodoStructure = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      updatedTodos = [...state.todos, newTodo];
      localStorage.setItem('TodoData', JSON.stringify(updatedTodos));
      return { todos: updatedTodos };

    case 'TOGGLE_TODO':
      updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem('TodoData', JSON.stringify(updatedTodos));
      return { todos: updatedTodos };

    case 'DELETE_TODO':
      updatedTodos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('TodoData', JSON.stringify(updatedTodos));
      return { todos: updatedTodos };

    case 'EDIT_TODO':
      updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      localStorage.setItem('TodoData', JSON.stringify(updatedTodos));
      return { todos: updatedTodos };

    default:
      return state;
  }
};

export const TodoProvider: React.FC<ChildrenProp> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem('TodoData', JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
