import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/Button";
import design from "/src/assets/desing.png";
import img1 from "/src/assets/feature1.png";
import img2 from "/src/assets/feature2.png";
import img3 from "/src/assets/feature3.png";

const RoomsPage = () => {
  // Data for featured boxes
  const featuredSections = [
    {
      id: "1",
      title: "DISCOVER",
      subtitle: "Deluxe Room",
      description:
        "With the largest fleet of luxury catamarans, sailing and motor yachts in Santorini we guarantee the ultimate sailing experience!",
      image: img1,
    },
    {
      id: "2",
      title: "EXPERIENCE",
      subtitle: "Executive Room",
      description:
        "With the largest fleet of luxury catamarans, sailing and motor yachts in Santorini we guarantee the ultimate sailing experience!",
      image: img2,
    },
    {
      id: "3",
      title: "MODERN",
      subtitle: "Suite Room",
      description:
        "With the largest fleet of luxury catamarans, sailing and motor yachts in Santorini we guarantee the ultimate sailing experience!",
      image: img3,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80')",
            }}
          >
            {/* ✅ Top-to-bottom dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent" />
          </div>

          {/* Content on top */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] mb-6 font-light tracking-tight">
                Rooms and Suits
              </h1>
              <p className="mt-2">Home &gt; Rooms and Suits</p>
            </div>
          </div>
        </section>

        {/* Featured Rooms Section */}
        <section className="max-w-6xl mx-auto py-16 px-3 sm:px-4 lg:px-5">
          {featuredSections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-0 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Column */}
              <div className="lg:w-1/2 relative group">
                <img
                  src={section.image}
                  alt={section.subtitle}
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Text Column */}
              <div className="lg:w-1/2 bg-[#F5F5F0] p-10 flex flex-col justify-center relative">
                {/* Content */}
                <div className="text-center">
                  {/* Decorative Title */}
                  <p className="text-sm tracking-widest text-[#AE7D54]  mb-5 flex items-center justify-center gap-2">
                    <img src={design} alt="Design" className="" />
                    {section.title}
                    <img src={design} alt="Design" className="" />
                  </p>

                  {/* Main Heading */}
                  <h2 className="text-4xl font-playfair font-bold text-[#2A2A2A] mb-2">
                    {section.subtitle}
                  </h2>

                  {/* Optional Divider */}
                  <div className="w-72 h-px bg-gray-300 mx-auto mb-4"></div>

                  {/* Description */}
                  <p className="text-[#4A4A4A] font-lato text-base leading-relaxed mb-6">
                    {section.description}
                  </p>

                  {/* Button */}
                  <Button
                    className="bg-[#8B5A2B] hover:bg-[#6B4421] text-white rounded-none py-4 px-8 mx-auto font-montserrat font-bold uppercase tracking-widest text-sm"
                    asChild
                  >
                    <Link to={`/rooms/${section.id}`}>READ MORE</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RoomsPage;
