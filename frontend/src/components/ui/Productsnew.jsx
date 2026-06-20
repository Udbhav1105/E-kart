import React, { useContext } from "react";
import { DataAssestsApi } from "../../Data/DataAssets";
import { useNavigate } from "react-router-dom";

const Productsnew = () => {
  const navigate = useNavigate();
  const [products] = useContext(DataAssestsApi);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-[#d6b88d] font-medium tracking-widest uppercase text-sm">
            New Arrivals
          </p>

          <h2 className="text-4xl font-bold text-[#163c4a] mt-2">
            Featured Products
          </h2>
        </div>

        <button
          onClick={() => navigate("/collection")}
          className="hidden md:block border border-[#163c4a] text-[#163c4a] px-5 py-2 rounded-xl hover:bg-[#163c4a] hover:text-white transition"
        >
          View All
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.slice(0, 12).map((item, idx) => (
          <div
            key={idx}
            className="group cursor-pointer"
            onClick={() => navigate(`/product/${item._id}`)}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">

              <div className="relative overflow-hidden">

                <img
                  src={item.images[0]}
                  loading="lazy"
                  alt={item.name}
                  className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute top-4 right-4 bg-[#163c4a] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  ₹ {item.price}
                </div>

                <button
                  className="
                  absolute bottom-5 left-1/2
                  -translate-x-1/2 translate-y-16
                  group-hover:translate-y-0
                  bg-[#d6b88d]
                  text-[#163c4a]
                  font-semibold
                  px-6 py-3
                  rounded-xl
                  transition-all duration-500
                  "
                >
                  View Product
                </button>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#163c4a] line-clamp-1">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Premium quality product crafted for everyday use.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 md:hidden">
        <button
          onClick={() => navigate("/collection")}
          className="bg-[#163c4a] text-white px-6 py-3 rounded-xl"
        >
          View All Products
        </button>
      </div>
    </section>
  );
};

export default Productsnew;