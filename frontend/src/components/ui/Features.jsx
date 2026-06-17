import React from "react";

const Features = () => {
  return (
    <div className="px-6 lg:px-16 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          Why Choose Us
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          We provide the best experience for our customers
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

        <div className="p-6 rounded-xl hover:shadow-md transition duration-300">
          <img
            src="https://thumbs.dreamstime.com/b/print-357123890.jpg"
            className="h-16 w-16 mx-auto mb-4 rounded-full"
          />
          <h3 className="text-lg font-medium text-gray-800">
            Trusted Brands
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Authentic products from trusted global brands.
          </p>
        </div>
        <div className="p-6 rounded-xl hover:shadow-md transition duration-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrmCl-sB7qMdLO9x6HPhb1oSPouenStlQzA&s"
            className="h-16 w-16 mx-auto mb-4 rounded-full"
          />
          <h3 className="text-lg font-medium text-gray-800">
            Easy Returns
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Hassle-free returns and quick exchanges.
          </p>
        </div>
        <div className="p-6 rounded-xl hover:shadow-md transition duration-300">
          <img
            src="https://t4.ftcdn.net/jpg/13/51/78/01/360_F_1351780192_PPXQXrLeWNXQIHEgIJpglFUKRY9mk1Bc.jpg"
            className="h-16 w-16 mx-auto mb-4 rounded-full"
          />
          <h3 className="text-lg font-medium text-gray-800">
            24x7 Support
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Dedicated support anytime you need help.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Features;