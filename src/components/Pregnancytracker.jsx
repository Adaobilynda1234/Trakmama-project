import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const PregnancyTracker = () => {
  // State for tracking symptoms
  const [symptoms, setSymptoms] = useState([]);
  const [newSymptom, setNewSymptom] = useState("");

  // Function to add a new symptom
  const addSymptom = () => {
    if (newSymptom.trim() !== "") {
      setSymptoms([...symptoms, newSymptom.trim()]);
      setNewSymptom("");
    }
  };

  // Function to remove a symptom
  const removeSymptom = (index) => {
    const updatedSymptoms = [...symptoms];
    updatedSymptoms.splice(index, 1);
    setSymptoms(updatedSymptoms);
  };

  return (
    <div className="mx-auto max-w-lg p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Pregnancy Tracker</h2>

      {/* Symptom tracker */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Track Symptoms</h3>
        <div className="flex items-center">
          <input
            type="text"
            className="w-full px-3 py-2 mr-2 border rounded-lg focus:outline-none"
            placeholder="Enter symptom"
            value={newSymptom}
            onChange={(e) => setNewSymptom(e.target.value)}
          />
          <button
            className="bg-[#dd7dd5] hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
            onClick={addSymptom}
          >
            <IoIosAddCircleOutline className="mr-2" />
            Add
          </button>
        </div>
        <ul className="mt-2">
          {symptoms.map((symptom, index) => (
            <li key={index} className="flex items-center py-1">
              <span className="mr-2">{symptom}</span>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => removeSymptom(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Personalised updates */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Personalised Updates</h3>
        {/* Placeholder for personalised updates */}
        <p className="text-gray-600">Coming soon...</p>
      </div>

      {/* Log and track fetal development */}
      <div>
        <h3 className="text-lg font-medium mb-2">Fetal Development</h3>
        {/* Placeholder for fetal development tracking */}
        <p className="text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
};

export default PregnancyTracker;
