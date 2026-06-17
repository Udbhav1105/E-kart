import React from 'react'

const Hero = () => {
  return (
    <div  className=' hero w-screen h-100 mt-5 mb-5  overflow-x-hidden rounded-xl'>
      <div className='flex gap-8 h-full '>
        <div className='flex flex-col text-5xl gap-10 uppercase font-medium w-1/2 h-full items-center justify-center'>
          <p className='tracking-wide'>Latest</p>
          <p className='tracking-wide'>CollectionS</p>
          <p className='tracking-wide'>shop now</p>
        </div>
        <div className='w-1/2 overflow-hidden rounded-md'>
          <img src="https://files.cdn.printful.com/upload/hero-banner-2-frame/87/87bf5971544d3962068ce8b545eb1113_l" alt="" className='rounded-md h-full w-full' />
        </div>
      </div>
    </div>
  )
}

export default Hero
