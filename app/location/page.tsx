"use client";
import Footer from "@/components/HomePage/Footer";
import AboutCity from "@/components/LocationPage/AboutCity";
import LocationDashboard from "@/components/LocationPage/LocationDashboard";
import WebsiteLayout from "@/components/WebLayout";

export default function LocationPage() {
  return (
    <>
      <WebsiteLayout>
        <LocationDashboard />
        <AboutCity />
        <Footer />
      </WebsiteLayout>
    </>
  );
}
