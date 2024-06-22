import React, { useState } from "react";
// import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    state: "",
    dueDate: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    let validationErrors = {};
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.password) validationErrors.password = "Password is required";
    if (!formData.state) validationErrors.state = "State is required";
    if (!formData.dueDate) validationErrors.dueDate = "Due date is required";
    if (!formData.agree) validationErrors.agree = "You must agree to the terms";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Make API request
    try {
      const response = await axios.post(
        "https://api.example.com/signup",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#F6FFF5] py-8 w-5/6 mx-auto">
        <div className="container mx-auto w-3/4 lg:w-1/2">
          <div className="flex flex-row items-center">
            {/* <img
              src="path-to-your-image.jpg"
              alt="Empower your pregnancy"
              className="w-full h-auto"
            /> */}
            <div className="flex flex-col items-center">
              <div>
                <h1 className="text-center text-xl font-bold">
                  Empower your pregnancy journey with our AI companion
                </h1>
                <h2 className="text-center text-lg mt-2">Discover</h2>
                <h2 className="text-center text-lg">TrakMama today</h2>
              </div>
              <button className="mt-4 bg-[#389346] text-white py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto w-3/4 lg:w-1/2 mt-8">
        <p className="text-center">
          Already a member?{" "}
          <a href="/login" className="text-[#B252AA]">
            Log in
          </a>
        </p>
        <hr className="border-green-600 my-4" />
        <p className="text-center text-xl font-semibold">
          Enjoy your pregnancy journey
        </p>
        <p className="text-center text-lg">
          Get telehealth services at your fingertips delivered via emails and
          website
        </p>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#F6FFF5] border border-[#B252AA] p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4 relative w-full">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#F6FFF5] border border-[#B252AA] p-2 rounded"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <FaEyeSlash className="h-5 w-5 text-gray-500" />
              ) : (
                <FaEye className="h-5 w-5 text-gray-500" />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block">State of Residence</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full bg-[#F6FFF5] border border-[#B252AA] p-2 rounded"
            >
              <option value="" disabled>
                I live in Nigeria
              </option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Kano">Kano</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Port Harcourt">Port Harcourt</option>
            </select>
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">{errors.state}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="date"
              name="dueDate"
              placeholder="Due Date"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full bg-[#F6FFF5] border border-[#B252AA] p-2 rounded"
            />
            {errors.dueDate && (
              <p className="text-red-500 text-sm mt-1">{errors.dueDate}</p>
            )}
          </div>
          <p className="text-center">
            Don't know your due date?{" "}
            <a href="/calculate-due-date" className="text-[#B252AA]">
              Calculate my due date
            </a>
          </p>
          <p className="text-center mt-4">
            By continuing, you are confirming that you are 18 years or older and
            agree to our{" "}
            <a href="/terms" className="text-[#B252AA]">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-[#B252AA]">
              Privacy Policy
            </a>
            .
          </p>
          <p className="text-center mt-4">
            We may use your health information and data to run tests and make
            human-centered surveys to better our services.
          </p>
          <div className="mb-4 mt-4 flex justify-center">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2">I agree to the terms and conditions</span>
            </label>
            {errors.agree && (
              <p className="text-red-500 text-sm mt-1">{errors.agree}</p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#389346] text-white py-2 px-4 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
