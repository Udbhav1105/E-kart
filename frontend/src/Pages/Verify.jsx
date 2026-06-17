import React from 'react'

const Verify = () => {
  return (
    <div className='flex flex-col justify-center items-center text-black mb-8 mt-3'>
      <div className='flex flex-col gap-2 justify-center items-center text-gray-700 w-120 border-2 px-8 py-16'>
        <h2 className='text-2xl font-semibold'>✅ Email sent successfully</h2>
        <p className='text-xl font-semibold'>We have sent an email to verify your account.
            Please click on the link to verify your account.
        </p>
      </div>
    </div>
  )
}

export default Verify