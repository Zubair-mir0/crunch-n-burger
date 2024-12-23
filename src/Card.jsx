import React from 'react'

const Card = () => {
  return (
    <div className='md:min-w-full w-[480px] mx-auto p-4 py-12 grid md:grid-cols-3  items-center gap-4 rounded-xl'>
    <div className='rounded-xl relative '>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl md:text-3xl px-2 pt-2  pb-3 selection:bg-orange-500'>Sun's Out Bog's Out</p>
            <p className='px-2'>Through 7/24</p>
            <button className=' border-white bg-white text-black  rounded-2xl px-2  absolute bottom-4 mx-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[220px] w-full object-cover rounded-xl ' src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
    <div className='rounded-xl relative '>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl md:text-3xl px-2 pt-2  pb-3 selection:bg-orange-500'>Sun's Out Bog's Out</p>
            <p className='px-2'>Through 7/24</p>
            <button className=' border-white bg-white text-black  rounded-2xl px-2  absolute bottom-4 mx-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[220px] w-full object-cover rounded-xl ' src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
    <div className='rounded-xl relative '>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl md:text-3xl px-2 pt-2  pb-3 selection:bg-orange-500'>Sun's Out Bog's Out</p>
            <p className='px-2'>Through 7/24</p>
            <button className=' border-white bg-white text-black absolute rounded-2xl px-2  bottom-4 mx-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[220px] w-full object-cover rounded-xl ' src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
</div>
  )
}

export default Card
