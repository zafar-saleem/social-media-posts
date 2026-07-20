import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid email address').required('Email is required'),
  fname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Firstname is required'),
  lname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Lastname is required'),
  zip: Yup.string()
    .min(2, 'Too Short!')
    .max(5, 'Too Long!')
    .required('Zip code is required'),
  country: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Country is required'),
  cc_number: Yup.string()
    .min(16, 'Card number is too short!')
    .max(16, 'Card number is too short!')
    .required('Credit card number is required'),
  cc_month: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Expiry month is required'),
  cc_year: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Expiry year is required'),
  cc_security: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Security code is required'),
  });
