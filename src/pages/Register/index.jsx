import React, { useState } from "react";
import Logo from "../../components/Logo";
import { useForm } from "../../hooks/useForm";
import { RegisterFormSchema } from "../../schema";
import Input from "../../components/Input";
import { handleInputChange } from "../../utils/helper";
import Password from "../../components/Password";
import Divider from "../../components/Divider";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  password: "",
  rePassword: "",
};

const Register = () => {
  const navigate = useNavigate();
  const { formData, setFormData, validate, errors } = useForm(
    RegisterFormSchema,
    initialState
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/basic-info");
    return;

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

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full px-4 md:px-6">
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Username"
              className="w-full h-12 md:h-14 bg-[#4c4c4c4c] rounded-lg border-0 text-[#979797] text-sm md:text-base pl-6 focus:ring-1 focus:ring-[#24cdd7] focus:outline-none"
              value={formData.username}
              name="username"
              onChange={(e) => handleInputChange(e, setFormData)}
              error={errors.username}
            />
          </div>
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

          <div className="mb-5 relative">
            <Password
              classes="w-full h-12 md:h-14 bg-[#4c4c4c4c] rounded-lg border-0 text-[#979797] text-sm md:text-base pl-6 focus:ring-1 focus:ring-[#24cdd7] focus:outline-none"
              name="password"
              value={formData?.password}
              error={errors?.password}
              placeholder="Password"
              setFormData={setFormData}
            />
          </div>
          <div className="mb-5 relative">
            <Password
              classes="w-full h-12 md:h-14 bg-[#4c4c4c4c] rounded-lg border-0 text-[#979797] text-sm md:text-base pl-6 focus:ring-1 focus:ring-[#24cdd7] focus:outline-none"
              name="rePassword"
              value={formData?.rePassword}
              error={errors?.rePassword}
              placeholder="Re-enter password"
              setFormData={setFormData}
            />
          </div>

          <button type="submit" className="btn-primary">
            Sign up
          </button>

          <div className="text-center mb-8">
            <span className="text-white text-sm">
              Alraedy have an account?{" "}
            </span>
            <Link
              to="/signin"
              className="text-[#36d3b7] text-sm hover:underline font-medium cursor-pointer"
            >
              Sign in
            </Link>
          </div>

          <Divider />

          <div className="text-center text-white text-sm mb-5">
            Sign up with
          </div>

          <SocialMediaLinks />
        </form>
      </div>
    </div>
  );
};

export default Register;
