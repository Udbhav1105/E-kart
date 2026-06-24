import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataAssestsApi } from "../../Data/DataAssets";

const Navbar = () => {
  const [log, setlog] = useState("login");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [,cartValue]=useContext(DataAssestsApi)
  const navigate = useNavigate();

  const opencart = () => {
    console.log(cartValue)
    navigate("/user/cart");
  };

  useEffect(() => {
    const isAvailable = async () => {
      try {
        const res = await axios.post(
          "https://e-kart-3.onrender.com/api/v1/user/auth",
          {},
          {
            withCredentials: true,
          }
        );

        if (res?.data) {
          console.log(res.data.message)
          setlog(res.data.message);
        }
      } catch (err) {}
    };

    isAvailable();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#163c4a] border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-[110px] flex items-center justify-between">

          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-16 md:h-20 object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-12 text-lg font-semibold text-gray-100">

            <Link
              to="/"
              className="hover:text-[#d6b88d] hover:scale-105 transition-all duration-300"
            >
              Home
            </Link>

            <Link
              to="/collection"
              className="hover:text-[#d6b88d] hover:scale-105 transition-all duration-300"
            >
              Collections
            </Link>

            <Link
              to="/about"
              className="hover:text-[#d6b88d] hover:scale-105 transition-all duration-300"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-[#d6b88d] hover:scale-105 transition-all duration-300"
            >
              Contact
            </Link>

          </nav>

          <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">

            <button  className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white text-[#163c4a] hover:bg-[#d6b88d] hover:scale-105 transition-all duration-300 shadow-md">
              <Search size={22} />
            </button>

            <div className="relative group">
              <button className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white text-[#163c4a] hover:bg-[#d6b88d] hover:scale-105 transition-all duration-300 shadow-md">
                <User size={22} />
              </button>

              <div className="absolute right-0 top-14 hidden group-hover:flex flex-col bg-white text-[#163c4a] rounded-2xl shadow-xl min-w-[170px] p-4 gap-3">

                {log === "login" ? (
                  <Link
                    to="/login"
                    className="hover:text-[#d6b88d]"
                  >
                    Login
                  </Link>
                ) : (
                  <Link
                    to="/logout"
                    className="hover:text-[#d6b88d]"
                  >
                    Logout
                  </Link>
                )}

                <Link
                  to="/order"
                  className="hover:text-[#d6b88d]"
                >
                  Orders
                </Link>

              </div>
            </div>

            <button
              onClick={opencart}
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#d6b88d] text-[#163c4a] border-2 border-white/30 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <ShoppingBag size={22} />

              <span className="absolute -top-2 -right-2 bg-white text-[#163c4a] text-xs font-bold min-w-[22px] h-[22px] rounded-full flex items-center justify-center">
                {cartValue}
              </span>
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/10"
            >
              {mobileMenu ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>

        </div>

        {mobileMenu && (
          <div className="md:hidden pb-6 flex flex-col gap-5 text-lg font-medium text-gray-100">

            <Link
              to="/"
              onClick={() => setMobileMenu(false)}
            >
              Home
            </Link>

            <Link
              to="/collection"
              onClick={() => setMobileMenu(false)}
            >
              Collections
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenu(false)}
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
            >
              Contact
            </Link>

          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;