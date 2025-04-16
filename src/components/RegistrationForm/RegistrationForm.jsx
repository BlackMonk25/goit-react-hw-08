import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operation";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const registrationFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={registrationFormSchema}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.group}>
          <label className={css.label} htmlFor="name">
            Username
          </label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.group}>
          <label className={css.label} htmlFor="email">
            Email
          </label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.group}>
          <label className={css.label} htmlFor="password">
            Password
          </label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}