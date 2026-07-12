import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
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

    const toastId = toast.loading("Creating your account");

    try {
      const res = await axios.post(
        `/api/v1/user/register`,
        formData
      );

      toast.success(
        res.data?.message || "Account created successfully",
        {
          id: toastId,
        }
      );

      navigate("/verify");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message,
        {
          id: toastId,
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f4ef] flex items-center justify-center px-4 py-10">
      <Toaster position="top-right" />

      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-8">
        <div className="text-center mb-8">
          <p className="text-[#d6b88d] uppercase tracking-[4px] text-sm font-medium">
            Join E-Kart
          </p>

          <h1 className="text-4xl font-bold text-[#163c4a] mt-3">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Start shopping with us today
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-5"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[#163c4a] mb-2">
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleClick}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#163c4a]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#163c4a] mb-2">
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleClick}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#163c4a]"
              />
            </div>
          </div>

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
                type={
                  showPassword ? "text" : "password"
                }
                name="password"
                placeholder="Create password"
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
            className="bg-[#163c4a] hover:bg-[#1d4b5c] text-white py-3 rounded-xl font-semibold transition mt-2"
          >
            Create Your Account
          </button>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#163c4a] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;