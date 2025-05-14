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

const BasicInfo = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
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

  // Generate options for day, month and year dropdowns
  const dayOptions = Array.from({ length: 31 }, (_, i) => i + 1);
  const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const yearOptions = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

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
            Enter your info
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <Input
              type="text"
              placeholder="First Name"
              className="w-full h-12 md:h-14 bg-[#4c4c4c4c] rounded-lg border-0 text-white text-sm md:text-base pl-6 focus:ring-1 focus:ring-[#24cdd7] focus:outline-none"
              value={formData.firstName}
              name="firstName"
              onChange={(e) => handleInputChange(e, setFormData)}
              error={errors.firstName}
            />
          </div>

          <div className="mb-4">
            <Input
              type="text"
              placeholder="Last Name"
              className="w-full h-12 md:h-14 bg-[#4c4c4c4c] rounded-lg border-0 text-white text-sm md:text-base pl-6 focus:ring-1 focus:ring-[#24cdd7] focus:outline-none"
              value={formData.lastName}
              name="lastName"
              onChange={(e) => handleInputChange(e, setFormData)}
              error={errors.lastName}
            />
          </div>

          <div className="mb-6">
            <select
              className="w-full h-12 md:h-14 bg-[#4c4c4c4c] rounded-lg border-0 text-white text-sm md:text-base pl-6 pr-10 focus:ring-1 focus:ring-[#24cdd7] focus:outline-none appearance-none"
              value={formData.gender}
              name="gender"
              onChange={(e) => handleInputChange(e, setFormData)}
              style={{
                backgroundImage:
                  "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M6%209L12%2015L18%209%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
              }}
            >
              <option value="" disabled selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date of birth section */}
          <div className="mb-4">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
              Date of birth
            </h2>

            <div className="flex gap-3 mb-4">
              <div className="flex-1">
                <select
                  className="w-full h-12 md:h-14 bg-[#4c4c4c4c] rounded-lg border-0 text-white text-sm md:text-base pl-6 pr-10 focus:ring-1 focus:ring-[#24cdd7] focus:outline-none appearance-none"
                  value={formData.day}
                  name="day"
                  onChange={(e) => handleInputChange(e, setFormData)}
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M6%209L12%2015L18%209%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                  }}
                >
                  <option value="" disabled selected>
                    Day
                  </option>
                  {dayOptions.map((day) => (
                    <option key={`day-${day}`} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <select
                  className="w-full h-12 md:h-14 bg-[#4c4c4c4c] rounded-lg border-0 text-white text-sm md:text-base pl-6 pr-10 focus:ring-1 focus:ring-[#24cdd7] focus:outline-none appearance-none"
                  value={formData.month}
                  name="month"
                  onChange={(e) => handleInputChange(e, setFormData)}
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M6%209L12%2015L18%209%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                  }}
                >
                  <option value="" disabled selected>
                    Month
                  </option>
                  {monthOptions.map((month, index) => (
                    <option key={`month-${index}`} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <select
                  className="w-full h-12 md:h-14 bg-[#4c4c4c4c] rounded-lg border-0 text-white text-sm md:text-base pl-6 pr-10 focus:ring-1 focus:ring-[#24cdd7] focus:outline-none appearance-none"
                  value={formData.year}
                  name="year"
                  onChange={(e) => handleInputChange(e, setFormData)}
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M6%209L12%2015L18%209%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                  }}
                >
                  <option value="" disabled selected>
                    Year
                  </option>
                  {yearOptions.map((year) => (
                    <option key={`year-${year}`} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Height and Weight */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Height"
                  className="w-full h-12 md:h-14 bg-[#4c4c4c4c] rounded-lg border-0 text-white text-sm md:text-base pl-6 focus:ring-1 focus:ring-[#24cdd7] focus:outline-none"
                  value={formData.height}
                  name="height"
                  onChange={(e) => handleInputChange(e, setFormData)}
                  error={errors.height}
                />
              </div>

              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Weight"
                  className="w-full h-12 md:h-14 bg-[#4c4c4c4c] rounded-lg border-0 text-white text-sm md:text-base pl-6 focus:ring-1 focus:ring-[#24cdd7] focus:outline-none"
                  value={formData.weight}
                  name="weight"
                  onChange={(e) => handleInputChange(e, setFormData)}
                  error={errors.weight}
                />
              </div>
            </div>
          </div>

          {/* Next button */}
          <button
            type="submit"
            className="w-full h-12 md:h-14 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full text-black font-bold text-sm md:text-base transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default BasicInfo;
