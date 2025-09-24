import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Shared Components
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import LetsTalkButton from "./components/LetsTalkButton";

// Home Page Sections
import Hero from "./components/Hero";
import RecentWork from "./components/RecentWork";
import LoftloomProject from "./components/LoftloomProject";
import IMusicProject from "./components/IMusicProject";
import TechnisProject from "./components/TechnisProject";
import WhoWeAre from "./components/WhoWeAre";
import Achievements from "./components/Achievements";
import PartnerLoveReviews from "./components/PartnerLoveReviews";
import MarqueeSection from "./components/MarqueeSection";
import DribbbleShowcase from "./components/DribbbleShowcase";
import JoinOurJungleTrek from "./components/JoinOurJungleTrek";
import SocialLinks from "./components/SocialLinks";
import ContactSection from "./components/ContactSection";

// Separate Pages
import LegacyStatement from "./components/LegacyStatement";
import RoarTogether from "./components/RoarTogether";

export default function App() {
  return (
    <Router>
      <CustomCursor />
      <LetsTalkButton />
      <Navbar />

      <Routes>
        {/* Home Page with all sections */}
        <Route
          path="/"
          element={
            <div className="w-full h-full bg-black text-white">
              <Hero />
              <RecentWork />
              <LoftloomProject />
              <IMusicProject />
              <TechnisProject />
              <WhoWeAre />
              <Achievements />
              <PartnerLoveReviews />
              <MarqueeSection />
              <DribbbleShowcase />
              <JoinOurJungleTrek />
              <SocialLinks />
              <ContactSection />
            </div>
          }
        />

        {/* Separate Pages */}
        <Route path="/legacy" element={<LegacyStatement />} />
        <Route path="/roar" element={<RoarTogether />} />
      </Routes>
    </Router>
  );
}
