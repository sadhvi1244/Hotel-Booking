import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import {
  MapPin,
  Phone,
  Mail,
  Users,
  Building,
  UtensilsCrossed,
  Calendar,
  X,
} from "lucide-react";
import design from "/src/assets/desing.png";
import { motion } from "framer-motion";

const roomTypes = ["Standard Room", "Executive Room", "Business Suite"];
const mealPlans = ["Continental Plan (inc. Bf)", "European Plan (only stay)"];

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
      
      Thank you for choosing our hotel!`;
    const blob = new Blob([receiptContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Reservation_${data.name.replace(
      / /g,
      "_"
    )}_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white p-6 md:p-8 max-w-md w-full relative animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close receipt"
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

const ContactPage = () => {
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
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const phoneRegex =
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{4,6}$/;
    return (
      formData.name.trim() &&
      phoneRegex.test(formData.phone) &&
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
      alert("Please fill in all required fields correctly");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      alert("Error submitting form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        {/* Page Banner */}
        <section className="relative h-[400px] md:h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
          </div>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] mb-4">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl font-light">
                Home &gt; Contact Us
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-24">
            {/* Reservation Form */}
            <div className="p-8 sm:p-10 bg-white shadow-none">
              <div className="text-left mb-10">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <span className="text-[#AE7D54] text-sm tracking-[0.2em] uppercase ">
                    Contact Us
                  </span>
                  <img src={design} alt="Design" className="w-8 h-auto" />
                </div>
                <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-gray-900 mb-2">
                  Book Your Stay
                </h2>
                <p className="text-gray-600 mt-2">
                  We'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="relative">
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="bg-[#F2F2F2] border-0 h-14 text-base pl-12 pr-6 rounded-none"
                      required
                      aria-label="Full Name"
                    />
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#AE7D54]" />
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      pattern="[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{4,6}"
                      className="bg-[#F2F2F2] border-0 h-14 text-base pl-12 pr-6 rounded-none"
                      required
                      aria-label="Phone Number"
                    />
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#AE7D54]" />
                  </div>
                </div>

                {/* Date Inputs */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      type={showCheckIn ? "date" : "text"}
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      placeholder="Check-in"
                      onFocus={() => setShowCheckIn(true)}
                      onBlur={(e) => {
                        if (!e.target.value) setShowCheckIn(false);
                      }}
                      className="bg-[#F2F2F2] border-0 h-14 text-base pl-12 pr-6 rounded-none"
                      required
                      aria-label="Check-in Date"
                    />
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#AE7D54]" />
                  </div>

                  <div className="relative">
                    <Input
                      type={showCheckOut ? "date" : "text"}
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      placeholder="Check-out"
                      onFocus={() => setShowCheckOut(true)}
                      onBlur={(e) => {
                        if (!e.target.value) setShowCheckOut(false);
                      }}
                      className="bg-[#F2F2F2] border-0 h-14 text-base pl-12 pr-6 rounded-none"
                      required
                      aria-label="Check-out Date"
                    />
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#AE7D54]" />
                  </div>
                </div>

                {/* Guests & Room Type */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      placeholder="Number of Guests"
                      min="1"
                      className="bg-[#F2F2F2] border-0 h-14 text-base pl-12 pr-6 rounded-none"
                      required
                      aria-label="Number of Guests"
                    />
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#AE7D54]" />
                  </div>

                  <div className="relative">
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="w-full bg-[#F2F2F2] border-0 h-14 text-base pl-12 pr-10 appearance-none rounded-none cursor-pointer"
                      required
                      aria-label="Room Type"
                    >
                      {roomTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#AE7D54]" />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Meal Plan */}
                <div className="relative">
                  <select
                    name="mealPlan"
                    value={formData.mealPlan}
                    onChange={handleInputChange}
                    className="w-full bg-[#F2F2F2] border-0 h-14 text-base pl-12 pr-10 appearance-none rounded-none cursor-pointer"
                    required
                    aria-label="Meal Plan"
                  >
                    {mealPlans.map((plan) => (
                      <option key={plan} value={plan}>
                        {plan}
                      </option>
                    ))}
                  </select>
                  <UtensilsCrossed className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#AE7D54]" />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>

                {/* Special Request */}
                <Textarea
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleInputChange}
                  placeholder="Special Requests"
                  className="bg-[#F2F2F2] border-0 min-h-[150px] text-base p-6 rounded-none"
                  aria-label="Special Requests"
                />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-[#FDECE3] border border-[#9a6b43] hover:bg-[#9a6b43] text-[#666666] hover:text-white h-14 text-lg font-medium rounded-none transition-all"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Submit reservation"
                >
                  {isLoading ? "Processing..." : "SUBMIT"}
                </motion.button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col py-12 md:py-12">
              <div className="mb-12">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <span className="text-[#AE7D54] text-sm tracking-[0.2em] uppercase">
                    Need any help?
                  </span>
                  <img src={design} alt="Design" className="w-8 h-auto" />
                </div>
                <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-gray-900 mb-4">
                  Get in touch with us
                </h2>
                <p className="text-gray-600 text-lg">
                  For bookings, inquiries, or any assistance, feel free to reach
                  out to us
                </p>
              </div>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-6">
                  <div className="bg-[#FDECE3] hover:bg-[#9a6b43] p-6 flex items-center justify-center group transition-colors">
                    <Phone className="h-6 w-6 text-[#666666] group-hover:text-white transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xl font-['Playfair_Display'] mb-1">
                      Have any question?
                    </h3>
                    <p className="text-gray-600 text-lg">+91 960 267 9997</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6">
                  <div className="bg-[#FDECE3] hover:bg-[#9a6b43] p-6 flex items-center justify-center group transition-colors ">
                    <Mail className="h-6 w-6 text-[#666666] group-hover:text-white transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xl font-['Playfair_Display'] mb-1">
                      Write email
                    </h3>
                    <p className="text-gray-600 text-lg">
                      reservationhotelthepride@gmail.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-6">
                  <div className="bg-[#FDECE3] hover:bg-[#9a6b43] p-6 flex items-center justify-center group transition-colors">
                    <MapPin className="h-6 w-6 text-[#666666] group-hover:text-white transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xl font-['Playfair_Display'] mb-1">
                      Visit anytime
                    </h3>
                    <p className="text-gray-600 text-lg">
                      267, Rajeev Gandhi Nagar, Kota
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[500px] mb-6">
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1735.424996912345!2d75.84705593557186!3d25.13767001586691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f84e6b0488a05%3A0xf2bc203402ba2d82!2sHotel%20The%20Pride!5e1!3m2!1sen!2sin!4v1743173835894!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {isSubmitted && (
          <ReceiptPopup data={formData} onClose={() => setIsSubmitted(false)} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
