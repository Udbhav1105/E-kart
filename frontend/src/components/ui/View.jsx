import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataAssestsApi } from "../../Data/DataAssets";
import AddToCart from "./AddToCart";

const View = () => {
  const [products] = useContext(DataAssestsApi);
  const { id } = useParams();

  const items = products?.find((item) => item._id === id);

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [wishlist, setWishlist] = useState(false);
  const [tab, setTab] = useState("description");

  if (!items) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const discount = Math.round(
    ((items.price - items.discountPrice) / items.price) * 100
  );

  const stars = Array.from(
    { length: 5 },
    (_, i) => i < Math.floor(items.ratings || 0)
  );

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#163c4a]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-16 items-start">
        <div className="flex gap-4 sticky top-6 shrink-0">
          <div className="flex flex-col gap-3">
            {items.images?.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImg(i)}
                className={`w-16 h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
                  selectedImg === i
                    ? "border-[#163c4a]"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="relative w-[450px] h-[620px] rounded-3xl overflow-hidden bg-white shadow-xl">
            <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs">
              -{discount}%
            </span>

            <button
              onClick={() => setWishlist(!wishlist)}
              className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full"
            >
              {wishlist ? "♥" : "♡"}
            </button>

            <img
              src={items.images?.[selectedImg]}
              alt="main"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <p className="text-sm text-gray-500 uppercase">{items.brand}</p>

          <h1 className="text-4xl font-bold mt-2 mb-4">
            {items.shortDescription}
          </h1>

          <div className="flex gap-1 mb-5">
            {stars.map((full, i) => (
              <span key={i} className={full ? "text-amber-400" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl font-bold">
              {items.currency} {items.discountPrice}
            </span>

            <span className="line-through text-gray-400">
              {items.currency} {items.price}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Select Size</h3>

            <div className="flex gap-2 flex-wrap">
              {sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`w-14 h-11 rounded-lg border ${
                    selectedSize === sz
                      ? "bg-[#163c4a] text-white"
                      : "bg-white"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <div className="flex px-20 py-4 bg-[#163c4a] cursor-pointer text-white rounded-xl">
              <AddToCart />
            </div>

            <button className="flex-1 py-4 bg-[#d6b88d] text-[#163c4a] rounded-xl font-semibold">
              Buy Now
            </button>
          </div>

          <div className="flex border-b mb-5">
            {["description", "details", "reviews"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 ${
                  tab === t ? "font-bold border-b-2 border-[#163c4a]" : ""
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {tab === "description" && (
            <p>{items.longDescription}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default View;
