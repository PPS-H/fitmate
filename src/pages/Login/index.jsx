import React, { useState } from "react";
import Logo from "../../components/Logo";
import { useForm } from "../../hooks/useForm";
import { LoginFormSchema } from "../../schema";
import Input from "../../components/Input";
import { handleInputChange } from "../../utils/helper";
import Password from "../../components/Password";
import Divider from "../../components/Divider";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import { Link } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const [rememberPassword, setRememberPassword] = useState(false);
  const { formData, setFormData, validate, errors } = useForm(
    LoginFormSchema,
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

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberPassword}
                onChange={() => setRememberPassword(!rememberPassword)}
                className="w-4 h-4 rounded-sm border border-solid border-[#979797] accent-[#24cdd7]"
              />
              <label
                htmlFor="remember"
                className="text-[#979797] text-xs md:text-sm cursor-pointer"
              >
                Remember Password
              </label>
            </div>
            <Link
              className="text-neutral-300 text-xs md:text-sm font-medium hover:text-[#24cdd7] transition-colors cursor-pointer"
              to="/forgot-password"
            >
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn-primary">
            Login
          </button>

          <div className="text-center mb-8">
            <span className="text-white text-sm">Don't have an account? </span>
            <Link
              className="text-[#36d3b7] text-sm hover:underline font-medium cursor-pointer"
              to="/signup"
            >
              Sign up
            </Link>
          </div>

          <Divider />

          <div className="text-center text-white text-sm mb-5">
            Sign in with
          </div>

          <SocialMediaLinks />
        </form>
      </div>
    </div>
  );
};

export default Login;
