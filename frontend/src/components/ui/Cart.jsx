import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { DataAssestsApi } from "../../Data/DataAssets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [products] = useContext(DataAssestsApi);
  const [cart, setCart] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate=useNavigate()
  // const productById = useMemo(() => {
  //   const map = new Map();
  //   for (const p of products || []) map.set(p._id, p);
  //   return map;
  // }, [products]);

  const getCart=async()=>{
    let res=await axios.get('https://e-kart-3.onrender.com/api/v1/user/cart',{withCredentials:true})
    console.log("Cart data:", res.data.cart)
    console.log("Products:", products)
      console.log("Full response:", res.data)  // pura response dekho
  console.log("Status:", res.status)
    console.log("First cart item product id:", res.data.cart[0]?.product)
    console.log("First product _id:", products[0]?._id)

    setCart(res.data.cart)

  }
  useEffect(() => {
  getCart()
  }, [])
  const cartProducts = (cart && products) ? cart.map(item => ({
  ...products.find(p => p._id === item.product),
  quantity: item.quantity
})) : [] 

  const remove=()=>{
    let res=axios.post('https://e-kart-3.onrender.com/api/v1/user/cart/remove',{},{withCredentials:true})
  }

  // if (loading) return <div className="p-4">Loading cart...</div>;
  // if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Cart</h1>
      {cartProducts.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <div className="flex flex-col gap-3">
          {cartProducts.map((item, idx) => {
            return (
            <div
              key={`${item._id}`}
              className="border border-gray-200 rounded p-3 flex justify-between"
            >
              <div className="flex gap-3 items-center">
                {item.images ? (
                  <img
                    src={item.images[0]}
                    alt=""
                    className="h-14 w-14 object-cover rounded border"
                    onClick={()=>{
                      navigate(`/product/${item._id}`)
                    }}
                  />
                ) : null}
                <div className="flex w-80">{item.shortDescription}</div>
                <div className="flex flex-col">
                  <div className="font-medium">{item.category}</div>
                  {item.price != null ? (
                    <div className="text-sm text-gray-600">₹ {item.price}</div>
                  ) : null}
                </div>
              </div>
              <div className="mr-10 flex w-50 justify-center text-xl font-semibold gap-6 items-center">
                <button 
                onClick={async()=>{
                  let res=await axios.post('https://e-kart-3.onrender.com/api/v1/user/addToCart',{_id:item._id},{withCredentials:true})
                  await getCart()
                }}
                className="whitespace-nowrap bg-amber-300 px-2 py-1 rounded-full cursor-pointer">Add more</button>
              <div className="font-semibold whitespace-nowrap">Qty: {item.quantity}</div>
                <button 
                onClick={async()=>{
                  let res=await axios.post('https://e-kart-3.onrender.com/api/v1/user/cart/remove',{_id:item._id},{withCredentiawait getCart()als:true})
                  await getCart()
                }}
                className="bg-red-500 text-gray-950 rounded-full cursor-pointer px-2 py-1">Remove</button>
              </div>
            </div>
          );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
