// src/components/Authors/AddAuthorForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddAuthorForm = ({ addAuthor }) => {
  const initialValues = {
    name: '',
    birthDate: '',
    biography: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth Date is required'),
    biography: Yup.string().required('Biography is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    const newAuthor = {
      ...values,
      id: Date.now(), // Generate a unique id for the new author
    };
    addAuthor(newAuthor);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="space-y-4">
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className="input" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="birthDate">Birth Date</label>
          <Field name="birthDate" type="date" className="input" />
          <ErrorMessage name="birthDate" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="biography">Biography</label>
          <Field name="biography" as="textarea" className="input" />
          <ErrorMessage name="biography" component="div" className="error" />
        </div>
        <button type="submit" className="add">Add Author</button>
      </Form>
    </Formik>
  );
};

export default AddAuthorForm;
