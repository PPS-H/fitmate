import * as yup from "yup";

export const LoginFormSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const RegisterFormSchema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  rePassword: yup
    .string()
    .required("Re-Entered Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const ForgotPasswordSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export const BasicInfoSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  gender: yup.string().required("Gender is required"),
  height: yup.string().required("Height is required"),
  width: yup.string().required("Width is required"),
});

export const validateForm = async (schema, data) => {
  try {
    console.log("data::::::::", data);
    await schema.validate(data, {
      abortEarly: false,
    });
  } catch (error) {
    const formattedErrors = {};
    error.inner.forEach((err) => {
      if (err.type == "at-least-one") {
        formattedErrors.phone = err.message;
        formattedErrors.email = err.message;
      }
      if (err.path) {
        formattedErrors[err.path] = err.message;
      }
    });

    return formattedErrors;
  }
};
