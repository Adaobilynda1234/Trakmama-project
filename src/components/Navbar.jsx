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
            <nav className=' bg-[#f0fdf4]  text-black   flex justify-between items-center h-16 mx-auto px-5 '>
                                    {/* Logo */}     
                    <div className='hidden md:flex space-x-6'>

                    <img   className= 'w-13 h-14' src={logo}alt="logo" />
</div>                            
                                                     
         {/* Any other navbar elements */}    
                       
                 <form className='max-w-sm px-4'> 
                  <div className='relative'> 
                    <svg xmlns='http://www.w3.or/2000/svg' className='absolute top-0 bottom-0 w-6 h-6 my-auto
                    text-[#4ade80] left-3' fill='none' viewBox='0 0 24 24' stroke='CurrentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7  0 11-14 0 7 7 0 0114 0z'/>                      

                    </svg>
<input type='text' placeholder='Search or Ask AI Doctor'
className='w-full py-2 pl-9 pr-9 text-[#7eb97d] border rounded-md outline-none
 bg-[#f9d9f4] focus:bg-#4ade80[] focus:border-[#4ade80]'
/>


                  </div>
                 </form>
                 <div>
                 <CiGlobe className="text-4xl"/> 
                 </div>
                

                 <FaBell className="text-3xl ml-" />
                   
                             
                {/* Desktop Buttons */}
                <div className='hidden md:flex space-x-4'>
                    <button className='bg-[#7eb97d] px-4 py-2 text-[#d8d0d4] font-bold rounded-md border-2 
                     border-[#fdf4ff] shadow-2xl  shadow-green-50  '>Sign Up</button>

                    <button className='bg-[#ffffff] px-4 py-1 text-[#bc69b5] font-bold rounded-md
                     border-2 border-[#bc69b5] shadow-2xl shadow-[#c0dfbf]'>Log In</button>
                </div>
                
                {/* Hamburger Menu Icon for Mobile */}
                <div className='md:hidden right-6 fixed' onClick={ToggleNavBar}>
                    {/* Toggle between open and close icons based on openNav state */}
                    {!openNav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

                {/* Mobile Navigation Menu */}
                <div className={!openNav ? 'left-[0%] fixed top-0 w-[60%] bg-[#141313] h-full block pl-4 pt-4 ease-in-out duration-500 md:hidden' : "fixed left-[100%] ease-in-out duration-500"}>
                    {/* Logo in Mobile Menu */}
                    <h1 className='text-[27px] text-[gold] font-bold'>LIFESTYLE</h1>
                    
                    {/* Mobile Navigation Links */}
                    <ul className='block space-y-4 pt-8'>
                        <li className='border-b border-[#232323]'> <NavLink to={"/"}> Home </NavLink>  </li>
                        <li className='border-b border-[#232323]'> <NavLink to={"/about-us"}> About Us </NavLink>  </li>
                        <li className='border-b border-[#232323]'> <NavLink to={"/our-services"}> Our Services </NavLink> </li>
                        <li className='border-b border-[#232323]'> <NavLink to={"/contact-us"}> Contact Us </NavLink> </li>
                    </ul>
                    
                    {/* Mobile Buttons */}
                    <div className='block space-y-4 pt-5'>
                        <button className='bg-[gold] w-full py-2 text-[black] font-bold rounded-md block'>Login</button>
                        <button className='bg-[gold] w-full py-2 text-[black] font-bold rounded-md'>Register</button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar; // Export Navbar component