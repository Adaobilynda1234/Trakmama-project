import React from "react";

  
  const WhatWevalue = () => {
   return (
    <div className="justify-center">     

   <h1 className="text-center text-xl py-5 pt-10 font-serif">What We Value</h1> 
      <div className="flex flex-wrap justify-normal px-20  ">
    
      <div  className=" border-2 border-[#d4e7d3] rounded-lg p-10 text-center  m-10 w-64 h-auto  flex-row justify-between md:items-center "> 
        <h3 className="block mt-1 text-lg leading-tight font-medium text-black  font-sans">Empathy</h3> 
        <p className="text-gray-600 text-md font-sans mt-8"> we are commited to providing compassionate and supportive resources. </p> 
        </div>
      <div className=" object-top border-2 border-[#d4e7d3] rounded-lg p-10 text-center  m-10 w-64 h-auto   flex-col justify-between md:items-center">
        <h3 className="block mt-1 text-lg leading-tight font-medium text-black  font-sans ">Comunity</h3>
        <p className="text-gray-600 text-md font-sans mt-8"> we foster a great sense of community connecting expectant mother with the like minds. </p>
        </div>
      <div className="border-2 border-[#d4e7d3] rounded-lg p-10 text-center  m-10 w-64 h-auto flex flex-col justfy-between">
<h3 className="block mt-1 text-lg leading-tight font-medium text-black  font-sans">Innovation </h3>
<p className="text-gray-600 text-md font-sans mt-8 ">We leverage A.I to deliver advanced and personalized insights. </p>
      </div>
      <div className=" border-2 border-[#d4e7d3] rounded-lg p-10 text-center  m-10 w-64 h-auto flex flex-col justify-between"> 
      <h3 className="block mt-1 text-lg leading-tight font-medium text-black  font-sans"> Trust</h3>
      <p className="text-gray-600 text-md font-sans mt-8">We prioritize user privacy and data security ensuring users information are protected</p>
      </div>
      <div className=" border-2 border-[#d4e7d3] rounded-lg p-10 text-center  m-10 w-64 h-auto flex flex-col justify-between  ">
      <h3 className=" block mt-1 text-lg leading-tight font-medium text-black  font-sans"> Inclusivity</h3>
      <p className="text-gray-600  text-md font-sans mt-8">We offer resources and support catering to diverse needs of expectant mothers</p>
      
      </div>
      
      </div> 
     
      </div> 
      
   );
 };

export default WhatWevalue;