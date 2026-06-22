import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DataAssestsApi } from "../../Data/DataAssets";

const AddToCart = () => {
const { id } = useParams();
const [,cartValue,setcartValue]=useContext(DataAssestsApi)
const addToCart = async () => {
try {
  setcartValue(prev=>prev+1)
await axios.post(
"https://e-kart-3.onrender.com/api/v1/user/addToCart",
{ _id: id },
{ withCredentials: true }
);
} catch (err) {
  console.error(err);
  alert("Failed to add item,Log in first");
}
 

};

return ( <button
   onClick={addToCart}
   className="font-semibold cursor-pointer"
 >
Add To Cart </button>
);
};

export default AddToCart;
