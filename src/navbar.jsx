import React, { useState, useSyncExternalStore } from 'react'
import { FaHamburger, FaUsersSlash } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import Sidebar from './Sidebar';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  function burger(){
setNav(!nav)
console.log(nav)

  }
  return (
    <>
    <div className='flex justify-between md:w-11/12  w-[480px]   mx-auto py-4 md:py-6 '>
      <div className='flex md:w-[500px] w-[450px]  justify-around md:justify-evenly items-center  '>
      <FaHamburger onClick={burger} className='md:text-2xl text-4xl  ' />
<h1 className='text-3xl md:text-4xl'> <bold> Best </bold><strong> Fries </strong> </h1>
<div className='md:flex md:justify-between  hidden  bg-gray-300 rounded-full  md:text-xl p-1 text-xs'>
    <button className=' bg-black text-white rounded-full p-2'>delivery</button>
    <button className=' p-2'>pickup </button>
</div>
      </div>
      <div className='flex justify-evenly items-center w-[500px]'>
     
<div className='flex items-center bg-gray-300 justify-between w-[180px] md:w-[220px] rounded-full '>
    
          <CiSearch className='flex text-xl font-semibold w-4 md:w-10' />
      <input type="text" placeholder='search foods' className='bg-transparent border-none rounded-full outline-none text-xl md:text-xl  md:w-full px-4 md:py-2 md:p-2 ' />
    </div>
    <div className='hidden md:flex items-center justify-between md:w-[70px] md:text-md text-xs md:py-auto  py-2 bg-black px-1 text-white rounded-full md:px-2'>
    <FaCartShopping />

      <button className='  bg-black text-white py-1 px-2 rounded-full'>cart</button>
    </div>
      </div>
    </div>
      {nav ? <Sidebar  burger={burger} /> : "" }
    </>


  )
}

export default Navbar
