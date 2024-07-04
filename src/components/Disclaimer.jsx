import React from "react";

const Disclaimer = () => {
  return (
    <div className="    ">
      <h3 className="  text-lg  text-center mb-0 font-medium text-black  font-sans">
        Disclaimer
      </h3>

      <p className="   text-center  md:items-center text-gray-600 text-lg font-sans mt-0">
        The Ai-generated advice and suggestions are intended to complement,not
        replace,the relationship between a patient and their healthcare provider{" "}
        <pre />
        Always Consult with a qualified healthcare professional regarding any
        medical concerns. For more information, see our
        <a href="/" className="text-black-500  underline hover:underline-">
          {" "}
          Terms of Use.
        </a>{" "}
      </p>
    </div>
  );
};

export default Disclaimer;
