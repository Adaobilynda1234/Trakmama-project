import React, { useState } from 'react'; // Import React and useState hook
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import menu icons
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaBell } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";




const Navbar = () => {
    // State to handle the navbar's open/close status
    const [openNav, setOpenNav] = useState(true);

    // Function to toggle the navbar's visibility
    const ToggleNavBar = () => {
        setOpenNav(!openNav);
    };

return (
        <>
            {/* Main Navigation Bar */}
  <nav className=' bg-[#d0f3cc]  text-green-400   flex justify-between items-center  h-20 mx-auto px-12 '>
                                  
                                    {/* Logo */}                                                        
        <img   className= 'w-13 h-14 ml-12' src={logo}alt="logo" />
                            
                   {/* Desktop Navigation Links */}
           <ul className='  text-green-400g font-semibold   hidden md:flex space-x-14'>

                   <li className='hover:underline'> <NavLink to={"/"}> Home </NavLink> </li>
                   <li className='hover:underline'> <NavLink to={"/about-us"}> About Us </NavLink> </li>
                    <li className='hover:underline'><NavLink to={"/contact-us"}> Contact Us </NavLink></li>
                    <li className='hover:underline'><NavLink to={"/blogs"}> Blogs </NavLink></li>  
        <div className="flex flex-row-reverse space-x-4 space-x-reverse pt-2 text-black" >                 

                   <NavLink to={"/notification"}>  <FaBell  />  </NavLink> 
                   <NavLink to={"/website"}> <CiGlobe />  </NavLink>  

        </div>

            </ul> 
                       {/* Any other navbar elements */}  

        <div className='hidden md:flex space-x-4'>

           <button className='bg-[#7eb97d]  hover:bg-[#d0f3cc] md:w-20
                           text-[#d8d0d4] font-normal rounded-lg border-2 
                           border-[#fdf4ff] shadow-2xl  shadow-green-50  '>SignUp
           </button>

         <button className='bg-[#ffffff] px-4 py-2 text-[hsl(305,38%,57%)] 
                     font-small rounded-lg hover:bg-[#d0f3cc]
                     border-2 border-[#bc69b5] shadow-2xl shadow-[#c0dfbf]'>LogIn

         </button>

                </div>
                
                {/* Hamburger Menu Icon for Mobile */}
        <div className=' block md:hidden right-6 fixed ' onClick={ToggleNavBar}>            
                    {/* Toggle between open and close icons based on openNav state */}
                    {!openNav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40}/>}
        </div>

                {/* Mobile Navigation Menu */}
                <div className={!openNav ? 'left-[0%] fixed top-0 w-[60%] bg-[#d0f3cc] h-full z-40 border-r-gray-800 pl-4 pt-4 ease-in-out duration-500 md:hidden' : "fixed left-[100%] ease-in-out duration-500"}>
                    {/* Logo in Mobile Menu */}
                    
                    
                    {/* Mobile Navigation Links */}
                    <ul className='block space-y-4 pt-8'>
                        <li className='border-b border- [#bc69b5]'> <NavLink to={"/"}> Home </NavLink>  </li>
                        <li className='border-b border-[#fdf4ff]'> <NavLink to={"/about-us"}> About Us </NavLink>  </li>
                        <li className='border-b border-[#fdf4ff]'> <NavLink to={"/blogs"}> Blogs </NavLink> </li>
                        <li className='border-b border-[#fdf4ff]'> <NavLink to={"/contact-us"}> Contact Us </NavLink> </li>
                    </ul>
                    
                    {/* Mobile Buttons */}
                    <div className='block space-y-4 pt-5'>
                        <button className='bg-[#ffffff] w-full py-2 text-[#bc69b5] font-normal rounded-md block'>Log In</button>
                        <button className='bg-[#7eb97d] w-full py-2 text-[#d8d0d4] font-normal rounded-md'>Sign Up</button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar; // Export Navbar component