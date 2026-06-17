import React, { useState } from 'react'
import axios from 'axios'

const Admin = () => {
     
  const [formData, setFormData] = useState([{
    image:"",
    details:"",
    price:0
  }])


 async function submitHandler(e){
      e.preventDefault()
      const res=await axios.post('https://e-kart-2-77mr.onrender.com/admin',formData)
      console.log("submitted")
  }

  function handleChange(e){
      
       const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  // console.log(formData)

  return (
    <div className='flex flex-col gap-5 justify-center items-center  px-5 py-10'>
      <h1 className='text-2xl text-gray-600 font-medium mb-5'>Add Product</h1>
     
    <form action="" onSubmit={submitHandler} className=' flex flex-col gap-5 rounded-md px-10 py-5 border-2 mb-5'>
      <input type="text" name='image' placeholder='product image url' onChange={handleChange} className='border-2 border-gray-500 text-gray-700 px-5 py-1' />
      <input type="text" name='details' placeholder='product details' onChange={handleChange} className='border-2 border-gray-500 text-gray-700 px-5 py-1'/>
      <input type="text" name='price' placeholder='price' onChange={handleChange} className='border-2 border-gray-500 text-gray-700 px-5 py-1' />
      <button className='font-semibold bg-teal-500 text-gray-800 rounded-md py-1 px-4 '>create product</button>
    </form>
    </div>
  )
}

export default Admin
