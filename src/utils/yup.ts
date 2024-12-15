import * as Yup from 'yup';
export const validationSchemas = [
    Yup.object({
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    Yup.object({
      address: Yup.string().required('Required'),
      zipCode: Yup.number().required('Required').typeError('Must be a number'),
    }),
    Yup.object({
      profession: Yup.string().required('Required'),
      yearsOfExperience: Yup.number()
        .required('Required')
        .typeError('Must be a number'),
    }),
  ];