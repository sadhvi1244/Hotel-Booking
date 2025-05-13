import { useState } from "react";
import React from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import beds from "../components/icons/Beds.svg";
import ac from "../components/icons/Air conditioner.svg";
import wifi from "../components/icons/Vector (3).svg";
import roomService from "../components/icons/Vector (6).svg";
import houseKeeping from "../components/icons/HouseKeeping.svg";
import iron from "../components/icons/Iron.svg";
import sea from "../components/icons/Sea.svg";
import seat from "../components/icons/Seat.svg";
import shower from "../components/icons/Shower.svg";
import parking from "../components/icons/Parking.svg";
import appliances from "../components/icons/Appliance.svg";
import tv from "../components/icons/Vector (7).svg";

const services = [
  {
    title: "Free Wi-Fi",
    icon: wifi,
    description:
      "Stay connected with complimentary high-speed internet throughout your stay",
  },
  {
    title: "Comfortable Beds",
    icon: beds,
    description:
      "Enjoy a restful night on our king-size beds with premium mattresses and soft cotton linens",
  },
  {
    title: "Room Service",
    icon: roomService,
    description:
      "Order food and essentials straight to your room for added convenience.",
  },
  {
    title: "Daily Housekeeping",
    icon: houseKeeping,
    description:
      "Our housekeeping team ensures your room stays clean and fresh every day",
  },
  {
    title: "Air Conditioning",
    icon: ac,
    description:
      "Temperature control in every room to keep you comfortable in any season",
  },
  {
    title: "Entertainment",
    icon: tv,
    description:
      "Enjoy your favorite shows with cable TV and in-room coffee/tea facilities to unwind.",
  },
  {
    title: "In-Room Appliances",
    icon: appliances,
    description:
      "All rooms include a refrigerator, microwave, oven, and iron for your convenience.",
  },
  {
    title: "On-Site Restaurant",
    icon: seat,
    description:
      "Dine at our in-house restaurant offering a variety of cuisines in a spacious setting",
  },
  {
    title: "Private Bathroom with Shower",
    icon: shower,
    description:
      "Spacious bathrooms with modern showers for a relaxing experience",
  },
  {
    title: "Laundry Service",
    icon: iron,
    description:
      "Same-day laundry service available if submitted before 9:00 AM",
  },
  {
    title: "Conference Room & Scenic Views",
    icon: sea,
    description:
      "Host meetings in our conference room and explore stunning views nearby for relaxation",
  },
  {
    title: "Free Parking",
    icon: parking,
    description: "Complimentary on-site parking for all our guests.",
  },
];

const ServicesPage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="font-sans">
      <Headers />

      <main className="flex-grow">
        {/* Page Banner */}
        <section className="relative h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-['Playfair-Display'] mb-4">
                Services
              </h1>
              <p className="mt-2">Home &gt; Services</p>
            </div>
          </div>
        </section>

        {/* Services content */}
        <section className="py-20 px-4 sm:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8">
              {services
                .slice(0, showMore ? services.length : 6)
                .map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col flex-grow flex-shrink-0 
                    basis-full md:basis-[calc(50%-32px)] lg:basis-[calc(33.333%-32px)] 
                    bg-white rounded-full hover:shadow-xl transition-all 
                    duration-300 p-16 max-w-[360px] text-center border border-zinc-200"
                  >
                    <div className="mb-4 flex justify-center">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
            </div>

            {/* Show More Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => setShowMore(!showMore)}
                className="bg-[#C89F65] text-white py-3 px-6 shadow-md hover:bg-[#B88E55] transition-all"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
