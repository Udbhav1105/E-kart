import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { DataAssestsApi } from "../../Data/DataAssets";
import Productsnew from "./Productsnew";

const BestSeller = () => {
  const products = useContext(DataAssestsApi);

  return (
    <div className="mb-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
          Best Sellers <span className="ml-1"><span>🔥</span></span>
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Discover our most popular picks
        </p>
      </div>
      <div>
        <Productsnew />
      </div>
      </div>
  );
};

export default BestSeller;
