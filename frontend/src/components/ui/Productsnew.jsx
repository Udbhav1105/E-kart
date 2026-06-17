import React, { useContext, useEffect } from 'react'
import { DataAssestsApi } from '../../Data/DataAssets';
import { useNavigate } from 'react-router-dom';

const Productsnew = () => {
  const navigate=useNavigate();
    const [products]=useContext(DataAssestsApi);
    // let res;
    // useEffect(() => {

    // }, [input])

  return (
    <div className="flex gap-8 flex-wrap  px-6 py-5 w-screen mb-5">
        {products.slice(0, 12).map(function (item,idx) {
          return (
     <div key={idx} className="group">
              <div className="relative w-70 overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={item.images[0]} loading='lazy'
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                  ₹ {item.price}
                </span>
                <div
                  className="absolute inset-0 bg-black/40 opacity-0 
                group-hover:opacity-100 transition duration-300 
                flex items-center justify-center"
                >
                  <button
                    className="bg-white text-black px-4 py-2 rounded-full text-sm 
                     scale-90 group-hover:scale-100 transition"
                     onClick={()=>{
                      navigate(`/product/${item._id}`)
                     }}
                  >
                    View Product
                  </button>
                </div>
              </div>

              <div className="mt-3 space-y-1">
                <h3 className="text-[18px]  text-gray-800 font-semibold">
                  {item.name}
                </h3>
              </div>
            </div>
            );
        })}
        </div>
  )
}

export default Productsnew
