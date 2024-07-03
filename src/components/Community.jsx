
import React from "react"
import comunity1 from '../assets/comunity1.png'
import community2 from '../assets/comunity2.png'
import { NavLink } from 'react-router-dom';




const Community = ()=> {
    return (
       
        <section className="py-16  lg:mx-32">
            
      <div className="flex justify-normal md:flex-row md:flex-nonwrap md:justify-center gap-4"> 

           <div className=" relative flex flex-col justify-start">  
             <img src={comunity1} alt="community" className="  hidden sm:block" /> </div>   
         
        
        <p className='example-text  justify-stretch pt-28 font-sans' style={{textAlign:'center '}}   > 
          <span className="font-extrabold" >Join Our Community </span><pre/> There is a safe, supportive group for you whether you are <pre/> 
        pregnant,caring for a baby or just starting a family 
              
         </p>  </div>
            
         <span className="relative  flex flex-center justify-end  ">
         <button className=" bg-[#7eb97d]  hover:bg-[#d0f3cc] w-32 h-12 mt-9 mr-6 
                           text-[#d8d0d4] font-normal rounded text-center  "> <NavLink to={"/SignUp"}>Join Now</NavLink>
                                </button>    

          <img src={community2} alt="community" className="   hidden sm:block" />  
              <span/>                            
                     

    
    </span>
    
        
         
       </section>
       
    )
}

export default Community;

