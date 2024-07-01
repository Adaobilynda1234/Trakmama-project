import React from "react"
import comunity1 from '../assets/comunity1.png'
import community2 from '../assets/comunity2.png'





const Community = ()=> {
    return (
       
        <div className="h-screen flex justify-center items-center relative  ">
            
      <div className="flex flex-row me-72 mb-96">   
           <div className="">
             <img src={comunity1} alt="community" className=" pl-10 h-38" /> </div>
    
    
    <p className="text-base text-gray-600 pt-24 font-sans"> 
        <span className="block text-xl font-bold">Join Our Community </span>
        <span className=" block">There's a safe, supportive group for you whether you're  </span>
           <span>pregnant,caring for a baby or just starting a family</span>
           </p>
                  
  </div >
  <div className="col-start-2">
  <div className=" absolute right-0 bottom-5 row-span-2 col-span-2 mb-56">    
        <div className="flex flex-row">
            <div >  <button className=" bg-[#7eb97d]  hover:bg-[#d0f3cc] lg:w-32 h-12 mt-9 mr-6
                           text-[#d8d0d4] font-normal rounded text-center ">Join Now
        </button>
        </div>
          

    <img src={community2} alt="community" className="w-25 h-25 mr-20 " /> </div></div>
        </div>
         
       </div>
       
    )
}

export default Community;