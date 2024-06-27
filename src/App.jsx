//import './App.css';
import './index.css'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import {AboutUs} from "./pages/AboutUs";
import {ContactUs} from "./pages/Contact-us";
import {Notification} from "./pages/FaBell";
import { Website } from './pages/CiGlobe';
<<<<<<< HEAD
import {Blogs} from "./pages/BlogsPage";

=======
import {Blogs} from "./pages/BlogsPage"
>>>>>>> 66028c46c55f1b80fe0413384cf436c87f0e9ab2


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
        <Route path="notification" element={<Notification title FaBell/>}/>
         <Route path="website" element ={<Website title CiGlobe/>}/>
         <Route path= "blogs" element ={<Blogs title Blogs/> }/>
<<<<<<< HEAD
        
              </Routes>

              <Footer/>
=======
              </Routes>
>>>>>>> 66028c46c55f1b80fe0413384cf436c87f0e9ab2
    </>
  );
}

export default App;