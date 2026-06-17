import React from 'react'
import right from '../assets/right.png'

const NewHero = () => {
  return (
    <div className='flex flex-wrap mt-10 mb-10 ml-5 h-[70vh] sm:flex-col gap-2 rounded-xl w-screen overflow-scroll'>

      <div className=' group relative rounded-xl  h-full w-[30vw] cursor-pointer hover:scale-102 transition-all ease-in-out duration-400 '>
        <div className="absolute inset-0 rounded-xl bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 
                transition-all duration-300">
                </div>
        <img src="https://naturalman.uk.com/cdn/shop/articles/filson_1600x.jpg?v=1750425511" alt=""  className='overflow-hidden rounded-xl h-full w-160 realtive'/>
        <div className='absolute bottom-0  w-full overflow-hidden text-white px-4 pb-4 '>
            <p className='uppercase font-bold text-3xl'>UNCOMPROMISING Fashion</p>
            <span className='font-medium text-2xl '>MAMMOTH FIELD PARKA</span>
            <p className='text-xl font-medium'>Rugged and modern. Built for every terrain.</p>
        </div>
      </div>
      <div className='w-2/3  h-full rounded-xl overflow-hidden mr-10 flex flex-col gap-2'>
        <div className='flex gap-2 h-1/2   rounded-xl'>
            <div className='group relative hover:scale-102 transition-all ease-in-out duration-400 w-1/2 object-cover  h-full rounded-xl left cursor-pointer'>
             <div className="absolute inset-0 rounded-xl bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 
                transition-all duration-300">
                </div>
            <img src="https://cdn.mos.cms.futurecdn.net/Y5ZDGaLpk8QkUdHKDgusDN.jpg" alt="" className=' h-full w-full object-cover overflow-hidden rounded-xl' />
            <div className='absolute bottom-0  w-full overflow-hidden text-white px-3 pb-3 '>
            <p className='uppercase font-bold text-3xl'>WOMEN'S ESSENTIALS</p>
            <span className='font-medium text-2xl '>EFFORTLESS STYLE</span>
            <p className='text-xl font-medium'>Modern fits for everyday confidence.</p>
        </div>
            </div>
            <div className='relative group  w-1/2 object-cover h-full rounded-xl right hover:scale-102 transition-all ease-in-out duration-400 cursor-pointer'>
            <div className="absolute inset-0 rounded-xl bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 
                transition-all duration-300">
                </div>
              <img src="https://i.pinimg.com/736x/89/79/d0/8979d03737eafeb6ba97a044bf51d498.jpg" alt="" className='h-full w-full object-cover overflow-hidden rounded-xl' />
               <div className='absolute bottom-0  w-full overflow-hidden text-white px-2 pb-3  '>
            <p className='uppercase font-bold text-3xl'>LIFESTYLE GOODS</p>
            <span className='font-medium text-2xl '>DAILY REFINEMENT</span>
            <p className='text-xl font-medium'>Minimal tools for a focused life.</p>
        </div>
              </div>
        </div>
         <div className='hover:scale-101 w-full h-1/2 transition-all rounded-xl ease-in-out duration-400 cursor-pointer'>
         <div className='relative object-cover group h-full w-full  rounded-xl cursor-pointer'>
            <div className="absolute inset-0 rounded-xl bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 
                transition-all duration-300">
                </div>
            <img src={right} alt="" className='h-80 w-full object-cover rounded-xl overflow-hidden'/>
            <div className='absolute bottom-0 w-full overflow-hidden text-white px-8 pb-10 '>
            <p className='uppercase font-bold text-3xl'>ACCESSORIES</p>
            <span className='font-medium text-2xl '>ADVENTURE READY</span>
            <p className='text-xl font-medium'>Carry everything that matters.</p>
        </div>
        </div>
        </div>
      
       </div>

      </div>
  )
}

export default NewHero
