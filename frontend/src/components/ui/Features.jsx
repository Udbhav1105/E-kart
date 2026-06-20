import React from "react";
import {
  ShieldCheck,
  RotateCcw,
  Headphones,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck size={34} />,
      title: "Trusted Quality",
      desc: "Carefully curated products with premium craftsmanship and authenticity guaranteed.",
    },
    {
      icon: <RotateCcw size={34} />,
      title: "Easy Returns",
      desc: "Shop confidently with hassle-free returns and quick replacement support.",
    },
    {
      icon: <Headphones size={34} />,
      title: "24/7 Support",
      desc: "Our dedicated team is always available to assist you whenever needed.",
    },
  ];

  return (
    <section className="bg-[#f7f4ef] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#d6b88d] uppercase tracking-[4px] text-sm font-medium">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#163c4a] mt-4">
            Designed Around You
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            We combine quality, reliability and customer-first service
            to deliver a shopping experience you'll love.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 text-center group"
            >
              <div className="w-18 h-18 mx-auto rounded-full bg-[#163c4a] text-white flex items-center justify-center group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-[#163c4a] mt-6">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;