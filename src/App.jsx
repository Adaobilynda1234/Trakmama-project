//import './App.css';
import './index.css'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import {AboutUs} from "./pages/AboutUs";
import {ContactUs} from "./pages/Contact-us";





function App() {
  return (
    <>
      <Navbar />
      {/* defining react-router path */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/about-us" element={<AboutUs title="About Us" />} /> 
        <Route path="/contact-us" element={<ContactUs title="Contact Us"/>}/>
        
       
              </Routes>
    </>
  );
}

export default App;