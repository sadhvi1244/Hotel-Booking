import React from "react";
import design from "/src/assets/desing.png";

const foods = [
  {
    id: 1,
    name: "Indian Thali",
    price: 39,
    description: "Lorem Ipsum is that it smt",
    image:
      "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    tag: "LUNCH",
  },
  {
    id: 2,
    name: "Samosa",
    price: 26,
    description: "Lorem Ipsum is that it smt",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    tag: "STARTER",
  },
  {
    id: 3,
    name: "Spaghetti",
    price: 37,
    description: "Lorem Ipsum is that it smt",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tag: "NEW",
  },
  {
    id: 4,
    name: "Vegetarian Soup",
    price: 42,
    description: "Lorem Ipsum is that it smt",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    tag: "GLUTEN FREE",
  },
  {
    id: 5,
    name: "Noodles",
    price: 16,
    description: "Lorem Ipsum is that it smt",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    tag: "NEW",
  },
  {
    id: 6,
    name: "pAV BAJI",
    price: 19,
    description: "Lorem Ipsum is that it smt",
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    tag: "VEG",
  },
  {
    id: 7,
    name: "Vegetarian Fried",
    price: 34,
    description: "Lorem Ipsum is that it smt",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    tag: "NEW",
  },
  {
    id: 8,
    name: "Pasta",
    price: 71,
    description: "Lorem Ipsum is that it smt",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tag: "FISH",
  },
];

const SpecialtyFoods = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm p-3 text-[#ae7d54] uppercase tracking-widest flex items-center justify-center gap-2 ">
            <img src={design} alt="Design" className="p-1" />
            Hoteler best menus
            <img src={design} alt="Design" className="p-1" />
          </span>
          <h2 className="text-4xl font-['Playfair_Display'] text-[#2A2A2A]">
            Unique Specialty Foods
          </h2>
        </div>

        {/* Responsive Layout */}
        <div className="flex flex-wrap justify-between gap-6 px-10 ">
          {foods.map((food) => (
            <div
              key={food.id}
              className="w-full sm:w-[100%] md:w-[48%] lg:w-[48%] xl:w-[46%] flex items-start gap-4"
            >
              {/* Image */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium text-[#2A2A2A] mr-4">
                    {food.name}
                  </h3>
                  <div className="flex-grow border-b border-dotted  border-[#c0bfbd]"></div>
                  <span className="ml-4 text-xl font-medium text-[#2A2A2A]">
                    {food.price}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <p className="text-gray-500 text-sm">{food.description}</p>
                  <span className="ml-auto text-xs px-2 py-1 border border-[#C8A97E] text-[#C8A97E]">
                    {food.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtyFoods;
