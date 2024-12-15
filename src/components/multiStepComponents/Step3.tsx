import { Field, ErrorMessage } from 'formik';

const StepThree: React.FC = () => {
  return (
    <div>
      <h4>Step 3: Professional Information</h4>
      <div>
        <label htmlFor='profession'>Profession</label>
        <Field
          id='profession'
          name='profession'
          className='form-control mb-3'
        />
        <ErrorMessage
          className='text-danger'
          name='profession'
          component='div'
        />
      </div>
      <div>
        <label htmlFor='yearsOfExperience'>Years of Experience</label>
        <Field
          id='yearsOfExperience'
          name='yearsOfExperience'
          className='form-control mb-3'
          type='number'
        />
        <ErrorMessage
          className='text-danger'
          name='yearsOfExperience'
          component='div'
        />
      </div>
    </div>
  );
};

export default StepThree;
