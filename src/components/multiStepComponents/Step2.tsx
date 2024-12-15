import { Field, ErrorMessage } from 'formik';

const StepTwo: React.FC = () => {
  return (
    <div>
      <h4>Step 2: Address Information</h4>
      <div>
        <label htmlFor='address'>Address</label>
        <Field id='address' name='address' className='form-control mb-3' />
        <ErrorMessage className='text-danger' name='address' component='div' />
      </div>
      <div>
        <label htmlFor='zipCode'>Zip Code</label>
        <Field
          id='zipCode'
          name='zipCode'
          type='number'
          className='form-control mb-3'
        />
        <ErrorMessage className='text-danger' name='zipCode' component='div' />
      </div>
    </div>
  );
};

export default StepTwo;
