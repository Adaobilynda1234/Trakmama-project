import React, { useState } from 'react'; // Import React and useState hook
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import menu icons
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';





const Navbar = () => {
    // State to handle the navbar's open/close 
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

                   <li className='hover:underline text-black'> <NavLink to={"/"}> Home </NavLink> </li>
                   <li className='hover:underline text-black'> <NavLink to={"/about-us"}> About Us </NavLink> </li>
                    <li className='hover:underline text-black'><NavLink to={"/contact-us"}> Contact Us </NavLink></li>
         

            </ul> 
                       {/* Any other navbar elements */}  

        <div className='hidden md:flex space-x-4'>

           <button className='bg-[#7eb97d]  hover:bg-[#d0f3cc] md:w-20
                           text-[#d8d0d4] font-normal rounded-lg border-2 
                           border-[#fdf4ff] shadow-2xl  shadow-green-50  '><NavLink to={"/SignUp"}>SignUp</NavLink>
           </button>

         <button className='bg-[#ffffff] px-4 py-2 text-[hsl(305,38%,57%)] 
                     font-small rounded-lg hover:bg-[#d0f3cc]
                     border-2 border-[#bc69b5] shadow-2xl shadow-[#c0dfbf]'> <NavLink to={"/LogIn"}>LogIn</NavLink>

         </button>

                </div>
                
                {/* Hamburger Menu Icon for Mobile */}
        <div className=' block md:hidden right-6 fixed text-gray-700 ' onClick={ToggleNavBar}>            
                    {/* Toggle between open and close icons based on openNav state */}
                    {!openNav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
        </div>

                {/* Mobile Navigation Menu */}
                <div className={!openNav ? 'left-[0%] fixed top-0 w-[60%] bg-[#d0f3cc] h-full z-40 border-r-gray-800 pl-4 pt-4 ease-in-out duration-500 md:hidden' : "fixed left-[100%] ease-in-out duration-500"}>
                    {/* Logo in Mobile Menu */}
                    
                    
                    {/* Mobile Navigation Links */}
                    <ul className='block space-y-4 pt-8'>
                        <li className='border-b border-[#d0f3cc] text-black font-sans'> <NavLink to={"/"}> Home </NavLink>  </li>
                        <li className='border-b border-[#d0f3cc] text-black font-sans'> <NavLink to={"/about-us"}> About Us </NavLink>  </li>
                        <li className='border-b border-[#d0f3cc] text-black font-sans' > <NavLink to={"/blogs"}> Blogs </NavLink> </li>
                        <li className='border-b border-[#d0f3cc] text-black font-sans'> <NavLink to={"/contact-us"}> Contact Us </NavLink> </li>
                    </ul>
                    
                    {/* Mobile Buttons */}
                    <div className='block space-y-4 pt-5'>
                        <button className='bg-[#7eb97d] w-full py-2 text-[#bc69b5] hover:bg-[#376931] font-normal rounded-md block'> <NavLink to={"/LogIn"}>Log In</NavLink></button>
                        <button className='bg-[#7eb97d] w-full py-2 text-[#d8d0d4] hover:bg-[#5bbd51] font-normal rounded-md'> <NavLink to={"/SignUp"}>Sign Up</NavLink> </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar; // Export Navbar component