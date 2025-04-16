import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operation";
import css from "./LoginForm.module.css";

const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={LoginFormSchema}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.group}>
          <label className={css.label} htmlFor="email">
            Email
          </label>
          <Field className={css.input} type="email" name="email" id="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.group}>
          <label className={css.label} htmlFor="password">
            Password
          </label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id="password"
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}