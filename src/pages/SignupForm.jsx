// src/components/SignUp.js
import React, { useState, useContext } from "react";
import { FaGoogle } from "react-icons/fa";
// import { AuthContext } from '../context/AuthContext';
import PregnancyImg from "../assets/Pregnancy test-rafiki 1.png";

const SignUp = () => {
  //   const { signUp } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (formData.password.length < 6)
      errors.password = "Password must be at least 6 characters";
    if (!formData.dob) errors.dob = "Date of birth is required";
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      await signUp(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Join us!</h2>
        <div className="flex justify-center mb-6">
          <img
            src={PregnancyImg}
            alt="Sign up"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <button className="w-full flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded mb-4">
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded mt-1"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded mt-1"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded mt-1"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="w-full p-2 border rounded mt-1"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded"
          >
            Create Your Account
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
