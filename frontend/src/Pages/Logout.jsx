import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await axios.post(
          "https://e-kart-3.onrender.com/api/v1/user/logout",
          {},
          {
            withCredentials: true,
          }
        );

        setTimeout(() => {
          navigate("/");
          window.location.reload()
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#f7f4ef] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 text-center max-w-md w-full">
        <div className="text-6xl mb-4">👋</div>

        <h1 className="text-3xl font-bold text-[#163c4a] mb-3">
          Logged Out
        </h1>

        <p className="text-gray-600 mb-4">
          Thank you for visiting E-Kart.
        </p>

        <p className="text-sm text-gray-500">
          Redirecting to home page...
        </p>

        <div className="mt-6 flex justify-center">
          <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-full bg-[#163c4a] animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;