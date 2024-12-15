import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { validationSchemas } from '../utils/yup';
import StepOne from './multiStepComponents/Step1';
import StepTwo from './multiStepComponents/Step2';
import StepThree from './multiStepComponents/Step3';

/**
 * A component that renders a multi-step form wizard.
 *
 * The form wizard renders a different step based on the current `step` state.
 * The `step` state is incremented when the user submits a valid form and
 * decremented when the user clicks the back button.
 *
 * The `handleSubmit` function is called when the user submits the form in the
 * last step. The function is passed the form values and the Formik helpers as
 * arguments.
 *
 * The component renders a "Submit" button in the last step and a "Next" button
 * in all other steps. The "Next" button is disabled if the form is not valid.
 *
 * @returns A multi-step form wizard component.
 */
const FormWizard: React.FC = () => {
  const [step, setStep] = useState(0);

  const isLastStep = step === validationSchemas.length - 1;

  const handleSubmit = (values: any, actions: FormikHelpers<any>) => {
    if (isLastStep) {
      /**
       * Handles the form submission process.
       *
       * @param values - The current form values.
       * @param actions - Formik helpers for handling form actions.
       *
       * If the current step is the last step, it logs the submitted values.
       * Otherwise, it resets the touched fields and stops the form submission.
       */

      console.log('Form Submitted', values);
    } else {
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <h2 className=' mt-5'>Multi-Step Form Wizard</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          address: '',
          zipCode: '',
          profession: '',
          yearsOfExperience: '',
        }}
        validationSchema={validationSchemas[step]}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className='p-3 shadow-lg card mycard'>
            {step === 0 && <StepOne />}
            {step === 1 && <StepTwo />}
            {step === 2 && <StepThree />}

            <div className='d-flex my-2'>
              {step > 0 && (
                <button
                  className='moveright'
                  style={{ borderRadius: '100%', border: 'none' }}
                >
                  <FaArrowCircleLeft
                    className='fs-1 text-bg-warning p-1 me-2 icon-link-hover rounded-5'
                    onClick={() => setStep(step - 1)}
                  />
                </button>
              )}
              {isLastStep ? (
                <button
                  type='submit'
                  className=' px-3 rounded-5 d-block ms-auto py-1 btn-warning p-1 icon-link-hover btn'
                >
                  Submit
                </button>
              ) : (
                <button
                  disabled={!isValid}
                  onClick={() => setStep((prev) => prev + 1)}
                  style={{ borderRadius: '100%', border: 'none' }}
                  className='moveright'
                >
                  <FaArrowCircleRight
                    type='button'
                    className='fs-1 text-bg-warning p-1 rounded-5'
                  />
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormWizard;
