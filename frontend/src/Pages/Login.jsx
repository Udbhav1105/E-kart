import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleClick = (e) => {
    const { name, value } = e.target;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let toastId = toast.loading("Logging you in");

    try {
      const res = await axios.post(
        "https://e-kart-3.onrender.com/api/v1/user/login",
        formData,
        {
          withCredentials: true,
        }
      );

      toast.success("Logged in successfully", {
        id: toastId,
      });

      const role = res.data.role;

      setTimeout(() => {
        if (role === "user") {
          navigate("/collection");
        } else {
          navigate("/admin/home");
        }
      }, 1000);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong",
        {
          id: toastId,
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f4ef] flex items-center justify-center px-4">
      <Toaster position="top-right" />

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <div className="text-center mb-8">
          <p className="text-[#d6b88d] uppercase tracking-[4px] text-sm font-medium">
            Welcome Back
          </p>

          <h1 className="text-4xl font-bold text-[#163c4a] mt-3">
            Login Account
          </h1>

          <p className="text-gray-500 mt-2">
            Continue shopping with E-Kart
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-5"
        >
          <div>
            <label className="block text-sm font-semibold text-[#163c4a] mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleClick}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#163c4a]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#163c4a] mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                onChange={handleClick}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 outline-none focus:border-[#163c4a]"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 bg-[#163c4a] hover:bg-[#1d4b5c] text-white py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>

          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#163c4a] font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;