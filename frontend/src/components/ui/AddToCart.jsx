import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AddToCart = () => {
const { id } = useParams();

const addToCart = async () => {
try {
await axios.post(
"https://e-kart-3.onrender.com/api/v1/user/addToCart",
{ _id: id },
{ withCredentials: true }
);

 
  alert("Added to cart");
} catch (err) {
  console.error(err);
  alert("Failed to add item");
}
 

};

return ( <button
   onClick={addToCart}
   className="font-semibold"
 >
Add To Cart </button>
);
};

export default AddToCart;
