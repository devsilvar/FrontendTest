import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextProvider } from './context/ThemeContext.tsx';
import { TodoProvider } from './context/TodoContext.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ContextProvider>
  </StrictMode>
);
