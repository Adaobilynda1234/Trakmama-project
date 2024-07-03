import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/Auth";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import LoginImg from "../assets/cuate.png";
import Loginlogo from "../assets/Traklogo.png";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    await login(email, password, () => navigate("/dashboard"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl p-6 flex flex-col lg:flex-row bg-[#EDF8EC] rounded-lg shadow-md">
        <div className="hidden lg:block w-1/2 p-6">
          <div className="flex flex-start  items-center mb-8">
            <img src={Loginlogo} alt="Logo" className="w-12 h-12" />
            <p className="ml-0 font-bold">Trakmama</p>
          </div>
          <button className="py-6 px-20 mb-2 border bg-white font-bold rounded-full">
            Welcome us!
          </button>
          <img src={LoginImg} alt="Image" className="mb-4  h-40" />
          <h2 className="text-xl font-bold text-center">
            Enjoy your pregnancy journey
          </h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Get Telehealth services at your fingertips delivered via emails and
            on the website.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg">
          <h2 className="text-center text-2xl font-bold mb-4">Log in</h2>
          <p className="text-center mb-6">
            Empower your pregnancy journey with our AI companion
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <a href="/forgot-password" className="text-sm text-[#B252AA]">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#7EB97D] text-white rounded hover:bg-gray"
            >
              Log in
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t"></div>
            <span className="mx-4">OR</span>
            <div className="flex-grow border-t"></div>
          </div>
          <button className="w-full py-2 border rounded flex items-center justify-center">
            Continue with <FaGoogle className="ml-2" />
          </button>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#B252AA]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
