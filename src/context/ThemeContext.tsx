import { useState, createContext } from 'react';
import { ThemeContextType, ChildrenProp } from '../utils/types';


const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  changeTheme: () => {},
});

const ContextProvider: React.FC<ChildrenProp> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  const changeTheme = () => {
    setTheme((prev) => (prev == 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ContextProvider };
