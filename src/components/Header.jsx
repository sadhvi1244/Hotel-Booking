import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/Logo 750px 2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideTopHeader, setHideTopHeader] = useState(false);
  const location = useLocation();
  const closeMenu = () => setIsMenuOpen(false);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // Handle scroll effects
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!isMenuOpen) {
        setIsScrolled(currentScrollY > 50);
        setHideTopHeader(currentScrollY > lastScrollY && currentScrollY > 50);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Rooms", path: "/rooms" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Header */}
      <div
        className={`hidden md:block w-full bg-black/90 text-white text-sm px-4 lg:px-20 py-2 transition-transform duration-300 ${
          hideTopHeader ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#AE7D54] transition-colors p-2"
            >
              <FaFacebookF className="text-lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#AE7D54] transition-colors p-2"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#AE7D54] transition-colors p-2"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 sm:gap-6">
            <a
              href="mailto:reservation@hotelthepride.com"
              className="flex items-center gap-2 hover:text-[#AE7D54] transition-colors"
            >
              <Mail className="text-[#AE7D54] text-lg shrink-0" />
              <span className="text-sm">reservation@hotelthepride.com</span>
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#AE7D54] transition-colors"
            >
              <MapPin className="text-[#AE7D54] text-lg shrink-0" />
              <span className="text-sm">Rajeev Gandhi Nagar, Kota</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          isScrolled && !isMenuOpen
            ? "bg-white/95 shadow-md top-0 backdrop-blur-lg"
            : "bg-transparent md:top-[38px]"
        } ${isMenuOpen ? "!bg-transparent shadow-none" : ""}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3 md:py-4">
          <Link to="/" className="flex items-center focus-visible:outline-none">
            <motion.img
              src={logo}
              alt="Hotel The Pride Logo"
              className="w-20 md:w-28 h-auto transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm uppercase tracking-wider font-medium transition-colors px-2 py-1 ${
                  location.pathname === link.path
                    ? "text-[#AE7D54]"
                    : isScrolled
                    ? "text-gray-800 hover:text-[#AE7D54]"
                    : "text-white hover:text-[#AE7D54]"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#AE7D54]"
                    layoutId="activeLink"
                    transition={{ type: "spring", stiffness: 500 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="focus-visible:outline-none">
              <motion.button
                className="hidden lg:block px-6 py-3 bg-[#AE7D54] text-white font-semibold hover:bg-[#9a6b43] transition-colors duration-300 rounded-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BOOK NOW
              </motion.button>
            </Link>

            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className={`lg:hidden p-2 rounded-none ${
                isMenuOpen
                  ? "text-white" // Force white color when menu is open
                  : isScrolled
                  ? "text-gray-800"
                  : "text-white"
              } hover:text-[#AE7D54] transition-colors`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={28} className="stroke-[2px]" /> // Added stroke width
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 w-full h-full bg-black/90 z-[9999] flex flex-col items-center justify-center overflow-y-auto"
              onClick={closeMenu} // Close menu when clicking overlay
            >
              <div
                className="w-full max-w-xs sm:max-w-sm flex flex-col items-center py-8"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              >
                <nav className="flex flex-col gap-4 w-full">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={closeMenu}
                      className="text-lg uppercase font-medium text-white hover:text-[#AE7D54] transition-colors px-4 py-3 text-center relative"
                    >
                      {link.name}
                      {location.pathname === link.path && (
                        <motion.span
                          className="absolute left-1/2 -bottom-1 w-1/4 h-[2px] bg-[#AE7D54] -translate-x-1/2"
                          layoutId="mobileActiveLink"
                        />
                      )}
                    </Link>
                  ))}
                </nav>

                <motion.button
                  onClick={closeMenu}
                  className="mt-8 px-10 py-3 bg-[#AE7D54] text-white font-semibold hover:bg-[#9a6b43] transition-colors duration-300 rounded-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BOOK NOW
                </motion.button>

                <div className="mt-8 w-full text-center text-white space-y-4 px-4">
                  <a
                    href="tel:+919602679997"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-3 hover:text-[#AE7D54] transition-colors"
                  >
                    <Phone size={20} className="text-[#AE7D54] shrink-0" />
                    <span className="text-base">+91 960 267 9997</span>
                  </a>
                  <a
                    href="mailto:reservation@hotelthepride.com"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-3 hover:text-[#AE7D54] transition-colors"
                  >
                    <Mail size={20} className="text-[#AE7D54] shrink-0 " />
                    <span className="text-base">
                      reservation@hotelthepride.com
                    </span>
                  </a>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-3 hover:text-[#AE7D54] transition-colors"
                  >
                    <MapPin size={20} className="text-[#AE7D54] shrink-0" />
                    <span className="text-base">Rajeev Gandhi Nagar, Kota</span>
                  </a>
                </div>

                <div className="flex justify-center gap-5 mt-6">
                  {[FaFacebookF, FaInstagram, FaLinkedinIn].map(
                    (Icon, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        onClick={closeMenu}
                        className="text-white hover:text-[#AE7D54] p-2"
                        whileHover={{ y: -2 }}
                      >
                        <Icon size={20} />
                      </motion.a>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
