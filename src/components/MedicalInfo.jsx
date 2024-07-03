import React, { useState } from "react";

const MedicalInfoForm = () => {
  const [formData, setFormData] = useState({
    lastMenstrualPeriod: "",
    dueDate: "",
    pregnantBefore: "",
    timesPregnant: "",
    complications: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.lastMenstrualPeriod) {
      newErrors.lastMenstrualPeriod = "Last menstrual period date is required";
    }
    if (!formData.dueDate) {
      newErrors.dueDate = "Estimated due date is required";
    }
    if (!formData.pregnantBefore) {
      newErrors.pregnantBefore = "This field is required";
    }
    if (
      formData.pregnantBefore.toLowerCase() === "yes" &&
      !formData.timesPregnant
    ) {
      newErrors.timesPregnant = "Please specify how many times";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert("Medical info saved successfully");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white border-none  border-gray-400 md:max-w-2xl lg:max-w-3xl">
      <h2 className="text-xl font-bold mb-4">Medical Information</h2>
      <h3 className="text-lg font-semibold mb-4">Form 1: Pregnancy History</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">
            a. What's your last menstrual period date?
          </label>
          <input
            type="date"
            name="lastMenstrualPeriod"
            value={formData.lastMenstrualPeriod}
            onChange={handleChange}
            className="w-full px-4 py-2 border-[#dd7dd5] border-2 rounded-md"
          />
          {errors.lastMenstrualPeriod && (
            <p className="text-red-500">{errors.lastMenstrualPeriod}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            b. What's your estimated due date?
          </label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border-[#dd7dd5] border-2 rounded-md"
          />
          {errors.dueDate && <p className="text-red-500">{errors.dueDate}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            c. Have you been pregnant before?
          </label>
          <input
            type="text"
            name="pregnantBefore"
            value={formData.pregnantBefore}
            onChange={handleChange}
            className="w-full px-4 py-2 border-[#dd7dd5] border-2 rounded-md"
          />
          {errors.pregnantBefore && (
            <p className="text-red-500">{errors.pregnantBefore}</p>
          )}
        </div>
        {formData.pregnantBefore.toLowerCase() === "yes" && (
          <div className="mb-4">
            <label className="block text-gray-700">
              d. If yes, how many times? If no, skip?
            </label>
            <input
              type="number"
              name="timesPregnant"
              value={formData.timesPregnant}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.timesPregnant && (
              <p className="text-red-500">{errors.timesPregnant}</p>
            )}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">
            e. Were there complications with previous pregnancies? Indicate.
          </label>
          <input
            type="text"
            name="complications"
            value={formData.complications}
            onChange={handleChange}
            className="w-full px-4 py-2 border-[#dd7dd5] border-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-[#dd7dd5] text-white rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default MedicalInfoForm;
