import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import { Eye , EyeOff} from 'lucide-react';
import {Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()

  const [formData, setformData] = useState({
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
            let toastId=toast.loading("Logging you in")
            try {
                res=await axios.post("http://localhost:8000/api/v1/user/login",formData,{
                  withCredentials:true
                })
                toast.success("Loggedin successfully ",{id:toastId})
                const role=res.data.role
                console.log(res)
                setTimeout(() => {
                  if(role==='user'){navigate('/collection')}
                  else{navigate('/admin/home')}
                  
                }, 2000);
            } catch (error) {
                toast.error(
      error.response?.data?.message || "Something went wrong",
      { id: toastId }
    )
                
            }
            
          }
          return (
            <div className='text-teal-900 text-[20px] font-semibold flex-col mb-8 flex items-center'>
      <Toaster position="top-right" />
      <h1 className='text-5xl text-black m-4 font-semibold'>Welcome Back!!!</h1>
      <form action="" onSubmit={submitHandler} className='flex bg-gray-200 flex-col gap-6 h-110 w-85 rounded-md px-4 py-8 justify-center items-center border-2'>
        <h1 className='font-bold tracking-wide text-xl px-14'>Login your account</h1>
        <label htmlFor="" className='flex flex-col gap-2 font-medium'>Email
            <input type="email" name="email" placeholder='email' onChange={handleClick} className=' rounded px-2 py-1 border-2 border-gray-400'/>
        </label>
        <label htmlFor="" className='flex flex-col gap-2 font-medium border-gray-400'>Password
            <input type='password'
            name="password" placeholder='password' onChange={handleClick} className=' rounded px-2 py-1 border-2 border-gray-400'/>
        </label>
        
        <button className='bg-teal-500 w-auto text-white text-xl font-bold px-20 py-2 mt-4 rounded-full hover:transform-border '  >Login</button>
      <p className='font-semibold flex justify-center items-center gap-2'>Don't have an account <span className='hover:underline cursor-pointer text-blue-400 text-[17px]'><Link to={'/signup'}> Signup</Link></span></p>
      </form>
    </div>
  )
}

export default Login
