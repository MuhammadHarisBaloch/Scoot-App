"use client";
import AboutValues from "@/components/AboutPage/AboutValues";
import AboutMission from "@/components/CareerPage/AboutMission";
import CareersDashboard from "@/components/CareerPage/CareerDashboard";
import ChooseField from "@/components/CareerPage/ChooseField";
import Footer from "@/components/HomePage/Footer";
import WebsiteLayout from "@/components/WebLayout";

export default function CareersPage() {
  return (
    <>
      <WebsiteLayout>
        <CareersDashboard />
        <AboutMission />
        <AboutValues heading={"Why join us?"} />
        <ChooseField />
        <Footer />
      </WebsiteLayout>
    </>
  );
}
