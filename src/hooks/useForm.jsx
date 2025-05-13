import { useState } from "react";
import { validateForm } from "../schema";

export const useForm = (schema, initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const validate = async () => {
    const validationErrors = await validateForm(schema, formData);

    console.log("validationErrors:::", validationErrors);

    if (validationErrors) {
      setErrors(validationErrors);
      return true;
    }

    setErrors(initialState);
    return false;
  };

  return {
    formData,
    setFormData,
    validate,
    errors,
  };
};
