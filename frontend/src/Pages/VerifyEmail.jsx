import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const VerifyEmail =() => {
    const {token}=useParams()
    const navigate=useNavigate()
     useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.post(
          'https://e-kart-3.onrender.com/api/v1/user/verify',
          {},  // body empty rakho
          { headers: { Authorization: `bearer ${token}` } }
        )
        console.log(res.data.message)
        setTimeout(() => navigate('/login'), 2000)
      } catch (error) {
        console.error('Verification failed:', error)
      }
    }

    verifyEmail()
  }, [token])


  return (
    <div className='flex text-gray-700 justify-center  items-center mt-5 mb-5  '>
      <div className='flex items-center justify-center rounded-md bg-gray-200 w-150 border-2 px-15 py-15 text-4xl'>
       ✅ Your Email has been verified you can now login and shop products 
      </div>
    </div>
  )
}

export default VerifyEmail
