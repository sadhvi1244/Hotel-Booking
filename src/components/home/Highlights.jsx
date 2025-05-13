import { Link } from "react-router-dom";
import design from "/src/assets/desing.png";

const blogPosts = [
  {
    id: 1,
    title: "Advantages of Offering Online Registration at Your Hotel",
    image: "/src/assets/event1.png",
    date: "May 15, 2025",
    author: "Relax Zone",
  },
  {
    id: 2,
    title: "Our Health Club is Now Available for Your Fitness Needs",
    image: "/src/assets/event2.png",
    date: "May 15, 2025",
    author: "Royal Suite",
  },
  {
    id: 3,
    title: "Restoring the Lighting Design in the Hotel",

    image: "/src/assets/event3.png",
    date: "Oct 20, 2025",
    author: "Apartments",
  },
];

const Highlights = () => {
  return (
    <section className="py-12 md:py-20 bg-beige px-4 md:px-8 lg:px-28">
      <div className="container mx-auto">
        <div className="text-center font-['Playfair_Display'] mb-8 md:mb-16">
          <span className="text-xs sm:text-sm md:text-base text-[#ae7d54] uppercase tracking-widest flex items-center justify-center flex-wrap gap-2">
            <img src={design} alt="Design" className="p-1 w-8 md:w-auto" />
            The Pride Highlights
            <img src={design} alt="Design" className="p-1 w-8 md:w-auto" />
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl mt-2 px-4 md:px-0">
            Check Out the Latest <br className="hidden md:block" /> Events &
            Celebrations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              {/* Blog Image */}
              <div className="relative overflow-hidden mb-4 md:mb-6 hotel-image">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 md:h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Blog Details */}
              <div className="px-2 md:px-0">
                <div className="flex items-center flex-wrap gap-x-2 text-[#B57A50] text-xs sm:text-sm md:text-base font-medium">
                  <span className="w-4 md:w-6 h-[2px] bg-[#B57A50] inline-block"></span>
                  <span>{post.author}</span>
                  <span className="mx-1 md:mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg md:text-xl mt-3 md:mt-4 font-playfair hover:text-gold transition-colors leading-snug md:leading-normal">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
