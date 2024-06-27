import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import PricingSection from "./components/PricingSection";
import './styles/global.css'; // Import your global CSS file

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
      </Routes>
      <div>
            <Header />
            <div>
              <br/> 
              <br/>
               <h5 style={{margin: '0 auto', textAlign:'center', fontWeight:'bold', fontSize:'23px'}} className="example-text">Pricing/Payment Plan</h5>
               <br/>
              </div>
            <PricingSection />
        </div>
    </>
  );
}

export default App;
