//import './App.css';
import "./index.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
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
import MedicalInfo from "./components/MedicalInfo";
import TodoList from "./components/TodoList";
// import Hidenavbar from "./components/Hidenavbar";
import ChatAi from "./components/ChatAi";
import Pregnancytracker from "./components/Pregnancytracker";
import Pregnancy from "./components/Pregnancy";
import Notes from "./components/Notes";
import Games from "./components/Games";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import CommunityFeature from "./components/CommunityFeature";

function App() {
  return (
    <>
      <AuthProvider>
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
            <Route path="chat" element={<ChatAi />} />
            <Route path="medical" element={<MedicalInfo />} />
            <Route path="todolist" element={<TodoList />} />
            <Route path="community" element={<CommunityFeature />} />
            <Route path="pregnancytracker" element={<Pregnancytracker />} />
            <Route path="pregnancy" element={<Pregnancy />} />
            <Route path="notes" element={<Notes />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="games" element={<Games />} />
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
      </AuthProvider>
    </>
  );
}

export default App;
