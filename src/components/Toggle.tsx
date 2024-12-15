import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
/**
 * ToggleButton is a component that renders a toggle button
 * that changes the theme of the page (light or dark) when clicked.
 *
 * The component uses the ThemeContext to get the current theme
 * and to change the theme when the button is clicked.
 *
 * The component also uses the useState hook to keep track of the
 * button's state (on or off). The state is updated when the button
 * is clicked.
 *
 * The component uses the useEffect hook to update the page's
 * styles when the theme changes. The useEffect hook is called
 * whenever the theme changes.
 *
 * The component renders a div with a class of "toggle-button" and
 * two child divs: one with a class of "toggle-circle" and the other
 * with a class of "toggle-state". The "toggle-circle" div is used
 * to represent the button's state (on or off) and the "toggle-state"
 * div is used to display the button's text ("Light" or "Dark").
 *
 * When the button is clicked, the component calls the changeTheme
 * function from the ThemeContext and updates the button's state
 * using the setIsOn function.
 */
const ToggleButton: React.FC = () => {
  // Get the current theme and the changeTheme function from the ThemeContext
  const { theme, changeTheme } = useContext(ThemeContext);

  // Use the useState hook to keep track of the button's state (on or off)
  const [isOn, setIsOn] = useState(false);

  // Use the useEffect hook to update the page's styles when the theme changes
  useEffect(() => {
    // If the theme is "light", set the page's background color to white and the text color to black
    if (theme == 'light') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }

    // If the theme is "dark", set the page's background color to black and the text color to white
    if (theme == 'dark') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  }, [theme]);

  // Define a function to toggle the button's state
  const toggle = () => {
    changeTheme();
    setIsOn(!isOn);
  };

  // Render the button
  return (
    <div className={`toggle-button ${isOn ? 'on' : 'off'}`} onClick={toggle}>
      <div className='toggle-circle'></div>
      <div className='toggle-state'></div>
    </div>
  );
};

export default ToggleButton;
