import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import design from "/src/assets/desing.png";
import room1 from "../../assets/room-service1.png";
import room2 from "../../assets/room-service2.png";
import room3 from "../../assets/room-service3.png";

const offers = [
  {
    id: 1,
    title: "Family Discount",
    image: room1,
  },
  {
    id: 2,
    title: "Couples offer",
    image: room2,
  },
  {
    id: 3,
    title: "Buy One Get One Free",
    image: room2,
  },
];

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="w-full min-h-screen bg-white py-64 sm:py-68 md:py-44 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          data-aos="fade-down"
        >
          <div className="flex items-center justify-center gap-2 text-[#ae7d54] mb-4">
            <img src={design} alt="Design" className="p-1" />
            <span className="uppercase tracking-[0.2em] text-sm">
              What we offer
            </span>
            <img src={design} alt="Design" className="p-1" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 tracking-tight">
            Get Our Special Offer.
          </h2>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative group cursor-pointer"
            >
              {/* Background Image */}
              <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-8 -left-6 px-6">
                <div
                  className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 text-xl font-serif text-gray-900 
                            transition-all duration-500 group-hover:bg-[#B88E72] group-hover:text-white"
                >
                  {offer.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
