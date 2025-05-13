import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import SpecialOffers from "../components/home/SpecialOffers";
import OutdoorActivities from "../components/home/OutdoorActivities";
import VideoBanner from "../components/home/VideoBanner";
import LuxuryRooms from "../components/home/LuxuryRooms";
import HotelServices from "../components/home/HotelServices";
import SpecialtyFoods from "../components/home/SpecialtyFoods";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/home/ContactSection";
import Highlights from "../components/home/Highlights";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SpecialOffers />
        <OutdoorActivities />
        <VideoBanner />
        <LuxuryRooms />
        <HotelServices />
        <SpecialtyFoods />
        <Testimonials />
        <ContactSection />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
