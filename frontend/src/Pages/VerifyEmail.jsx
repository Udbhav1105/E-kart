import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BadgeCheck, XCircle } from "lucide-react";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await axios.post(
          "https://e-kart-3.onrender.com/api/v1/user/verify",
          {},
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        );

        setStatus("success");

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (error) {
        console.error(error);
        setStatus("failed");
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-[#f7f4ef] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-xl w-full p-10 text-center">

        {status === "loading" && (
          <>
            <div className="w-16 h-16 border-4 border-[#163c4a] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>

            <h1 className="text-3xl font-bold text-[#163c4a]">
              Verifying Email
            </h1>

            <p className="text-gray-500 mt-3">
              Please wait while we verify your account...
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <BadgeCheck
                  size={42}
                  className="text-green-600"
                />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-[#163c4a] mb-4">
              Email Verified Successfully
            </h1>

            <p className="text-gray-600">
              Your account has been verified.
              You can now login and start shopping.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Redirecting to login page...
            </p>
          </>
        )}

        {status === "failed" && (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                <XCircle
                  size={42}
                  className="text-red-600"
                />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-red-600 mb-4">
              Verification Failed
            </h1>

            <p className="text-gray-600">
              The verification link is invalid
              or has expired.
            </p>

            <button
              onClick={() => navigate("/signup")}
              className="mt-6 bg-[#163c4a] text-white px-6 py-3 rounded-xl"
            >
              Create Account Again
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default VerifyEmail;