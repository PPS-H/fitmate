import React, { useState, useEffect } from "react";
import Logo from "../../components/Logo";
import { useForm } from "../../hooks/useForm";
import { LoginFormSchema } from "../../schema";
import Input from "../../components/Input";
import { handleInputChange } from "../../utils/helper";
import Divider from "../../components/Divider";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import bgImg from "../../assets/bg-img1.png";

const initialState = {
  firstName: "",
  lastName: "",
  gender: "",
  day: "",
  month: "",
  year: "",
  height: "",
  weight: "",
};

const Goal = () => {
  const [selectedGoal, setSelectedGoal] = useState("Loose Weight");

  const goals = ["Loose Weight", "Gain muscle", "Maintain"];

  const { formData, setFormData, validate, errors } = useForm(
    LoginFormSchema,
    initialState
  );

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors = await validate();
    if (hasErrors) return;

    console.log("Form submitted:", formData);
  };

  return (
    <div
      className={`fixed inset-0 bg-black flex flex-col justify-center items-center px-4 py-6 md:py-12`}
    >
      <img
        src={bgImg}
        className={`absolute inset-0 right-0 w-full bg-cover bg-center bg-no-repeat opacity-40`}
      />
      {/* Background gradient blurs */}
      <div className="fixed w-64 h-64 md:w-96 md:h-96 top-0 left-0 bg-[#abc219] rounded-full blur-[100px] md:blur-[155px] opacity-30" />
      <div className="fixed w-64 h-64 md:w-96 md:h-96 top-1/4 right-0 bg-[#24cdd7] rounded-full blur-[100px] md:blur-[155px] opacity-30" />
      <div className="fixed w-64 h-64 md:w-96 md:h-96 bottom-0 left-10 bg-[#24cdd7] rounded-full blur-[100px] md:blur-[155px] opacity-40" />
      <div className="fixed w-64 h-64 md:w-96 md:h-96 bottom-0 right-0 bg-[#abc219] rounded-full blur-[100px] md:blur-[155px] opacity-40" />

      {/* Close button */}
      <div className="fixed top-6 left-6 z-20">
        <button className="text-white text-2xl font-bold hover:text-gray-300">
          ×
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg flex flex-col">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            What is your goal
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col space-y-4 mb-6">
            {goals.map((goal) => (
              <button
                key={goal}
                className={`rounded-full border transition-all ${
                  selectedGoal === goal
                    ? "p-[1px] bg-gradient-to-r from-green-400 to-cyan-400"
                    : "border-gray-600 bg-black bg-opacity-40 hover:bg-opacity-50"
                }`}
                onClick={() => handleGoalSelect(goal)}
              >
                <div
                  className={`w-full h-full rounded-full ${
                    selectedGoal === goal ? "bg-black bg-opacity-40" : ""
                  }`}
                >
                  <div className="flex justify-between items-center py-4 px-6">
                    <span className="text-white">{goal}</span>
                    {selectedGoal === goal && (
                      <span className="bg-white rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                        >
                          <defs>
                            <linearGradient
                              id="checkGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#4ade80" />
                              <stop offset="100%" stopColor="#22d3ee" />
                            </linearGradient>
                          </defs>
                          <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clipRule="evenodd"
                            fill="url(#checkGradient)"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Next button */}
          <button type="submit" className="btn-primary">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Goal;
