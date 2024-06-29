import React from 'react'
import logo2 from '../assets/logo2.png';
import { AiFillFacebook } from "react-icons/ai";
import { LuYoutube } from "react-icons/lu";
import { ImPinterest2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = ()=>{
    return (
        <div> 
            <footer className="  bg-[#d0f3cc]  text-black   ">
  <div className="sm:px-12 pt-1 h-full"> 
     <div className="grid  grid-cols-1 gap-4 md:grid-cols-2 justify-end ">
      <div className='flex flex-col items-center md:grid-cols-3 font-serif'>
    <img src={logo2} alt="logo-ct" className="  w-30 h-21 ml-11 pt-11" />  
    
       <p className='mt-4 md:col-span-3 text-center'>
       <span className='block'>We are dedicated to</span>
       <span className='block'>simplifying your pregnancy </span>
       <span className='block'>journey with amazing features.</span>
        </p>
        
    </div>
      <div className="grid justify-between grid-cols-2 gap-4 pt-11 pb-0">
        <ul >          
          <p
            className="block mb-2 font-sans text-sm antialiased font-small leading-normal text-gray-700">
            AboutUs
          </p>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Advertisement
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Careers
            </a>
          </li>
    
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Terms Of Use
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Customer Care
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              NewsLetter
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Terms of Use
            </a>
          </li>
        </ul>
        <ul>
          <p
            className="block mb-3 font-sans text-sm antialiased font-small leading-normal text-gray-700 ">
           Pregnancy
          </p>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              PostNatalCare
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              CustomerCare
            </a>
          </li>    
          <li>
            </li>   
                        
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Appoitments
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Quiries
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              community
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-sm font-small leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Library
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      className="flex flex-col items-center justify-center w-full py-1 mt-12 border-t border-[#64748b] md:flex-row md:justify-between">
     <p  className="block mb-4 font-sans text-sm antialiased font-normal justfy-end  text-center text-blue-gray-900 md:mb-0">
      Trakmama,Inc </p>
       
      <div className=" grid  grid-cols-2 gap-3 md:grid-cols-4 justify-end pt-5">
        <a href="#"
          className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
        <FaInstagramSquare className='w-6 h-6  text-[#f44336]'/>
        </a>
        <a href="#"
          className="block font-sans  text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
          <ImPinterest2 className='w-6 h-6  text-[#b71c1c]'/>
          
        </a>
       
        <a href="#"
          className="block font-sans  text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
         <LuYoutube className='w-6 h-6  text-[#c62828]'/>
              
        </a>

        <a href="#"
          className="block font-sans  ext-base antialiased font-light leading-relaxed transition-opacity  text-inherit opacity-80 hover:opacity-100">
          
          <AiFillFacebook className='w-6 h-6  text-[#5c6bc0]' />
        </a>
        </div>
<div className=''>
         <p
        
       className=" block mb-4 font-sans text-sm antialiased font-normal justfy-end  text-center text-blue-gray-900 opacity-40 md:mb-0 ">
        Copyright© 2024 Trakmama
      </p>
      </div>
      </div>
    </div>
  
</footer>
      
      </div>
    )

};

export default Footer