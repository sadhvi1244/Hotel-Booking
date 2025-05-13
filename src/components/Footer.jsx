import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { IoMdSend } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "/Logo 750px 2.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Newsletter */}
          <div className="text-center md:text-left lg:pr-4 xl:pr-8">
            <Link to="/">
              <img
                src={logo}
                alt="The Pride Logo"
                className="w-32 sm:w-40 mb-6 mx-auto md:mx-0 hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-neutral-400 mb-6 text-base lg:text-lg font-['Playfair_Display'] leading-relaxed">
              Feel free to reach out if you want collaborate with us, or simply
              chat.
            </p>
            <div className="space-y-4">
              <form className="flex items-center bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 focus-within:border-gold transition-colors max-w-[300px] mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-4 py-3 sm:px-5 sm:py-3 focus:outline-none placeholder-neutral-500 text-neutral-200 text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="bg-gold text-neutral-900 px-4 py-3 sm:px-5 sm:py-3 hover:bg-gold/90 transition-colors"
                >
                  <IoMdSend className="text-xl text-[#AE7D54]" />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left lg:px-4">
            <h3 className="text-lg sm:text-xl text-zinc-200 font-['Playfair_Display'] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-4 font-['Playfair_Display']">
              {[
                { to: "/", text: "Home" },
                { to: "/about", text: "About Us" },
                { to: "/rooms", text: "Rooms & Suites" },
                { to: "/services", text: "Services" },
                { to: "/contact", text: "Contact Us" },
              ].map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.to}
                    className="text-neutral-400 hover:text-gold transition-colors text-base sm:text-lg flex items-center justify-center md:justify-start group relative"
                  >
                    <span className="hidden md:block absolute -left-4 w-2 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left lg:px-4">
            <h3 className="text-lg sm:text-xl text-zinc-200 font-['Playfair_Display'] mb-6">
              Contact Details
            </h3>
            <ul className="space-y-4 sm:space-y-5 font-['Playfair_Display']">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                <span className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  267, Rajeev Gandhi Nagar, Near Allen Career Institute,
                  <br className="hidden sm:block" />
                  Sankalp, Kota, Rajasthan - 324005
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-center gap-3">
                <Phone className="text-gold flex-shrink-0" size={18} />
                <a
                  href="tel:+919602679997"
                  className="text-neutral-400 hover:text-gold transition-colors text-sm sm:text-base"
                >
                  +91 960 267 9997
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center gap-3">
                <Mail className="text-gold flex-shrink-0" size={18} />
                <a
                  href="mailto:reservationhotelthepride@gmail.com"
                  className="text-neutral-400 hover:text-gold transition-colors text-sm sm:text-base"
                >
                  reservation@hotelthepride.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left lg:px-4">
            <h3 className="text-lg sm:text-xl text-zinc-200 font-['Playfair_Display'] mb-6">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-start gap-3 sm:gap-4 flex-wrap">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaLinkedinIn />, link: "#" },
                { icon: <FaWhatsapp />, link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800 rounded-full flex items-center justify-center text-lg sm:text-xl hover:bg-gold hover:text-neutral-900 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center font-['Playfair_Display']">
          <p className="text-neutral-500 text-sm sm:text-base">
            © {new Date().getFullYear()} The Pride. All rights reserved.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
            <Link
              to="/privacy"
              className="text-neutral-500 hover:text-gold transition-colors text-sm sm:text-base"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-neutral-500 hover:text-gold transition-colors text-sm sm:text-base"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
