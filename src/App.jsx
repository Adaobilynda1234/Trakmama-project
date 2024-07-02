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
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./Context/Auth";
import PrivateRoute from "./components/PrivateRoute";
import MainContent from "./components/MainContent";
import chatAi from "./components/ChatAi";
import ChatAi from "./components/ChatAi";

function App() {
  return (
    <>
      <AuthProvider>
        {/* <Navbar /> */}
        {/* defining react-router path */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<MainContent />} />
            {/* <Route path="profile" element={<Profile />} /> */}
            <Route path="chat" element={<ChatAi />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
          <Route path="/about-us" element={<AboutUs title="About Us" />} />
          <Route
            path="/contact-us"
            element={<ContactUs title="Contact Us" />}
          />
          <Route path="notification" element={<Notification title FaBell />} />
          <Route path="website" element={<Website title CiGlobe />} />
          <Route path="blogs" element={<Blogs title Blogs />} />
        </Routes>
        {/* <Footer/> */}
      </AuthProvider>
    </>
  );
}

export default App;
