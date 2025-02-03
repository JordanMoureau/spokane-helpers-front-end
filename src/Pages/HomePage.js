import React from "react";
import NavBar from "../Components/Nav";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import VolunteerSection from "../Components/VolunteerSection";
import DonationImpact from "../Components/DonationImpact";
import MaxImpact from "../Components/MaxImpact";
import FloatingMemberButton from "../Components/FloatingMemberButton";

export default function HomePage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <NavBar />
      <HeroSection />
      <InfoSection />
      <DonationImpact />
      <VolunteerSection />
      <MaxImpact />
      <FloatingMemberButton />
      <Footer />
    </div>
  );
}
