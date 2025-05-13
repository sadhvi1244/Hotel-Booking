import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/Button";
import ImageCarousel from "../components/ui/ImageCarousel";
import { motion, useInView, useAnimation } from "framer-motion";
import s from "../assets/Border.png";
import s1 from "../assets/Border (1).png";
import s2 from "../assets/Border (2).png";
import s3 from "../assets/Border (3).png";
import s4 from "../assets/Border (4).png";
import s5 from "../assets/Border (5).png";
import img from "/src/assets/feature1.png";

const roomsData = [
  {
    id: "1",
    title: "Deluxe Room",
    longDescription:
      "Our Deluxe Rooms are designed for comfort and simplicity, ideal for solo travelers or couples. With a clean, modern look and smart interiors, these rooms provide a refreshing ambiance for a relaxing stay. Each room is equipped with essential amenities, including a comfortable bed, an attached bathroom with hot and cold water, and round-the-clock service. Guests also enjoy a personal butler kitchen featuring a refrigerator, microwave, and Keurig coffee brewer for added convenience.",

    size: "600Sq",
    Occupancy: "1-2 Persons",
    bed: "2 Single Bed",
    view: "City Park View",
    images: [
      img,
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    ],
    amenities: [
      "Air Conditioning",
      "Smart TV",
      "Free Wifi",
      "King Size Bed",
      "Room Service",
      "Free Parking",
    ],
    amenityIcons: {
      "Air Conditioning": s,
      "Smart TV": s1,
      "Free Wifi": s2,
      "King Size Bed": s3,
      "Room Service": s4,
      "Free Parking": s5,
    },
  },
  {
    id: "3",
    title: "Premium Suite",

    longDescription:
      "Experience elevated comfort in our premium Suite Rooms, ideal for long stays or those seeking an upscale experience. With over 400 sq. ft. of space, a separate living area, and elegant, modern interiors, the suite offers complete privacy and luxury. Enjoy premium bathroom amenities, bathrobes, daily newspaper, and personalized wake-up services. For added comfort, each suite includes a fully equipped butler kitchen with a refrigerator, microwave, and Keurig coffee brewer, along with 24×7 dedicated service.",
    size: "55m²",
    Occupancy: "1-2 Persons",
    bed: "2 Single Bed",
    view: "City Park View",
    images: [
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    ],
    amenities: [
      "Air Conditioning",
      "Smart TV",
      "Free Wifi",
      "King Size Bed",
      "Room Service",
      "Free Parking",
    ],
    amenityIcons: {
      "Air Conditioning": s,
      "Smart TV": s1,
      "Free Wifi": s2,
      "King Size Bed": s3,
      "Room Service": s4,
      "Free Parking": s5,
    },
  },
  {
    id: "2",
    title: "Executive Rooms",
    longDescription:
      "Perfect for business travelers and small families, our Executive Rooms offer extra space and a contemporary design that blends style with practicality. These rooms feature a well-lit work area, comfortable seating, and 24×7 in-room service. The modern décor and thoughtful layout create a balanced space for both productivity and relaxation. Guests can also make use of the in-room butler kitchen equipped with a refrigerator, microwave, and Keurig coffee brewer.",
    size: "600Sq",
    Occupancy: "1-4 Persons",
    bed: "King Size Bed",
    view: "City Park View",
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    ],
    amenities: [
      "Air Conditioning",
      "Smart TV",
      "Free Wifi",
      "King Size Bed",
      "Room Service",
      "Free Parking",
    ],
    amenityIcons: {
      "Air Conditioning": s,
      "Smart TV": s1,
      "Free Wifi": s2,
      "King Size Bed": s3,
      "Room Service": s4,
      "Free Parking": s5,
    },
  },
];

const RoomDetailPage = () => {
  const { id } = useParams();
  const room = roomsData.find((r) => r.id === id) || roomsData[0];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[200px] sm:h-[300px] px-4 md:px-8 lg:px-28">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
          </div>

          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-['Playfair_Display'] mb-4 sm:mb-6 font-light tracking-tight">
                Rooms and Suites
              </h1>
              <p className="text-sm sm:text-base">Home &gt; Rooms Details</p>
            </div>
          </div>
        </section>

        {/* Image Gallery + Booking Section */}
        <section className="py-8 pt-12 sm:pt-28 px-4 md:px-8 lg:px-16 xl:px-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-6 xl:gap-8">
              {/* Image Carousel */}
              <div className="lg:w-[65%] xl:w-2/3">
                <ImageCarousel
                  images={room.images.map((img) => ({
                    src: img,
                    alt: room.title,
                  }))}
                />
              </div>

              {/* Booking Card */}
              <div className="lg:w-[35%] xl:w-1/3 h-full">
                <div className="sticky top-24 bg-[#F6F7F9] p-4 sm:p-6 shadow-lg border border-gray-200 rounded-xl">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-['Playfair_Display'] mb-2 text-gray-800">
                          Check In
                        </label>
                        <input
                          type="date"
                          className="w-full p-2 sm:p-3 border rounded-md bg-white text-sm focus:ring-2 focus:ring-[#AE7D54] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-['Playfair_Display'] mb-2 text-gray-800">
                          Check Out
                        </label>
                        <input
                          type="date"
                          className="w-full p-2 sm:p-3 border rounded-md bg-white text-sm focus:ring-2 focus:ring-[#AE7D54] focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-['Playfair_Display'] mb-2 text-gray-800">
                        Guests
                      </label>
                      <select className="w-full p-2 sm:p-3 border rounded-md bg-white text-sm focus:ring-2 focus:ring-[#AE7D54] focus:outline-none">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num}>
                            {num} Guest{num > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                    <motion.button
                      className="mt-4 w-full py-2 sm:py-3 bg-[#F8F5F0] border border-[#AE7D54] text-[#AE7D54] text-sm font-semibold hover:bg-[#AE7D54] hover:text-white transition duration-300 rounded-md"
                      whileHover={{ scale: 1.0 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      BOOK NOW
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Room Details Section - Updated alignment */}
        <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col">
              {/* Remove lg:flex-row and ensure full width */}
              <div className="w-full">
                <div className="max-w-full lg:pr-[33%]">
                  {" "}
                  {/* Added right padding for desktop alignment */}
                  <h1 className="text-2xl sm:text-3xl font-['Playfair_Display'] mb-4 sm:mb-6">
                    Description of Room
                  </h1>
                  <p className="mb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {room.longDescription}
                  </p>
                  <div className="bg-white border border-[#AE7D54] rounded-lg p-4 w-full flex flex-wrap justify-between gap-4 shadow-sm mb-6">
                    {/* Room specs grid */}

                    {[
                      { label: "Room Size", value: room.size },
                      { label: "Rooms Bed", value: room.bed },
                      { label: "Occupancy", value: room.Occupancy },
                      { label: "View", value: room.view },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="w-full sm:w-[48%] lg:w-[23%] text-center p-2"
                      >
                        <span className="block text-gray-500 text-xs sm:text-sm mb-1 font-['Playfair_Display']">
                          {item.label}
                        </span>
                        <span className="block text-black text-sm sm:text-base font-['Playfair_Display']">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-6 sm:pt-8">
                    <h2 className="text-xl sm:text-2xl xl:text-3xl font-['Playfair_Display'] mb-4 sm:mb-6 text-center lg:text-left font-medium">
                      Room Facilities
                    </h2>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                      {room.amenities.map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <img
                            src={room.amenityIcons[amenity]}
                            alt={amenity}
                            className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
                          />
                          <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium text-center sm:text-left leading-tight">
                            {amenity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RoomDetailPage;
