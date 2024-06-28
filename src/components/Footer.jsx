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
  <div className="sm:px-10 py-12 h-full"> 
     <div className="grid  grid-cols-1 gap-4 md:grid-cols-2 justify-end ">
      <div>
    <img src={logo2} alt="logo-ct" className=" h-23 ml-12 w-33 pt-16" />  
    <article className=" grid grid-cols-1 justify-between gap-2 md:grid-cols-2 pt-6   ">
       We are dedicated to simplifying your pregnancy journey with amazing features. 
         </article>
    </div>
      <div className="grid justify-between grid-cols-3 gap-4 pt-11">
        <ul >          
          <p
            className="block mb-3 font-sans text-sm antialiased font-medium leading-normal text-[#7eb97d] opacity-40">
            AboutUs
          </p>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Advertisement
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Careers
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Terms of Use
            </a>
          </li>
        </ul>
        <ul>
          <p
            className="block mb-3 font-sans text-sm antialiased font-medium leading-normal text-[#7eb97d] opacity-40">
           Pregnancy
          </p>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              PostNatalCare
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              CustomerCare
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Payment deals
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              News
            </a>
          </li>
        </ul>
        <ul>
          <p
            className="block mb-3 font-sans text-sm antialiased font-medium leading-normal text-[#7eb97d] opacity-40">
            Resource
          </p>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              A.I Medicine
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              Tracker
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
              community
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-[#7eb97d]">
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
        <FaInstagramSquare className='w-8 h-8  text-[#f44336]'/>
        </a>
        <a href="#"
          className="block font-sans  text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
          <ImPinterest2 className='w-8 h-8  text-[#b71c1c]'/>
          
        </a>
       
        <a href="#"
          className="block font-sans  text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
         <LuYoutube className='w-8 h-8  text-[#c62828]'/>
              
        </a>

        <a href="#"
          className="block font-sans  ext-base antialiased font-light leading-relaxed transition-opacity  text-inherit opacity-80 hover:opacity-100">
          
          <AiFillFacebook className='w-8 h-8  text-[#5c6bc0]' />
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