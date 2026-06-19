import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ShoppingCart } from 'lucide-react'
import { DataAssestsApi } from '../../Data/DataAssets'

const Products = () => {

  const products=useContext(DataAssestsApi);
  const [filtered, setfiltered] = useState([])
  //   const [products, setProducts] = useState([
  //       {}
  //   ])

  
  //  useEffect(()=>{
  //   async  function addProduct(){
  //     const res=await axios.get("https://e-kart-3.onrender.com/products")
  //     // console.log(res.data.product)
  //     setProducts(res.data.product)
  //   }
  //   addProduct()
    

  //  },[])
    // console.log(products)
    

  return (
    <div className='card px-5 py-2 '>
      <h1  className='text-5xl font-semibold text-center text-gray-700  py-2 mt-10'>Latest Collection</h1>
      <hr className='w-100 ml-[38%]'/>
      <div className='flex  mt-5 px-5 '>
        <div className="flex gap-8 flex-wrap  px-6 py-5 w-screen mb-5">
                 {products.slice(0,10).map(function (props) {
                   return (
                     <div className="flex bg-[#1E293B] rounded-xl flex-wrap flex-col gap-3 w-70 h-118 ">
                       <img
                         src={props.image}
                         alt=""
                         className="rounded-md h-70 w-70  transition-110 ease-out duration-300 hover:scale-105 cursor-pointer "
                       />
                       <div className="  flex flex-wrap h-auto tracking-tight">
                         <p className="font-semibold text-[19px] py-2 px-1">{props.description}</p>
                       </div>
                       <div className='mt-1 text-center'><h3 className="font-bold  text-[20px]">₹ {props.price}</h3></div>
                       <button className="transition-all  hover:scale-105 bg-[#22D3EE] duration-200 ease-in-out hover:bg-[#BEF264] hover:text-black  text-white px-10 font-semibold rounded-xl  cursor-pointer flex justify-center gap-2 py-3">
                         Add to cart <ShoppingCart />
                       </button>
                     </div>)
                })}
            
        
            </div>
            
        </div>
      </div>
  )
}

export default Products
