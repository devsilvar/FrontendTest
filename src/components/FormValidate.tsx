import { useState } from 'react';
import { ErrorProps } from '../utils/types';
import { ValidateEmail } from '../utils/validation';
/**
 * A functional component that renders a simple form with an input field and a
 * label. The component is designed to demonstrate the use of state and event
 * handling in React.
 *
 * The component uses the useState hook to create a state variable called
 * userInput, which is initialized with an empty string. The state variable is
 * used to store the value of the input field.
 *
 * The component also defines a function called handleEdits, which is called
 * whenever the user types in the input field. The function takes an event
 * object as an argument and gets the value of the input field from the event.
 * The function then updates the userInput state variable with the value of
 * the input field.
 *
 * The component renders a form element with a label and an input field. The
 * input field is given a placeholder value of 'Enter Your Email', and its
 * value is set to the value of the userInput state variable. The input field
 * also has an onChange event handler set to the handleEdits function.
 *
 * The component also renders a small element with a className of 'text-danger'
 * that displays an error message if the userInput state variable is not empty
 * and the ValidateEmail function returns true. The error message is set to
 * 'Your Email Adress is Wrong' if the ValidateEmail function returns true.
 */
const FormValidate = () => {
  const [userInput, setUserInput] = useState<string>('');
  /**
   * An object that contains a single property called email, which is set to
   * the result of calling the ValidateEmail function with the userInput state
   * variable as an argument. The ValidateEmail function returns a boolean
   * value indicating whether the email address is valid or not. If the email
   * address is invalid, the email property is set to a string value of 'Your
   * Email Adress is Wrong'.
   */
  const FormValidation: ErrorProps = {
    email: ValidateEmail(userInput) && 'Your Email Adress is Wrong',
  };

  /**
   * A function that is called whenever the user types in the input field. The
   * function takes an event object as an argument and gets the value of the
   * input field from the event. The function then updates the userInput state
   * variable with the value of the input field.
   */
  const handleEdits = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <>
      <h2>Form Validation</h2>
      <form className='form-group p-3 shadow card mycard'>
        <label htmlFor='email my-3'>Enter Your Email here</label>
        <input
          type='text'
          placeholder='Enter Your Email'
          className='form-control'
          value={userInput}
          onChange={handleEdits}
        />
        <small className='text-danger'>
          {userInput.length > 0 && FormValidation.email}
        </small>
      </form>
    </>
  );
};

export default FormValidate;
