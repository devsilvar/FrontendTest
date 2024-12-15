import React, { useState } from 'react';
import { Nigeria } from '../utils/dummyData';
import { StateProps } from '../utils/types';

/**
 * FilteredList is a component that displays a list of states
 * from the Nigeria object. When the user types in the input field,
 * the component filters the list to only show states that match
 * the user's input.
 *
 * The component uses the useState hook to keep track of the user's
 * input and the filtered list of states. The component also uses
 * the filter() method to filter the list of states based on the user's
 * input.
 *
 * The component renders a card with a label, an input field, and a
 * list of filtered states. When the user types in the input field,
 * the component updates the list of filtered states and re-renders.
 */
const FilteredList: React.FC = () => {
  /**
   * The location state is an object with a states property that is
   * initialized with the states from the Nigeria object.
   */
  const [location, setLocation] = useState<StateProps>(Nigeria);

  /**
   * The userInput state is a string that is initialized with an empty string.
   * The userInput state is updated whenever the user types in the input field.
   */
  const [userInput, setUserInput] = useState<string>('');

  /**
   * The filterState function is called whenever the user types in the input field.
   * The function takes an event as an argument and gets the value of the input field
   * from the event. The function then updates the userInput state with the value of
   * the input field.
   *
   * The function then filters the list of states based on the user's input using the
   * filter() method. The function returns a new list of states that match the user's
   * input.
   *
   * The function then updates the location state with the new list of filtered states.
   */
  const filterState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setUserInput(input);

    /**
     * The filter() method is called on the list of states from the Nigeria object.
     * The function takes a callback function as an argument that returns true if the
     * state matches the user's input and false otherwise.
     */
    const filtered = Nigeria.states.filter((item) => {
      /**
       * The callback function takes a state as an argument and returns true if the
       * state matches the user's input and false otherwise.
       */
      return item.toLowerCase().includes(input.toLowerCase());
    });

    /**
     * The location state is updated with the new list of filtered states.
     */
    setLocation({ states: filtered });
  };

  /**
   * The component renders a card with a label, an input field, and a list of filtered
   * states. When the user types in the input field, the component updates the list of
   * filtered states and re-renders.
   */
  return (
    <>
      <h2>Filtered List</h2>
      <div className='card rounded-md shadow-lg mycard'>
        <div className='mb-1 p-4'>
          <label htmlFor='stateInput' className='form-label'>
            Type in Your State
          </label>
          <input
            type='text'
            className='form-control'
            id='stateInput'
            aria-describedby='helpId'
            placeholder=''
            value={userInput}
            onChange={filterState}
          />
        </div>

        <ol className='ms-3'>
          {location.states.length ? (
            /**
             * If the list of filtered states is not empty, the component renders a list
             * of filtered states.
             */
            location.states.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            /**
             * If the list of filtered states is empty, the component renders a message
             * indicating that no states were found.
             */
            <small className='text-danger'>No State Found</small>
          )}
        </ol>
      </div>
    </>
  );
};

export default FilteredList;
