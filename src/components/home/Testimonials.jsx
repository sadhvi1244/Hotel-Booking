import React, { useState, useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import design from "/src/assets/desing.png";

const testimonials = [
  {
    feedback:
      "Working with Architecture was an amazing experience. Their team demonstrated exceptional professionalism and timely creativity throughout our project.",
    name: "Brooklyn Simmons",
    role: "CO Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    feedback:
      "Working with Architecture was an amazing experience. Their team demonstrated exceptional professionalism and timely creativity throughout our project.",
    name: "Voranee Peeyarat",
    role: "Engineer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    feedback:
      "Working with Architecture was an amazing experience. Their team demonstrated exceptional professionalism and timely creativity throughout our project.",
    name: "Esther Howard",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const statsData = [
  { value: 20, label: "Projects" },
  { value: 10, label: "People" },
  { value: 40, label: "Years" },
  { value: 30, label: "Award Winner" },
];

function Testimonials() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });
  const statsControls = useAnimation();

  useEffect(() => {
    if (statsInView) {
      statsControls.start("visible");

      const interval = setInterval(() => {
        setCounters((prevCounters) =>
          prevCounters.map((count, index) =>
            count < statsData[index].value
              ? Math.min(count + 1, statsData[index].value)
              : statsData[index].value
          )
        );
      }, 50);

      return () => clearInterval(interval);
    }
  }, [statsInView, statsControls]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    }),
  };
  return (
    <section className="overflow-hidden">
      {/* Testimonials Section */}
      <div className="py-12 md:py-24 bg-[#F8F4F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Heading */}
          <div className="mb-8 md:mb-16 text-center">
            <motion.p
              className="text-brand-brown uppercase tracking-[0.2em] text-sm mb-3 flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs sm:text-sm text-[#ae7d54] uppercase tracking-widest flex items-center justify-center gap-2">
                <img src={design} alt="Design" className="p-1 w-8 md:w-auto" />
                <span>OUR CUSTOMER FEEDBACK</span>
                <img src={design} alt="Design" className="p-1 w-8 md:w-auto" />
              </span>
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-black px-4 sm:px-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              What Client's Say?
            </motion.h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                {/* Feedback Card */}
                <div className="bg-white p-6 md:p-8 shadow-lg transition-all duration-500 group-hover:bg-[#AE7D54] group-hover:shadow-xl">
                  <div className="-mt-12 md:-mt-14">
                    <div className="bg-[#AE7D54] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#AE7D54]">
                      <Quote size={24} className="md:size-7" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-6 mb-6 md:mb-8 transition-colors duration-500 group-hover:text-white">
                    {testimonial.feedback}
                  </p>
                </div>

                {/* Author Details */}
                <div className="flex flex-col sm:flex-row items-center mt-6 md:mt-8 space-y-4 sm:space-y-0">
                  <motion.div
                    className="perspective-1000"
                    whileHover={{
                      rotateY: 360,
                      transition: { duration: 0.8, ease: "easeInOut" },
                    }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover sm:mr-4"
                    />
                  </motion.div>
                  <div className="text-center sm:text-left">
                    <p className="text-[#AE7D54] font-semibold transition-colors duration-300 group-hover:text-[#8B6543]">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-800 text-lg">{testimonial.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className="w-full relative bg-white font-['Playfair_Display']"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                initial="hidden"
                animate={statsControls}
                custom={index}
                className="flex flex-col items-center justify-center"
              >
                <motion.span
                  className="text-5xl md:text-7xl lg:text-9xl font-['Playfair_Display'] text-[#AA8453] opacity-30"
                  animate={{
                    opacity: statsInView ? 0.3 : 0,
                    scale: statsInView ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {counters[index]}
                </motion.span>
                <motion.p
                  className="relative text-base md:text-xl font-['Playfair_Display'] text-black mt-[-30px] md:mt-[-50px] lg:mt-[-70px]"
                  animate={{
                    opacity: statsInView ? 1 : 0,
                    y: statsInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
