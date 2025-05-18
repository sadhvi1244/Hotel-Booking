import { motion } from "framer-motion";
import { Wifi, Users, Bed } from "lucide-react";
import { Link } from "react-router-dom";
import room1 from "../../assets/room-service1.png";
import room2 from "../../assets/room-service2.png";
import room3 from "../../assets/room-service3.png";

const rooms = [
  {
    id: 1,
    title: "Deluxe Room",
    price: 150,
    image: room1,
    persons: "1-2 Persons",
    bed: "King Size Bed",
    wifi: "Free Wifi",
    bathtub: "Bathtub",
  },
  {
    id: 2,
    title: "Executive Room",
    price: 250,
    image: room2,
    persons: "1-2 Persons",
    bed: "King Size Bed",
    wifi: "Free Wifi",
    bathtub: "Bathtub",
  },
  {
    id: 3,
    title: "Suite Room",
    price: 550,
    image: room3,
    persons: "1-2 Persons",
    bed: "King Size Bed",
    wifi: "Free Wifi",
    bathtub: "Bathtub",
  },
];

function LuxuryRooms() {
  return (
    <div className="min-h-screen bg-[#FAF7F4]">
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* ... header section remains the same */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center gap-2 text-[#B4916C] uppercase tracking-[0.2em] text-sm">
            <img src="src/assets/desing.png" alt="left design" className="" />
            <span>Customer Services</span>
            <img src="src/assets/desing.png" alt="right design" className="" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-4 text-[#2C2C2C] leading-tight">
            Book your stay and
            <br />
            relax in luxury
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {rooms.map((room, index) => (
            <Link
              to={`/rooms/${room.id}`}
              key={room.id}
              className="block" // Added for proper link behavior
            >
              <motion.div
                className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* ... image and content remains the same */}
                <div className="relative overflow-hidden group">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-[220px] sm:h-[250px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex  items-start mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-serif text-[#2C2C2C]">
                      {room.title}
                      <p className="text-[#B4916C] font-sans text-sm sm:text-base">
                        ${room.price} / Night
                      </p>
                    </h3>
                    {/* <div className="text-right">
                    <p className="text-[#B4916C] font-semibold text-sm sm:text-base">
                      ${room.price} / Night
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">/ Night</p>
                  </div> */}
                  </div>
                  <hr />
                  <div className="py-5 grid grid-cols-2 gap-3 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-[#B4916C]" />
                      <span>{room.persons}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed size={18} className="text-[#B4916C]" />
                      <span>{room.bed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi size={18} className="text-[#B4916C]" />
                      <span>{room.wifi}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-[18px] h-[18px] text-[#B4916C]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M7 9L7 5C7 3.89543 7.89543 3 9 3L15 3C16.1046 3 17 3.89543 17 5L17 9" />
                        <path d="M3 12C3 10.8954 3.89543 10 5 10L19 10C20.1046 10 21 10.8954 21 12L21 19C21 20.1046 20.1046 21 19 21L5 21C3.89543 21 3 20.1046 3 19L3 12Z" />
                      </svg>
                      <span>{room.bathtub}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LuxuryRooms;
