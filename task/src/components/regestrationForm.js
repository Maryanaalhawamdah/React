import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
 import styled from '@emotion/styled'

const RegistrationForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = (values) => {
    // Handle form submission here, e.g., send data to a server
    console.log(values);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error" />
          </div>

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;