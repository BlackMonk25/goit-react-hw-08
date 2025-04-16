import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully!");
        actions.resetForm();
      })
      .catch(() => {
        toast.error("Failed to add contact. Please try again.");
      });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id="name"
            autoComplete="name"
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

        <div className={css.group}>
          <label className={css.label} htmlFor="number">
            Number
          </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id="number"
            autoComplete="tel"
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}




