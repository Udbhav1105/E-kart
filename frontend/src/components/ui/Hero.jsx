import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#123847] min-h-[55vh] flex items-center">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d6b88d]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d6b88d]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-gray-200 mb-6">
            ✨ New Season Collection
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Timeless
            <span className="block text-[#d6b88d]">
              Fashion
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            Discover premium clothing, accessories and lifestyle
            essentials designed for modern living.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-[#d6b88d] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Shop Now
            </button>

            <button className="border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10">
              Collections
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-5 mt-12">
            {[
              ["10K+", "Customers"],
              ["500+", "Products"],
              ["4.9★", "Rating"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="backdrop-blur-md bg-white/10 border border-white/10 px-6 py-4 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white">{num}</h3>
                <p className="text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="relative flex justify-center"
        >
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#d6b88d]/20 blur-3xl" />

          <img
            src="/hero-model.png"
            alt=""
            className="relative z-10 h-[650px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}