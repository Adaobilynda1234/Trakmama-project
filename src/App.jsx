import React, { useEffect } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignupForm from "./pages/SignupForm";
import ErrorPage from "./pages/ErrorPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contact-us";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./Context/Auth";
import PrivateRoute from "./components/PrivateRoute";
import MainContent from "./components/MainContent";
import MedicalInfo from "./components/MedicalInfo";
import TodoList from "./components/TodoList";

import ChatAi from "./components/ChatAi";
import Pregnancytracker from "./components/Pregnancytracker";
import Pregnancy from "./components/Pregnancy";
import Notes from "./components/Notes";
import Games from "./components/Games";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Communityfeature from "./components/CommunityFeature";
import SubSection from "./components/Subscription";
import Paymentform from "./pages/Paymentform";
import Healthtracker from "./components/Healthtracker";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = function () {
      window.voiceflow.chat.load({
        verify: { projectID: "666d699b63e4e9ccf97588d5" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(script, s);

    // Cleanup on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <AuthProvider>
        {/* defining react-router path */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/checkout" element={<Paymentform />} />
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
            <Route path="community" element={<Communityfeature />} />
            <Route path="pregnancytracker" element={<Pregnancytracker />} />
            <Route path="healthtracker" element={<Healthtracker />} />
            <Route path="pregnancy" element={<Pregnancy />} />
            <Route path="notes" element={<Notes />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="payment" element={<SubSection />} />
            <Route path="games" element={<Games />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
          <Route path="/about-us" element={<AboutUs title="About Us" />} />
          <Route
            path="/contact-us"
            element={<ContactUs title="Contact Us" />}
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
