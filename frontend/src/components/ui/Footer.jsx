import React from 'react'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div>
      <div className='flex  justify-between px-10 py-4  w-full bg-gray-100'>
        <div className='flex flex-col gap-4 w-90 px-4 py-5'>
            <img src={logo} alt="" className='h-25 w-50 rounded-md ' />
            <p className='text-[18px] text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellendus? Quam illo delectus expedita itaque?</p>
        </div>
        <div className=' flex flex-col py-5  gap-2 text-gray-500'>
            <h1 className='text-gray-700 font-medium text-[25px]'>Company</h1>
            <p className='hover:text-gray-600 hover:font-medium'>Home</p>
            <p className='hover:text-gray-600 hover:font-medium'>About</p>
            <p className='hover:text-gray-600 hover:font-medium'>Delivery</p>
            <p className='hover:text-gray-600 hover:font-medium'>Support </p>
        </div>
        <div className='flex flex-col py-5 px-10 gap-2 text-gray-500'>
            <h1 className='text-gray-700 font-medium text-[25px]'>Get in touch</h1>
            <p>Call 180055555</p>
            <p>Email: support@ekart.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
