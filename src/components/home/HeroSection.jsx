import { useEffect, useRef } from "react";
import BookingForm from "./BookingForm";
import bannerImage from "../../assets/banner1.jpg.png";

const HeroSection = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.backgroundPosition = `center ${scrollY * 0.4}px`;
      }
    };

    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={bgRef}
      className="relative h-[800px] bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Overlay */}
      <div class="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent">
        {/* Hero Content */}
        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white pt-32 lg:pt-48 z-10">
          <div className="max-w-4xl">
            {/* Star Icons */}
            <div className="flex justify-center mb-4 space-x-2 text-[#AE7D54] text-2xl">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>

            {/* Heading */}
            <h1 className="font-['Playfair_Display'] font-medium text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[5.7rem] leading-[1.1] ">
              Book Your Dream Hotel <br /> With The Pride
            </h1>
          </div>
        </div>

        {/* Booking form */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-10">
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
