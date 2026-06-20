import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#163c4a] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <img
              src={logo}
              alt="logo"
              className="h-14 mb-6 object-contain"
            />

            <p className="text-gray-300 leading-7 max-w-sm">
              Discover premium fashion, accessories and lifestyle
              essentials crafted to elevate your everyday style.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#d6b88d]">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-gray-300">

              <Link
                to="/"
                className="hover:text-[#d6b88d] transition"
              >
                Home
              </Link>

              <Link
                to="/collection"
                className="hover:text-[#d6b88d] transition"
              >
                Collections
              </Link>

              <Link
                to="/about"
                className="hover:text-[#d6b88d] transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="hover:text-[#d6b88d] transition"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#d6b88d]">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-3 text-gray-300">
              <p>+91 1800 555 555</p>
              <p>support@ekart.com</p>
              <p>Available 24×7 for customer support</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} E-Kart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;