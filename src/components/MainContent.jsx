// src/pages/MainContent.jsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PregnancyImage from "../assets/Frame 1000005013.png"; // Make sure to have an image at this path

const MainContent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };
  // Function to format the date for display (optional)
  const formatDate = (dateObj) => {
    return dateObj.toLocaleDateString(); // Adjust format as needed
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-2">
      <div className="w-full lg:w-1/2 p-0">
        <h2 className="text-2xl font-bold mb-4">Set an Appointment</h2>
        <p className="bg-[#DD7DD5] mb-5 p-4 text-white rounded-tr-[10px] rounded-br-[10px] font-bold w-64">
          Chosen appointment Date: {formatDate(date) || "No Date Selected"}
        </p>
        <Calendar onChange={onChange} value={date} />
        {/* <p>your appointment date is {date}</p> */}
      </div>
      <div className="w-full lg:w-1/2  p-0 flex justify-center md:justify-start">
        <img
          src={PregnancyImage}
          alt="Pregnancy"
          className="max-w-[280px] h-[380px] rounded"
        />
      </div>
    </div>
  );
};

export default MainContent;
