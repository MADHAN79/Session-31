// src/components/Books/AddBookForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddBookForm = ({ addBook }) => {
  const initialValues = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN number is required'),
    publicationDate: Yup.date().required('Publication Date is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    addBook(values);
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
          <label htmlFor="title">Title</label>
          <Field name="title" type="text" className="input" />
          <ErrorMessage name="title" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Field name="author" type="text" className="input" />
          <ErrorMessage name="author" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="isbn">ISBN</label>
          <Field name="isbn" type="text" className="input" />
          <ErrorMessage name="isbn" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="publicationDate">Publication Date</label>
          <Field name="publicationDate" type="date" className="input" />
          <ErrorMessage name="publicationDate" component="div" className="error" />
        </div>
        <button type="submit" className="btn">Add Book</button>
      </Form>
    </Formik>
  );
};

export default AddBookForm;
