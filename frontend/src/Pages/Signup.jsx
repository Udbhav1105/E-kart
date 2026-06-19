import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'


import {Link, useNavigate,} from 'react-router-dom'
const Signup = () => {
const navigate=useNavigate()
const [formData, setformData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
})
     const handleClick = (e) => {
    const { name, value } = e.target

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
    const submitHandler=async(e)=>{
            e.preventDefault()
            let res
            const toastId=toast.loading("creating your account")
            try {
              console.log("sent")
              res=await axios.post("https://e-kart-3.onrender.com/api/v1/user/register",formData)
              toast.success(res.data?.message || "Account created successfully", {
                id: toastId
              })
              console.log("yha aagya")
              const token=res.data.token
              
              navigate(`/verify`)

            } catch (error) {
                 toast.error(
                 error.response?.data?.message || error.message,
                 { id: toastId }
                 )
              }
            
    }
    

  return (
    <div className='flex mb-5 text-teal-900 text-[20px] h-140  justify-center '>
        <Toaster position="top-right" />
      <form action="" onSubmit={submitHandler} className=' bg-gray-200 flex flex-col gap-6 w-120 rounded-md px-4 justify-center items-center'>
        <h1 className='font-bold text-2xl px-12 py-2'>Create your account</h1>
        <div className='flex gap-10'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="" className='font-medium '>Firstname</label>
        <input type="text" name="firstName" placeholder='Firstname' onChange={handleClick}className='mt-2 rounded border-2 border-gray-400 px-2 py-1 w-35 '/>
        </div>
      <div className='flex flex-col gap-1'>
         <label htmlFor="" className='font-medium'>Lastname</label>
         <input type="text" name="lastName" placeholder='Lastname'  onChange={handleClick}className='mt-2 rounded border-2 border-gray-400 px-2 py-1 w-35 '/>
      </div>
       
        </div>
        <label htmlFor="" className='flex flex-col gap-2 font-medium'>Email
            <input type="email" name="email" placeholder='email' onChange={handleClick} className='rounded px-2 py-1 border-2 border-gray-400'/>
        </label>
        <label htmlFor="" className='flex flex-col gap-2 font-medium'>Password
            <input type="password" name="password" placeholder='password' onChange={handleClick} className='rounded px-2 py-1 border-2 border-gray-400'/>
        </label>
        <button className='bg-teal-600 text-gray-100 text-[18px] font-semibold w-62.5 hover:scale-102 cursor-pointer py-2 rounded-xl hover:transform-border' >Create Your Account</button>
      <p className='font-semibold flex justify-center items-center gap-2'>Already have an account <span className='hover:underline cursor-pointer text-blue-400 text-[18px]'><Link to={'/login'}> Login</Link></span></p>
      </form>
    </div>
  )
}

export default Signup
