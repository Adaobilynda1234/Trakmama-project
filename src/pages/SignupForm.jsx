import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import pregnancyimg from "../assets/Pregnancy test-rafiki 1.png";
import Signuplogo from "../assets/Traklogo.png";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    dueDate: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters long";
    if (!formData.dueDate) newErrors.dueDate = "Due date is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setIsLoading(true);
      signup(formData);
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white py-4">
      {isLoading && <Spinner />}
      <div className="flex justify-center align-center md:flex-row bg-[#EDF8EC] p-6 rounded-lg shadow-lg w-full max-w-5xl">
        <div className="hidden md:flex flex-col items-center mb-6 p-4 md:mb-0 md:mr-6 md:w-1/2">
          <div className="flex flex-start  items-center mb-8">
            <img src={Signuplogo} alt="Logo" className="w-12 h-12" />
            <p className="ml-0 font-bold">Trakmama</p>
          </div>

          <button className="py-6 px-24 mb-2 border bg-white font-bold rounded-full">
            Join us!
          </button>
          <img src={pregnancyimg} alt="Illustration" className="w-50 h-50" />
          <p className="text-center">Discover Trakmama Today</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
          <button className="w-full py-2 px-4 mb-4 border border-black rounded-lg flex items-center justify-center">
            Continue with <FaGoogle className="w-5 h-5 ml-4" />
          </button>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t"></div>
            <span className="mx-4">OR</span>
            <div className="flex-grow border-t"></div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="username"
                placeholder="Enter your name"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              {errors.username && (
                <p className="text-sm text-red-500">{errors.username}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 py-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
              {!errors.password && (
                <p className="text-sm text-gray-600 mt-1">
                  Must be at least 8 characters.
                </p>
              )}
            </div>
            <div>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              {errors.dueDate && (
                <p className="text-sm text-red-500">{errors.dueDate}</p>
              )}
              <p className="text-sm text-gray-600 mt-1">
                Don't know my due date?{" "}
                <a href="/calculate-due-date" className="text-[#B252AA]">
                  Calculate due date
                </a>
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              By continuing, you are confirming that you are 18 years older and
              you agree to our <span className="text-[#B252AA]">terms</span> and{" "}
              <span className="text-[#B252AA]">privacy policy</span>.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              We may use your health information and data to run tests and make
              human-centered surveys to better our services.
            </p>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#7EB97D] hover:bg-[gray] text-white rounded-lg"
            >
              Create Your Account
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-[#B252AA]">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
