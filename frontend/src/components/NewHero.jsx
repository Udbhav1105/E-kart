import { motion } from "framer-motion";

const NewHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#163c4a] rounded-[30px] mx-4 mt-6 mb-10 min-h-[80vh] flex items-center">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d6b88d]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d6b88d]/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto w-full px-8 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full text-[#d6b88d] text-sm tracking-wider">
            NEW SEASON ARRIVALS
          </span>

          <h1 className="mt-6 text-white text-5xl md:text-7xl font-bold leading-tight">
            Elevate
            <span className="block text-[#d6b88d]">
              Your Style
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl leading-relaxed">
            Discover carefully curated fashion, accessories and
            lifestyle essentials crafted for modern living.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-[#d6b88d] text-[#163c4a] font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300">
              Shop Collection
            </button>

            <button className="border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300">
              Explore More
            </button>
          </div>

          <div className="flex flex-wrap gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
              <h3 className="text-white text-2xl font-bold">10K+</h3>
              <p className="text-gray-300 text-sm">Happy Customers</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
              <h3 className="text-white text-2xl font-bold">500+</h3>
              <p className="text-gray-300 text-sm">Premium Products</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
              <h3 className="text-white text-2xl font-bold">4.9★</h3>
              <p className="text-gray-300 text-sm">Customer Rating</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="relative flex justify-center"
        >
          <div className="absolute w-[420px] h-[420px] rounded-full bg-[#d6b88d]/20 blur-3xl" />

          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200"
            alt=""
            className="relative z-10 w-full max-w-[500px] h-[650px] object-cover rounded-[30px] shadow-2xl"
          />

          <div className="absolute -left-10 bottom-20 z-40 bg-white rounded-2xl px-5 py-4 shadow-xl">
            <p className="text-xs text-gray-500 z-40">Trending Now</p>
            <h3 className="font-semibold text-[#163c4a]">
              Premium Collection
            </h3>
          </div>

          <div className="z-40 absolute -right-8 top-20 bg-[#d6b88d] rounded-2xl px-5 py-4 shadow-xl">
            <p className="text-sm font-semibold text-[#163c4a]">
              New Arrivals
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewHero;