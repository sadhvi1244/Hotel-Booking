import { useEffect } from "react";
import { TooltipProvider } from "./components/ui/Tooltip.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import RoomsPage from "./pages/RoomsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Services from "./pages/Services.jsx";
import RoomDetailPage from "./pages/RoomDetailPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import LocomotiveScroll from "locomotive-scroll";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      locomotiveScroll.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:id" element={<RoomDetailPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
