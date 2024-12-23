import React, { useState } from 'react'
import { data } from './data'

const Filterbutton = () => {
    const [items, setitems] = useState(data)
  function  filterc(category){
    setitems(
    data.filter((foods)=>{
console.log(foods.category===category);

        return  foods.category === category




    }


    ))
  }
function price(dollar){
    setitems(
        data.filter((b)=>{
            return b.price === dollar
        })
    )
}

  return (<>
    <div className=''> 
     <div className='h-[55px]'> 
<h1 className='text-4xl font-medium text-center' >Top rated menus</h1>
     </div>
<div className=' flex overflow-hidden md:w-auto w-[480px] overflow-x-auto '> 

<div className=' h-[100px] '>
    <div className='text-center h-[40px]' >

    <h2 className='font-semibold text-xl  '>Filter type</h2>
    </div>
<div className='flex justify-evenly w-[550px] items-center '>
     <button onClick={()=>{setitems(data)}} className='text-orange-600 border duration-300 rounded-md hover:text-white hover:bg-orange-500 hover:border-orange-600 font-semibold border-red-500 p-2 px-4'>All</button>
     <button onClick={()=>{filterc("burger")}} className='text-orange-600 border duration-300 rounded-md hover:text-white hover:bg-orange-500 hover:border-orange-600 font-semibold border-red-500 p-2 px-4'>Burgers</button>
     <button onClick={()=>{filterc("pizza")}} className='text-orange-600 border duration-300 rounded-md hover:text-white hover:bg-orange-500 hover:border-orange-600 font-semibold border-red-500 p-2 px-4'>Pizza</button>
     <button onClick={()=>{filterc("salad")}} className='text-orange-600 border duration-300 rounded-md hover:text-white hover:bg-orange-500 hover:border-orange-600 font-semibold border-red-500 p-2 px-4'>Salads</button>
     <button onClick={()=>{filterc("chicken")}} className='text-orange-600 border duration-300 rounded-md hover:text-white hover:bg-orange-500 hover:border-orange-600 font-semibold border-red-500 p-2 px-4'>chicken</button>
</div>


</div>
<div className=''>
<div className='text-center h-[40px]'>
    <h2 className='text-xl font-semibold text-center'>Filter price</h2>
</div>
    <div className='flex justify-evenly w-[400px] items-center'>
        
<button onClick={()=>{price("$")}} className='text-orange-600 border duration-300 rounded-md hover:text-white hover:bg-orange-500 hover:border-orange-600 font-semibold border-red-500 p-2 px-4'>$</button>
<button onClick={()=>{price("$$")}}  className='text-orange-600 border duration-300 rounded-md hover:text-white hover:bg-orange-500 hover:border-orange-600 font-semibold border-red-500 p-2 px-4'>$$</button>
<button onClick={()=>{price("$$$")}} className='text-orange-600 border duration-300 rounded-md hover:text-white hover:bg-orange-500 hover:border-orange-600 font-semibold border-red-500 p-2 px-4'>$$$</button>
<button onClick={()=>{price("$$$$")}} className='text-orange-600 border duration-300 rounded-md hover:text-white hover:bg-orange-500 hover:border-orange-600 font-semibold border-red-500 p-2 px-4'>$$$$</button>
    </div>

</div>




</div>
    </div>
<div className=' shadow-2xl grid md:grid-cols-3  md:w-auto w-[480px] gap-8  mx-auto'>

   {
       items.map((item, index) => (
           <>
<div className='w-3/4 mx-auto  shadow-2xl overflow-hidden '>

<img src={item.image} className='w-full duration-300 m-auto h-[12rem] md:h-[20rem] hover:scale-105 object-cover' alt="" />
<div className='md:flex  justify-between items-center shadow-2xl bg-whites p-3'>
    <h2>{item.name}</h2>
    <button>{item.price}</button>
</div>
</div>

</>
    ))
}

</div>
   
        
  </>
  )
}

export default Filterbutton
