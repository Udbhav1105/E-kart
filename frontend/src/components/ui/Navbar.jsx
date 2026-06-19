import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Search, ShoppingBag, User } from 'lucide-react'
import { useContext, useEffect } from 'react'
import { DataAssestsApi } from '../../Data/DataAssets'
import axios from 'axios'
import { useState } from 'react'


const Navbar = () => {
  const user = false
  const [,cartValue]=useContext(DataAssestsApi)
  const [cartVal, setCartVal] = useState(0)
    const [log, setlog] = useState("login")
    const navigate=useNavigate()
  
    const opencart=async()=>{
        navigate('/user/cart')
    }
    useEffect(() => {
    async function isAvailable(){
      let res=await axios.post('https://e-kart-3.onrender.com/api/v1/user/auth',{},{
        withCredentials:true
      })
      
      if(res?.data){
        setlog(res.data.message)
      }
    }
    const val=async ()=>{
      let res=await axios.get('https://e-kart-3.onrender.com/api/v1/user/cart',{withCredentials:true})
      setCartVal(res.data.cart.length)
      // console.log(res.data.cart.length)
    }
    val()
    isAvailable()
    }, [opencart])
  return (
    <div className='w-full  bg-[#163c4a] text-white rounded-md sticky top-0 z-50 border-b border-gray-800'>

      <div className='max-w-7xl h-[15vh] mx-auto flex justify-between items-center px-6 py-4'>

        {/* Logo */}
        <div className='flex items-center'>
          <img src={logo} alt="" className='h-12' />
        </div>

        {/* Links */}
        <div className='hidden md:flex gap-8 text-[16px] font-medium'>
          <Link to='/' className='hover:text-[#A3FF00] transition'>Home</Link>
          <Link to='/collection' className='hover:text-[#A3FF00] transition'>Collections</Link>
          <Link to='/about' className='hover:text-[#A3FF00] transition'>About</Link>
          <Link to='/contact' className='hover:text-[#A3FF00] transition'>Contact</Link>
        </div>

        {/* Icons */}
        <div className='flex items-center gap-6'>

          {/* User */}
          <div className='relative group cursor-pointer'>
            <User size={26} className='hover:scale-110 transition' />
            
            {/* Dropdown */}
            <div className='absolute right-0 top-6 hidden group-hover:flex flex-col bg-white text-black rounded-xl shadow-lg w-36 p-3 gap-2 text-sm '>
              {log==="login" ? <Link to='/login'>Login</Link> : <Link to='/logout'>Logout</Link>}
              <Link to='/order' className='hover:text-[#A3FF00]'>Orders</Link>
            </div>
          </div>

          {/* Cart */}
          <div className='relative cursor-pointer'>
            <ShoppingBag onClick={opencart} 
            size={26} className='hover:scale-110 transition' />
            <span className='absolute -top-2 -right-2 bg-[#A3FF00] text-black text-xs px-1.5 rounded-full'>
              {cartVal}
            </span>
          </div>

          {/* Search */}
          <Search size={26} className='cursor-pointer hover:scale-110 transition' />

        </div>

      </div>
    </div>
  )
}

export default Navbar