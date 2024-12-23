import React from 'react'

const Mid = () => {
  return (
    <div className='md:w-full w-[490px] md:block  md:mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center">
                    <h1 className='px-4 text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold selection:bg-orange-500 ' >The<span className='text-orange-500 selection:bg-white '>Best</span></h1>
                    <h1 className='px-4 text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold selection:bg-orange-500 ' >   <span className='text-orange-500 selection:bg-white '>Foods</span>Delievered</h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
  )
}

export default Mid
