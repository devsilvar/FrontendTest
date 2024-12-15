import { Field, ErrorMessage } from 'formik';

const StepOne: React.FC = () => {
  return (
    <div>
      <h4 className='my-3'>Step 1: User Information</h4>
      <div>
        <label htmlFor='username'>Username</label>
        <Field id='username' name='username' className='form-control mb-3' />
        <ErrorMessage className='text-danger' name='username' component='div' />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <Field
          id='email'
          name='email'
          type='email'
          className='form-control mb-3'
        />
        <ErrorMessage className='text-danger' name='email' component='div' />
      </div>
    </div>
  );
};

export default StepOne;
