
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

import css from "../ContactForm/ContactForm.module.css";

export const ContactForm = () => {

  const initialValues = {
    name: "",
    nubmer: ""
  }

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const ContactFormSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, <span className={css.error}>Too Short!</span>)
      .max(50, <span className={css.error}>Too Long!</span>)
      .required(<span className={css.error}>Required</span>),
    phone: Yup.number()
      .min(3, <span className={css.error}>Too Short!</span>)
      .max(50, <span className={css.error}>Too Long!</span>)
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
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
          type="name"
          name={nameFieldId}
          placeholder="Enter your name"
          className={css.field}
        />
        <ErrorMessage name="username" as="span" />
        <label htmlFor={phoneFieldId}>Number</label>
        <Field
          type="tel"
          name={phoneFieldId}
          placeholder="Enter your phone"
          className={css.field}
        />
        <ErrorMessage name="phone" as="span" />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

// 1.Обгортка Formik
// <Formik initialValues={{}} onSubmit={() => {}}>
// ...
// </Formik>

// 2. Form + Field + btn = type + name=initialValue

// 3. Функція передачі данних
// При відправці форми викликається колбек-функція, яку ми передали пропсом onSubmit компоненту Formik. Зручною є ідея зробити її іменованою функцією handleSubmit і передати посилання на неї в onSubmit.
// const handleSubmit = (values, actions) => {
//   console.log(values);
//   actions.resetForm();
// };

// 4.import { useId } from "react"; - додаємо id для інпутів - Field
// const nameFieldId = useId();
// const phoneFieldId = useId();
// <Field type="name" name={nameFieldId} />
// <Field type="tel" name={phoneFieldId} />

// 5. label - <label htmlFor={nameFieldId}>Username</label>
// 6. валідація - npm i yup > import * as Yup from "yup";
