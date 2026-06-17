import React, { useEffect } from 'react'
import axios from 'axios'
// import { setTimeout } from 'node:timers/promises'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate=useNavigate()
    useEffect(async() => {
      let res=await axios.post('http://localhost:8000/api/v1/user/logout',{},{withCredentials:true})
      setTimeout(() => {
        navigate('/')
      }, 2000);
    }, [])

  return (
    <div className='text-2xl flex justify-center font-semibold py-4 '>
        We are sorry to let you go😔😔😔....
        <p>Redirecting to home page</p>
      
    </div>
  )
}

export default Logout
