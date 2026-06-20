import React from "react";
import { MailCheck } from "lucide-react";

const Verify = () => {
  return (
    <div className="min-h-screen bg-[#f7f4ef] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-xl w-full p-10 text-center">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <MailCheck
              size={40}
              className="text-green-600"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-[#163c4a] mb-4">
          Verification Email Sent
        </h1>

        <p className="text-gray-600 leading-7">
          We have sent a verification link to your email address.
          Please check your inbox and click the verification link
          to activate your account.
        </p>

        <div className="mt-8 p-4 rounded-2xl bg-[#f7f4ef] border border-gray-200">
          <p className="text-sm text-gray-500">
            Didn't receive the email?
          </p>

          <button className="mt-2 text-[#163c4a] font-semibold hover:underline">
            Resend Verification Email
          </button>
        </div>

        <div className="mt-8">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#163c4a] animate-pulse"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Verify;