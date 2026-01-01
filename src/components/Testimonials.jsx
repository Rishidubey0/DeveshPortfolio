import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { testimonials } from "../data/mockData";
import { useState } from "react";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-40 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] will-change-transform"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] will-change-transform"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4"
          >
            <HiSparkles className="text-indigo-400 w-5 h-5" />
            <span className="text-indigo-300 text-sm font-medium">
              Client Feedback
            </span>
          </motion.div>

          <h2 className="mb-4 text-white text-4xl font-bold">Testimonials</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base leading-relaxed">
            Don't just take my word for it - hear from clients and colleagues
            about their experience working with me
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                onMouseEnter={() => setActiveIndex(index)}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`h-full bg-slate-900/50 backdrop-blur-xl border rounded-2xl transition-all duration-300 shadow-xl overflow-hidden relative group ${activeIndex === index
                    ? "border-indigo-500/50 shadow-indigo-500/30 bg-slate-900/80"
                    : "border-white/10 hover:border-indigo-500/30"
                    }`}
                >
                  {/* Fixed Gradient Overlay - Permanent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-100"></div>

                  {/* Card Content */}
                  <div className="relative p-8 flex flex-col h-full">
                    {/* Quote Icon with background */}
                    <div className="mb-6">
                      <div className="inline-flex p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/20 shadow-inner">
                        <FaQuoteLeft className="w-5 h-5 text-indigo-400" />
                      </div>
                    </div>

                    {/* Star rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + i * 0.05 }}
                        >
                          <FaStar className="w-4 h-4 text-amber-400 drop-shadow-sm" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-slate-200 mb-8 italic text-base leading-relaxed flex-grow font-inter tracking-wide">
                      "{testimonial.comment}"
                    </p>

                    {/* Author info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                      {/* Custom Avatar */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 ring-2 ring-white/10">
                          <span className="text-white font-semibold text-base">
                            {testimonial.avatar}
                          </span>
                        </div>
                        {/* Active indicator */}
                        {activeIndex === index && (
                          <motion.div
                            layoutId="activeTestimonial"
                            className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900 shadow-lg"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                      </div>

                      <div className="flex-grow min-w-0">
                        <p className="text-white font-semibold text-sm truncate font-outfit">
                          {testimonial.name}
                        </p>
                        <p className="text-slate-400 text-xs truncate font-inter">
                          {testimonial.position}
                        </p>
                        <p className="text-indigo-400 text-xs truncate font-medium mt-0.5">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner accent - Fixed visibility */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
