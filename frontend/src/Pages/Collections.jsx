import React, { useContext, useMemo, useState } from "react";
import axios from "axios";
import { DataAssestsApi } from "../Data/DataAssets";
import { Link } from "react-router-dom";

const Collections = () => {
  const [products, cartValue, setcartValue] = useContext(DataAssestsApi);

  const [filters, setFilters] = useState({
    category: [],
    subCategory: [],
    price: [],
  });
  const [sort, setSort] = useState("relevance"); // relevance | price_asc | price_desc

  const toggleFilter = (key, value) => {
    setFilters((prev) => {
      const arr = prev[key] || [];
      const exists = arr.includes(value);
      return {
        ...prev,
        [key]: exists ? arr.filter((x) => x !== value) : [...arr, value],
      };
    });
  };

  const clearFilters = () => {
    setFilters({ category: [], subCategory: [], price: [] });
    setSort("relevance");
  };

  const priceMatches = (p) => {
    const selected = filters.price;
    if (!selected.length) return true;
    const price = Number(p?.discountPrice ?? p?.price ?? 0);
    return selected.some((bucket) => {
      if (bucket === "under_499") return price < 499;
      if (bucket === "under_999") return price < 999;
      if (bucket === "1000_2999") return price >= 1000 && price <= 2999;
      if (bucket === "3000_plus") return price >= 3000;
      return true;
    });
  };

  const filteredProducts = useMemo(() => {
    const list = Array.isArray(products) ? products : [];
    const filtered = list.filter((p) => {
      const categoryOk =
        !filters.category.length || filters.category.includes(p?.category);
      const subOk =
        !filters.subCategory.length || filters.subCategory.includes(p?.subCategory);
      const priceOk = priceMatches(p);
      return categoryOk && subOk && priceOk;
    });

    if (sort === "price_asc") {
      return filtered.slice().sort((a, b) => {
        const ap = Number(a?.discountPrice ?? a?.price ?? 0);
        const bp = Number(b?.discountPrice ?? b?.price ?? 0);
        return ap - bp;
      });
    }
    if (sort === "price_desc") {
      return filtered.slice().sort((a, b) => {
        const ap = Number(a?.discountPrice ?? a?.price ?? 0);
        const bp = Number(b?.discountPrice ?? b?.price ?? 0);
        return bp - ap;
      });
    }
    return filtered;
  }, [products, filters, sort]);

  return (
    <div className="w-full bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Collections</h1>
            <p className="text-sm text-gray-600 mt-1">
              {filteredProducts.length} products
            </p>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
            >
              <option value="relevance">Sort: Relevance</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Filters */}
          <aside className="lg:col-span-3">
            <div className="border border-gray-200 h-auto rounded-lg p-4 bg-white sticky top-4">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Filters</h2>
              </div>

              <div className="mt-4 space-y-5 text-sm">
                <div>
                  <div className="font-semibold text-gray-900 mb-2">Category</div>
                  <div className="space-y-2">
                    {["Men", "Women", "Kids"].map((c) => (
                      <label key={c} className="flex items-center gap-2 text-gray-700">
                        <input
                          type="checkbox"
                          checked={filters.category.includes(c)}
                          onChange={() => toggleFilter("category", c)}
                        />
                        {c}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-gray-900 mb-2">Subcategory</div>
                  <div className="space-y-2">
                    {["Topwear", "Bottomwear", "Footwear", "Winterwear", "Ethnic", "Dresses", "Sportswear", "Formalwear"].map(
                      (s) => (
                        <label key={s} className="flex items-center gap-2 text-gray-700">
                          <input
                            type="checkbox"
                            checked={filters.subCategory.includes(s)}
                            onChange={() => toggleFilter("subCategory", s)}
                          />
                          {s}
                        </label>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-gray-900 mb-2">Price</div>
                  <div className="space-y-2">
                    {[
                      { id: "under_499", label: "Under 499" },
                      { id: "under_999", label: "Under 999" },
                      { id: "1000_2999", label: "₹1000 - ₹2999" },
                      { id: "3000_plus", label: "₹3000+" },
                    ].map((b) => (
                      <label key={b.id} className="flex items-center gap-2 text-gray-700">
                        <input
                          type="checkbox"
                          checked={filters.price.includes(b.id)}
                          onChange={() => toggleFilter("price", b.id)}
                        />
                        {b.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <section className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="border border-gray-200 rounded-lg p-6 text-gray-700">
                No products match your filters.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((p) => {
                  const img = p?.images?.[0] || p?.image;
                  const title = p?.name || p?.description || "Product";
                  const price = p?.discountPrice ?? p?.price;
                  return (
                    <div
                      key={p._id}
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-sm"
                    >
                      <Link to={`/product/${p._id}`} className="block">
                        <div className="aspect-square bg-white flex items-center justify-center">
                          {img ? (
                            <img
                              src={img}
                              alt={title}
                              // loading="lazy"
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="text-gray-500 text-sm">No image</div>
                          )}
                        </div>
                      </Link>

                      <div className="p-3">
                        <Link
                          to={`/product/${p._id}`}
                          className="text-sm font-medium text-gray-900 line-clamp-2 hover:underline"
                        >
                          {title}
                        </Link>
                        <div className="mt-1 flex items-baseline gap-2">
                          <div className="text-sm font-semibold text-gray-900">₹ {price}</div>
                          {p?.discountPrice != null && p?.price != null ? (
                            <div className="text-xs text-gray-500 line-through">₹ {p.price}</div>
                          ) : null}
                        </div>
                        <div className="mt-3 flex gap-2">
                          <button
                            type="button"
                            onClick={async () => {
                              try {
                                await axios.post(
                                  "https://e-kart-2-77mr.onrender.com/api/v1/user/addtoCart",
                                  { _id: p._id },
                                  { withCredentials: true }
                                );
                                // console.log(p._id)
                                setcartValue(cartValue + 1);
                              } catch (e) {
                                console.error(e);
                              }
                            }}
                            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-semibold py-2 rounded-full"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Collections;
