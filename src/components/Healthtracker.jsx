import React, { useState } from "react";

const HealthDataForm = () => {
  const [formData, setFormData] = useState({
    Age: "",
    Body_Temperature: "",
    Heart_Rate: "",
    Systolic_Blood_Pressure: "",
    Diastolic_Blood_Pressure: "",
    BMI: "",
    Blood_Glucose_HbA1c: "",
    Blood_Glucose_Fasting: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(
      "https://pregnancy-risk-flask.onrender.com/api/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const result = await response.json();
    console.log(result);
    setPrediction(result);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Health Data Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Age</label>
            <input
              type="number"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md hover:border-[#dd7dd5]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Body Temperature (°C)
            </label>
            <input
              type="number"
              step="0.1"
              name="Body_Temperature"
              value={formData.Body_Temperature}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md hover:border-[#dd7dd5]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Heart Rate (bpm)
            </label>
            <input
              type="number"
              name="Heart_Rate"
              value={formData.Heart_Rate}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md hover:border-[#dd7dd5]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Systolic Blood Pressure (mm Hg)
            </label>
            <input
              type="number"
              name="Systolic_Blood_Pressure"
              value={formData.Systolic_Blood_Pressure}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md hover:border-[#dd7dd5]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Diastolic Blood Pressure (mm Hg)
            </label>
            <input
              type="number"
              name="Diastolic_Blood_Pressure"
              value={formData.Diastolic_Blood_Pressure}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md hover:border-[#dd7dd5]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">BMI</label>
            <input
              type="number"
              step="0.1"
              name="BMI"
              value={formData.BMI}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md hover:border-[#dd7dd5]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Blood Glucose HbA1c (%)
            </label>
            <input
              type="number"
              step="0.1"
              name="Blood_Glucose_HbA1c"
              value={formData.Blood_Glucose_HbA1c}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md hover:border-[#dd7dd5]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Blood Glucose Fasting (mg/dL)
            </label>
            <input
              type="number"
              name="Blood_Glucose_Fasting"
              value={formData.Blood_Glucose_Fasting}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md hover:border-[#dd7dd5]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#dd7dd5] hover:bg-[gray] text-white p-2 rounded-md"
          >
            Submit
          </button>
        </form>
        {isLoading && (
          <div className="flex justify-center mt-4">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {prediction && (
          <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded">
            <h2 className="text-lg font-bold">Prediction Result</h2>
            <p>{JSON.stringify(prediction, null, 2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthDataForm;
