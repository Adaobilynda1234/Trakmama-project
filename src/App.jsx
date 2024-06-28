//import './App.css';
import "./index.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SignupForm from "./pages/SignupForm";
import ErrorPage from "./pages/ErrorPage";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/Contact-us";
import { Notification } from "./pages/FaBell";
import { Website } from "./pages/CiGlobe";
import { Blogs } from "./pages/BlogsPage";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* defining react-router path */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/about-us" element={<AboutUs title="About Us" />} />
        <Route path="/contact-us" element={<ContactUs title="Contact Us" />} />
        <Route path="notification" element={<Notification title FaBell />} />
        <Route path="website" element={<Website title CiGlobe />} />
        <Route path="blogs" element={<Blogs title Blogs />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
