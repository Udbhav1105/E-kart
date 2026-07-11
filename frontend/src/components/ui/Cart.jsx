import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataAssestsApi } from "../../Data/DataAssets";
import { useNavigate } from "react-router-dom";
import Razorpay from 'razorpay'

const Cart = () => {
  const [products,cartValue,setcartValue] = useContext(DataAssestsApi);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const getCart = async () => {
    try {
      const res = await axios.get(
        "https://e-kart-3.onrender.com/api/v1/user/cart",
        { withCredentials: true }
      );
      setCart(res.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  

  useEffect(() => {
    getCart();
  }, []);

  const cartProducts =
    cart && products
      ? cart.map((item) => ({
          ...products.find((p) => p._id === item.product),
          quantity: item.quantity,
        }))
      : [];

  const total = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

    const payment = async () => {
    const res = await axios.post(
        "https://e-kart-3.onrender.com/payment",
        { total }
    );
    const {data} = await axios.get(
        "https://e-kart-3.onrender.com/payment/key"
    );

    const order = res.data;
    const options = {
        key: data.key,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,


        handler: async function (response) {
          console.log(response);
           let confirm =axios.post('https://e-kart-3.onrender.com/payment/verify',{response})
           console.log(confirm.success,confirm.message)
        }
    };
    console.log(options)
    console.log(import.meta.env.VITE_RAZORPAY_KEY)

    const rzp = new window.Razorpay(options);
    rzp.open();
};


  return (
    <div className="min-h-screen bg-[#f7f4ef] px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-[#d6b88d] uppercase tracking-[4px] text-sm font-medium">
            Shopping Cart
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#163c4a] mt-2">
            Your Cart
          </h1>
        </div>

        {cartProducts.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-sm p-12 text-center">
            <h2 className="text-2xl font-semibold text-[#163c4a]">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-3">
              Looks like you haven't added anything yet.
            </p>

            <button
              onClick={() => navigate("/collection")}
              className="mt-6 bg-[#163c4a] text-white px-6 py-3 rounded-xl"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 flex flex-col gap-5">
              {cartProducts.map((item) => (
                <div
                  key={item._id}
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
                        </div>
                      </div>
                    </div>

                    <div className="flex md:flex-col items-center justify-center gap-3">
                      <div className="font-semibold text-[#163c4a]">
                        Qty : {item.quantity}
                      </div>

                      <button
                        onClick={async () => {
                          await axios.post(
                            "https://e-kart-3.onrender.com/api/v1/user/addToCart",
                            { _id: item._id },
                            { withCredentials: true }
                          );
                          await getCart();
                        }}
                        className="bg-[#d6b88d] text-[#163c4a] px-4 py-2 rounded-xl font-medium"
                      >
                        Add More
                      </button>

                      <button
                        onClick={async () => {
                          setcartValue(prev=>prev-1)
                          await axios.post(
                            "https://e-kart-3.onrender.com/api/v1/user/cart/remove",
                            { _id: item._id },
                            { withCredentials: true }
                          );
                          await getCart();
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded-xl"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-sm p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-[#163c4a] mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Items</span>
                    <span>{cartProducts.length}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>

                  <div className="border-t pt-4 flex justify-between text-xl font-bold text-[#163c4a]">
                    <span>Total</span>
                    <span>₹ {total}</span>
                  </div>
                </div>

                <button 
                onClick={payment}
                className="w-full mt-6 bg-[#163c4a] hover:bg-[#1d4b5c] text-white py-3 rounded-xl font-semibold transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
