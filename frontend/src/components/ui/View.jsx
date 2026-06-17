import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataAssestsApi } from '../../Data/DataAssets'
import AddToCart from './AddToCart'
 
const View = () => {
  const [products] = useContext(DataAssestsApi)
  const { id } = useParams()
  const items = products.find(item => item._id === id)
 
  const [selectedImg, setSelectedImg] = useState(0)
  const [selectedSize, setSelectedSize] = useState(null)
  const [wishlist, setWishlist] = useState(false)
  const [tab, setTab] = useState('description')
 
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const discount = Math.round(((items.price - items.discountPrice) / items.price) * 100)
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(items.ratings))
 
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* <nav className="bg-white border-b border-gray-200 px-12 py-3 text-sm text-gray-500">
        <span className="hover:text-gray-900 cursor-pointer">Home</span>
        <span className="mx-2 text-gray-300">/</span>
        <span className="hover:text-gray-900 cursor-pointer">Women</span>
        <span className="mx-2 text-gray-300">/</span>
        <span className="hover:text-gray-900 cursor-pointer">Jeans</span>
        <span className="mx-2 text-gray-300">/</span>
        <span className="text-gray-900 font-medium">Slim-Fit Premium Denim</span>
      </nav> */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex gap-14 items-start">
        <div className="flex gap-4 sticky top-6 shrink-0">
          <div className="flex flex-col gap-3">
            {items.images?.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImg(i)}
                className={`w-16 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                  selectedImg === i ? 'border-gray-900 shadow-md' : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="relative w-96 h-130 rounded-2xl overflow-hidden bg-gray-100">
            <span className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
              -{discount}%
            </span>
            <button
              onClick={() => setWishlist(!wishlist)}
              className="absolute top-4 right-4 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md text-xl text-rose-500 hover:scale-110 transition-transform"
            >
              {wishlist ? '♥' : '♡'}
            </button>
            <img
              src={items.images?.[selectedImg]}
              alt="main"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 pt-1">

          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">{items.brand}</p>
          <h1 className="text-2xl font-bold text-gray-900 leading-snug mb-4">
            {items.shortDescription}
          </h1>
          <div className="flex items-center gap-2 mb-5">
            <div className="flex gap-0.5">
              {stars.map((full, i) => (
                <span key={i} className={`text-lg ${full ? 'text-amber-400' : 'text-gray-300'}`}>★</span>
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-800">{items.ratings}</span>
            <span className="text-sm text-gray-400">{items.reviewsCount}</span>
            <span className="ml-3 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              {items.stock>0 ? '✓ In Stock':'Out of stock' }
            </span>
          </div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {items.currency} {items.discountPrice?.toLocaleString()}
            </span>
            <span className="text-base text-gray-400 line-through">
              {items.currency} {items.price?.toLocaleString()}
            </span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
              Save {discount}%
            </span>
          </div>
          <p className="text-xs text-gray-400 mb-5">Inclusive of all taxes · Free delivery above ₹499</p>
 
          <hr className="border-gray-200 my-5" />
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-800">Select Size</span>
              <span className="text-sm text-blue-600 cursor-pointer hover:underline">Size Guide ›</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {sizes.map(sz => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`w-14 h-11 rounded-lg text-sm font-semibold border-2 transition-all duration-150 ${
                    selectedSize === sz
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-600'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <div className="flex px-20 py-3.5 bg-amber-400 items-center justify-center hover:bg-amber-500 text-white font-bold text-base rounded-xl shadow-md transition-colors">
              <AddToCart />
            </div>
            <button className="flex-1 py-3.5 bg-amber-400 hover:bg-amber-500 text-white font-bold text-base rounded-xl shadow-md transition-colors">
              ⚡ Buy Now
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-5">
            {[
              { icon: '🔄', text: '30-Day Returns' },
              { icon: '🛡️', text: 'Secure Payment' },
              { icon: '🚚', text: 'Free Shipping' },
              { icon: '✅', text: '100% Authentic' },
            ].map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-1 py-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                <span className="text-xl">{b.icon}</span>
                <span className="text-xs text-gray-500 font-medium text-center">{b.text}</span>
              </div>
            ))}
          </div>
 
          <hr className="border-gray-200 my-5" />
          <div className="flex border-b border-gray-200 mb-5">
            {['description', 'details', 'reviews'].map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-all ${
                  tab === t
                    ? 'border-gray-900 text-gray-900 font-bold'
                    : 'border-transparent text-gray-400 hover:text-gray-700'
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
 
          <div className="min-h-20">
            {tab === 'description' && (
              <p className="text-sm text-gray-500 leading-relaxed">{items.longDescription}</p>
            )}
 
            {tab === 'details' && (
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Material', '98% Cotton, 2% Elastane'],
                    ['Fit', 'Slim Fit'],
                    ['Rise', 'High Rise'],
                    ['Closure', 'Zip & Button'],
                    ['Wash Care', 'Machine Wash Cold'],
                    ['Origin', 'Made in India'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-gray-100">
                      <td className="py-2.5 text-gray-400 font-medium w-2/5">{k}</td>
                      <td className="py-2.5 text-gray-700">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
 
            {tab === 'reviews' && (
              <div className="flex flex-col gap-3">
                {[
                  { name: 'Priya S.', rating: 5, text: 'Absolutely love the fit! True to size and super comfy.' },
                  { name: 'Meera K.', rating: 4, text: 'Great material, perfect for daily wear.' },
                ].map((r, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-semibold text-gray-800">{r.name}</span>
                      <span className="text-amber-400 text-sm">{'★'.repeat(r.rating)}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
 
        </div>
      </div>
    </div>
  )
}
 
export default View