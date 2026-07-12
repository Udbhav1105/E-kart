import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { DataAssestsApi } from '../../Data/DataAssets'
import { useNavigate } from 'react-router-dom'
const Orders = () => {
    const [products]=useContext(DataAssestsApi)
    const [orders, setorder] = useState([])
    const navigate=useNavigate()
    const order=async()=>{
        let res=await axios.get(`${import.meta.env.VITE_URL}api/v1/user/order`,{withCredentials:true})
        console.log(res.data.order)
        setorder(res.data.order)
      }
     const productMap = new Map(
  products.map(product => [product._id, product])
);

const merged = orders.map(order => ({
  ...order,
  ...productMap.get(order.product)
}));
console.log(merged)
      useEffect(() => {
      order()
      }, [])
  return (
     <div className="px-4 py-4">
            <div className="lg:col-span-2 flex flex-col gap-5">
              {merged.map((item,idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-5"
                > 
                  <div className="flex flex-col md:flex-row gap-5 justify-between">
                    <div className="flex gap-5">
                      <img
                        src={item.images?.[0]}
                        alt=""
                        onClick={() =>
                          navigate(`/product/${item._id}`)
                        }
                        className="w-28 h-28 rounded-2xl object-cover cursor-pointer"
                      />

                      <div>
                        <h3 className="text-lg font-semibold text-[#163c4a]">
                          {item.name}
                        </h3>

                        <p className="text-gray-500 mt-2 max-w-md">
                          {item.shortDescription}
                        </p>

                        <div className="mt-3 flex gap-3 items-center">
                          <span className="bg-[#163c4a]/10 text-[#163c4a] px-3 py-1 rounded-full text-sm">
                            {item.category}
                          </span>

                          <span className="font-bold text-lg text-[#163c4a]">
                            ₹ {item.price}
                          </span>
                          <div className="font-semibold text-[#163c4a]">
                        Qty : {item.quantity}
                      </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex md:flex-col items-center text-lg  justify-center gap-3">
                      <div className='tracking-wider'>
                        <span>OrderID : &nbsp;    {item.order_id}</span>
                      </div>
                      <div>
                        <span className='text-green-500 font-semibold text-xl'>Status : &nbsp;   {item.status}</span>
                      </div>
                      <div>
                        
                        <span>Placed on: {new Date(item.placedAt).toLocaleDateString("en-IN")} at {new Date(item.placedAt).toLocaleTimeString("en-IN")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

  )
}

export default Orders
