import React from "react";
import Logo from "../../components/Logo";
import { useForm } from "../../hooks/useForm";
import { ForgotPasswordSchema } from "../../schema";
import Input from "../../components/Input";
import { handleInputChange } from "../../utils/helper";

const initialState = {
  email: "",
};

const ForgotPassword = () => {
  const { formData, setFormData, validate, errors } = useForm(
    ForgotPasswordSchema,
    initialState
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors = await validate();
    if (hasErrors) return;

    console.log("Form submitted:", formData);
  };

  return (
    <div
      className={`fixed inset-0 bg-black flex flex-col justify-center items-center px-4 py-6 md:py-12 `}
    >
      {/* Background gradient blurs  */}
      <div className="fixed w-64 h-64 md:w-96 md:h-96 top-0 left-0 bg-[#abc219] rounded-full blur-[100px] md:blur-[155px] opacity-30" />
      <div className="fixed w-64 h-64 md:w-96 md:h-96 top-1/4 right-0 bg-[#24cdd7] rounded-full blur-[100px] md:blur-[155px] opacity-30" />
      <div className="fixed w-64 h-64 md:w-96 md:h-96 bottom-0 left-10 bg-[#24cdd7] rounded-full blur-[100px] md:blur-[155px] opacity-40" />
      <div className="fixed w-64 h-64 md:w-96 md:h-96 bottom-0 right-0 bg-[#abc219] rounded-full blur-[100px] md:blur-[155px] opacity-40" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg flex flex-col items-center">
        {/* Logo */}
        <div className="mb-12 md:mb-16">
          <Logo />
        </div>

        <div className="mb-6 md:mb-8">
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            Forgot Password
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full px-4 md:px-6">
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Email"
              className="w-full h-12 md:h-14 bg-[#4c4c4c4c] rounded-lg border-0 text-[#979797] text-sm md:text-base pl-6 focus:ring-1 focus:ring-[#24cdd7] focus:outline-none"
              value={formData.email}
              name="email"
              onChange={(e) => handleInputChange(e, setFormData)}
              error={errors.email}
            />
          </div>

          <button type="submit" className="btn-primary">
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
