import React, { useContext } from 'react'
import { DataAssestsApi } from '../../Data/DataAssets'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const AddToCart = () => {
  const {id}=useParams()
  console.log(id)
  return (
    <div className=''>
      <button className='text-center'
      onClick={async ()=>{
       let res = await axios.post(
  'http://localhost:8000/api/v1/user/cart',
  { id },
  {
    withCredentials: true
  }
);
        console.log(res.data.message)
      }}
      >Add to cart</button>
    </div>
  )
}

export default AddToCart
