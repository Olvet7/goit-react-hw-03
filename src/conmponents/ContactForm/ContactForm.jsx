import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

import css from "../ContactForm/ContactForm.module.css";

export const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, <span className={css.error}>Too Short!</span>)
      .max(50, <span className={css.error}>Too Long!</span>)
      .required(<span className={css.error}>Required</span>),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .matches(phoneRegExp, "Invalid phone number")
      .required(<span className={css.error}>Required</span>),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="name"
          placeholder="Enter your name"
          className={css.field}
          id={nameFieldId}
        />
        <ErrorMessage name="name" as="span" />
        <label htmlFor={phoneFieldId}>Number</label>
        <Field
          type="text"
          name="number"
          placeholder="Enter your phone"
          className={css.field}
          id={phoneFieldId}
        />
        <ErrorMessage name="number" as="span" />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

