import React from "react";
import Productsnew from "./Productsnew";

const BestSeller = () => {
  return (
    <section className="bg-[#f7f4ef] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-[#d6b88d] uppercase tracking-[4px] text-sm font-medium">
            Customer Favorites
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#163c4a] mt-4">
            Best Sellers 🔥
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Explore the products our customers love the most.
            Handpicked styles that continue to trend season after season.
          </p>

          <div className="w-24 h-1 bg-[#d6b88d] mx-auto mt-6 rounded-full"></div>

        </div>

        <Productsnew />

      </div>

    </section>
  );
};

export default BestSeller;