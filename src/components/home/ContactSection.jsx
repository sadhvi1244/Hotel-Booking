import { useInView } from "react-intersection-observer";
import {
  Phone,
  Calendar,
  Users,
  Building,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import design from "/src/assets/desing.png";
const roomTypes = ["Standard Room", "Executive Room", "Business Suite"];
const mealPlans = ["Continental Plan (inc. Bf)", "European Plan (only stay) "];

const ReceiptPopup = ({ data, onClose }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const downloadReceipt = () => {
    const receiptContent = `
      RESERVATION CONFIRMATION
      --------------------------
      Name: ${data.name}
      Phone: ${data.phone}
      Check-in: ${formatDate(data.checkIn)}
      Check-out: ${formatDate(data.checkOut)}
      Guests: ${data.guests}
      Room Type: ${data.roomType}
      Meal Plan: ${data.mealPlan}
      Special Request: ${data.specialRequest || "None"}
      
      Thank you for choosing our hotel!
    `;

    const blob = new Blob([receiptContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Reservation_${data.name}_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full relative animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-light mb-6 text-center text-[#1E1E1E]">
          Reservation Confirmed 🎉
        </h2>

        <div className="space-y-4 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{data.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{data.phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Check-in</p>
              <p className="font-medium">{formatDate(data.checkIn)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Check-out</p>
              <p className="font-medium">{formatDate(data.checkOut)}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Guests</p>
              <p className="font-medium">{data.guests}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Room Type</p>
              <p className="font-medium">{data.roomType}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500">Meal Plan</p>
            <p className="font-medium">{data.mealPlan}</p>
          </div>

          {data.specialRequest && (
            <div>
              <p className="text-sm text-gray-500">Special Request</p>
              <p className="font-medium">{data.specialRequest}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Button
            onClick={downloadReceipt}
            className="w-full bg-[#1E1E1E] text-white hover:bg-black h-12"
          >
            Download Receipt
          </Button>
          <Button
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 h-12"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    roomType: roomTypes[0],
    mealPlan: mealPlans[0],
    specialRequest: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    return (
      formData.name &&
      formData.phone &&
      formData.checkIn &&
      formData.checkOut &&
      formData.guests &&
      formData.roomType &&
      formData.mealPlan
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateForm()) {
      alert("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
  };

  useEffect(() => {
    if (inView) {
      gsap.from(".contact-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative min-h-screen bg-[#f8f8f8]">
      {/* Background Image */}
      <div className="hidden md:block absolute inset-0 w-full lg:w-1/2 h-full">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          alt="Luxury hotel room"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Right Background Image */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 h-full">
        <div className="relative w-full h-full">
          <img
            src="/src/assets/bgimg.png"
            alt="Right background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Contact Form Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen items-center py-16 lg:py-0">
          <div className="w-full lg:max-w-[600px] lg:mr-auto lg:translate-x-[-15%] xl:translate-x-[-20%] relative">
            {/* Mobile Contact Info */}
            <div className="lg:hidden mb-8 bg-black/90 p-6 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#333] p-3">
                  <Phone className="h-6 w-6 text-[#967E5D]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#967E5D]">
                    Call us for any inquiry
                  </p>
                  <p className="text-lg font-light text-white mt-1">
                    +91 960 267 9997
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-none shadow-sm lg:relative lg:left-[600px]">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <img src={design} alt="Design" className="p-1" />
                  <span className="text-[#967E5D] text-sm tracking-[0.2em] uppercase">
                    contact
                  </span>
                  <img src={design} alt="Design" className="p-1" />
                </div>
                <h2 className="contact-title text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] text-gray-900 mb-4">
                  Get in Touch
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="bg-[#f8f8f8] border-0 h-12 text-sm pl-10 pr-4"
                      required
                    />
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                  <div className="relative">
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="bg-[#f8f8f8] border-0 h-12 text-sm pl-10 pr-4"
                      required
                    />
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="bg-[#f8f8f8] border-0 h-12 text-sm pl-10 pr-4"
                      required
                    />
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                  <div className="relative">
                    <Input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="bg-[#f8f8f8] border-0 h-12 text-sm pl-10 pr-4"
                      required
                    />
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <Input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    placeholder="Number of Guests"
                    min="1"
                    className="bg-[#f8f8f8] border-0 h-12 text-sm pl-10 pr-4"
                    required
                  />
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="w-full bg-[#f8f8f8] border-0 h-12 text-sm pl-10 pr-10 appearance-none rounded-md"
                      required
                    >
                      {roomTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <select
                      name="mealPlan"
                      value={formData.mealPlan}
                      onChange={handleInputChange}
                      className="w-full bg-[#f8f8f8] border-0 h-12 text-sm pl-10 pr-10 appearance-none rounded-md"
                      required
                    >
                      {mealPlans.map((plan) => (
                        <option key={plan} value={plan}>
                          {plan}
                        </option>
                      ))}
                    </select>
                    <UtensilsCrossed className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <Textarea
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleInputChange}
                  placeholder="Special Request"
                  className="bg-[#f8f8f8] border-0 min-h-[120px] resize-none text-sm p-4"
                />

                <Button
                  type="submit"
                  className="w-full bg-[#1E1E1E] text-white hover:bg-black h-12 text-sm tracking-wider transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "SUBMIT"}
                </Button>
              </form>
            </div>

            {/* Desktop Contact Info */}

            <div className="hidden lg:block absolute left-[386px] bottom-32 bg-black/90 p-8  max-w-[320px]">
              <div className="flex flex-col items-start gap-5">
                <div>
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width="50"
                      height="50"
                      transform="translate(0.839966 0.25)"
                      fill="url(#pattern0_27_429)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_27_429"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use href="#image0_27_429" transform="scale(0.02)" />
                      </pattern>
                      <image
                        id="image0_27_429"
                        width="50"
                        height="50"
                        preserveAspectRatio="none"
                        href="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </div>
                <p className="text-sm font-medium text-[#967E5D]">
                  Call us for any inquiry
                </p>
                <p className="text-xl font-light text-white mt-1">
                  +91 960 267 9997
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isSubmitted && (
        <ReceiptPopup data={formData} onClose={() => setIsSubmitted(false)} />
      )}
    </div>
  );
};

export default ContactSection;
