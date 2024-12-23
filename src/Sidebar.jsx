import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { IoHelpCircle } from "react-icons/io5";
import { FaTags } from "react-icons/fa";
import { IoDownload } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";




const Sidebar = ({side,burger}) => {
  return (
        <>
<div className='md:h-screen h-full   w-full fixed bg-black/85 z-10 top-0 left-0 '>        
</div>


    <div className='flex flex-col fixed bg-white  border top-0 left-0 w-[350px] z-10 shadow-lg md:h-screen h-full   gap-30'>
   

      <div className='flex w-[340px] justify-between px-2 py-1  bg-white  items-center'>

        <h1 className='text-4xl font-semibold'>        Best
            <strong>
             Fries
            </strong>
            </h1>
        <RxCross2 onClick={burger } className='text-2xl md:text-3xl' />


      
</div>
      <div className='text-2xl w-[350px] flex flex-col  py-8 gap-4  h-[500px]  '>
      
        <div className='flex w-[250px]  p-2  items-center '>
          <div className=' flex justify-between w-[140px] items-center'>


      <TbTruckDelivery />
      <h1 className='text-2xl md:text-3xl'>orders</h1>
          </div>
        </div>
        <div className='flex w-[250px]  p-2 items-center'>
          <div className=' flex justify-between items-center w-[170px]'>

        <MdFavorite />
      <h1 className='text-2xl md:text-3xl'>Favorities</h1>
          </div>
        </div>
        <div className='flex w-[250px]  p-2 items-center'>

<div className=' flex justify-between w-[140px]'>

        <FaWallet />
        <h1 className='text-2xl md:text-3xl'>Wallet</h1>
        </div>
</div>
        <div className='flex w-[250px]  p-2 items-center'>

<div className=' flex justify-between w-[110px]'>

        <IoHelpCircle />
        <h1 className='text-2xl md:text-3xl'>Help</h1>
        </div>
</div>
        <div className='flex w-[250px]  p-2 items-center'>

<div className=' flex justify-between w-[190px]'>

        <FaTags />
        <h1 className='text-2xl md:text-3xl'>Promotions</h1>
        </div>
</div>
        <div className='flex w-[250px]  p-2 items-center'>

<div className=' flex justify-between w-[170px]'>

        <IoDownload />
        <h1 className='text-2xl md:text-3xl'>Best One</h1>
        </div>
</div>
        <div className='flex w-[250px]  p-2 items-center'>

<div className=' flex justify-between w-[250px]'>

        <FaUserFriends />
        <h1 className='text-2xl md:text-3xl'>Invite Friends</h1>
        </div>
</div>
      </div>
      </div>

   
        </>
  )
}

export default Sidebar
