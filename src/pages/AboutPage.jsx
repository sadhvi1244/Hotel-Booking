import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoBanner from "../components/home/VideoBanner";
import design from "/src/assets/desing.png"; // Fixed filename
import { motion, useInView, useAnimation } from "framer-motion";
import { Quote } from "lucide-react";
import img from "/src/assets/AboutImg.png";

const statsData = [
  { value: 20, label: "Years of Experience" },
  { value: 10, label: "Online Booking" },
  { value: 40, label: "Hotel Staff" }, // Updated label
  { value: 30, label: "Best Hotel Award" },
];

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

const AboutPage = () => {
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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Page Banner */}
        <section className="relative h-[400px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
            }}
          >
            {/* ✅ Custom Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
          </div>

          {/* Content on top */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-['Playfair-Display'] mb-4">
                About Us
              </h1>
              <p className="mt-2">Home &gt; About Us</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section>
          <div className="bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-28">
              {/* Image with fade-in-left animation */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={img}
                  alt="About"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Text with fade-in-right animation */}
              <motion.div
                className="w-full lg:w-1/2 text-left"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-[#B97348] uppercase text-xs sm:text-sm tracking-widest flex items-center">
                  About Us
                  <span className="ml-2 inline-block">
                    <img src={design} alt="Design" />
                  </span>
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-2 font-['Playfair-Display'] text-gray-900 mt-3 leading-tight">
                  We Provide Outdoor <br className="hidden md:block" />
                  Activities To All
                </h2>
                <p className="text-[#B97348] text-xl sm:text-2xl underline mt-2 p-2">
                  Our activities around the world and across{" "}
                  <br className="hidden sm:block" /> various Hotel Service
                  sectors.
                </p>
                <p className="text-gray-700 mt-4 text-base sm:text-lg">
                  With over four decades of experience providing solutions to
                  large-scale enterprises throughout the globe, we offer
                  end-to-end logistics tailored for specific markets.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700 text-base sm:text-lg">
                  <li className="flex items-start">
                    <span className="text-[#B97348] mr-2">•</span>
                    Introduce best the revauto and their services.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B97348] mr-2">•</span>
                    Highlight featured on revauto project.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B97348] mr-2">•</span>
                    Revauto mission statement or philosophy.
                  </li>
                </ul>
                <motion.button
                  className="mt-6 px-6 py-3 border border-[#B97348] text-[#B97348] font-semibold hover:bg-[#B97348] hover:text-white transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  DISCOVER MORE
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Decorative Scrolling Text Section */}
        <section className="bg-white overflow-hidden">
          <div className="relative py-8 md:py-12">
            <motion.div
              className="flex w-max items-center gap-8 whitespace-nowrap"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25,
                repeatType: "loop",
              }}
            >
              {/* Repeating content for seamless animation */}
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 px-4 md:gap-8"
                  aria-hidden="true"
                >
                  <span className="text-4xl font-['Playfair_Display'] md:text-5xl lg:text-6xl xl:text-7xl">
                    ROOMS & SUITES
                  </span>

                  <div className="flex items-center gap-4 md:gap-6">
                    <img
                      src="../../src/assets/star.png"
                      alt=""
                      className="h-5 w-5 shrink-0 md:h-6 md:w-6"
                      role="presentation"
                    />
                    <span className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px] text-transparent font-['Playfair_Display']  stroke-black stroke-[1.5]">
                      THE PRIDE
                    </span>
                    <img
                      src="../../src/assets/star.png"
                      alt=""
                      className="h-5 w-5 shrink-0 md:h-6 md:w-6"
                      role="presentation"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Accessibility fallback */}
            <div className="sr-only">
              Repeating decorative text: "ROOMS & SUITES THE PRIDE"
            </div>
          </div>
        </section>

        {/* Video Banner */}
        <section className="py-10">
          <VideoBanner />
        </section>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="w-full relative bg-white font-['Playfair_Display']"
        >
          <div className="container mx-auto px-6 py-12 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                    className="text-7xl md:text-9xl font-['Playfair_Display'] text-[#AA8453] opacity-30 "
                    animate={{
                      opacity: statsInView ? 0.3 : 0,
                      scale: statsInView ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    {counters[index]}
                  </motion.span>
                  <motion.p
                    className="relative text-lg md:text-xl font-['Playfair_Display'] text-black mt-[-40px] md:mt-[-70px]"
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

        {/* Section Title with Testimonials */}
        <section className="py-10">
          <div className="py-24 bg-[#F8F4F0]">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="mb-16 text-center">
                <motion.p
                  className="text-brand-brown uppercase tracking-[0.2em] text-sm mb-3 flex items-center justify-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-xs sm:text-sm text-[#ae7d54] uppercase tracking-widest flex items-center justify-center gap-2">
                    <span className="w-8 h-[1px] bg-[#ae7d54]"></span>
                    <span>OUR CUSTOMER FEEDBACK</span>
                    <span className="w-8 h-[1px] bg-[#ae7d54]"></span>
                  </span>
                </motion.p>

                <motion.h2
                  className="text-5xl font-serif text-black"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  What Client's Say?
                </motion.h2>
              </div>

              {/* Testimonials */}

              <div className="grid md:grid-cols-3 gap-8 mx-auto ">
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
                    {/* Feedback Text */}
                    <div className="bg-white p-8 shadow-lg transition-all duration-500 group-hover:bg-[#AE7D54] group-hover:shadow-xl">
                      {/* Quote Icon */}
                      <div className="-mt-14">
                        <div className="bg-[#AE7D54] w-12 h-12 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#AE7D54]">
                          <Quote size={28} />
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mt-6 mb-8 transition-colors duration-500 group-hover:text-white">
                        {testimonial.feedback}
                      </p>
                    </div>

                    {/* Person Details */}
                    <div className="flex items-center mt-8">
                      <motion.div
                        className="perspective-1000"
                        whileHover={{
                          rotateY: 360,
                          transition: {
                            duration: 0.8,
                            ease: "easeInOut",
                          },
                        }}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4 backface-hidden"
                        />
                      </motion.div>
                      <div>
                        <p className="text-[#AE7D54] font-semibold transition-colors duration-300 group-hover:text-[#8B6543]">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-800 text-lg">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
