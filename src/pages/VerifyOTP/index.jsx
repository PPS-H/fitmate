import React, { useState } from "react";
import Logo from "../../components/Logo";
import { useForm } from "../../hooks/useForm";
import { ForgotPasswordSchema } from "../../schema";
import Input from "../../components/Input";
import { handleInputChange } from "../../utils/helper";

const VerifyOTP = () => {
  const [otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value.length > 1) return;

    setOtp((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    } else if (!value && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

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
            Verify OTP
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full px-4 md:px-6">
          <div className="mb-4">
            <div className="w-full mt-[30px] flex gap-[20px] justify-center">
              {["first", "second", "third", "fourth"].map((name, index) => (
                <input
                  key={index}
                  className="border border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl text-[24px] w-[60px] h-[60px] text-center text-white"
                  type="number"
                  name={name}
                  min="0"
                  max="9"
                  value={otp[name]}
                  onChange={handleChange}
                />
              ))}
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button className="btn-pri mt-[40px] cursor-pointer" type="submit">
              Verify
            </button>
          </div>

          <button type="submit" className="btn-primary">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
