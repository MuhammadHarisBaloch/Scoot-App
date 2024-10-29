"use client";

import AboutMobile from "@/components/AboutPage/AboutMobile";
import AboutScooter from "@/components/AboutPage/AboutScooter";
import AboutValues from "@/components/AboutPage/AboutValues";
import FAQPortion from "@/components/AboutPage/FAQPotion";
import Footer from "@/components/HomePage/Footer";
import WebsiteLayout from "@/components/WebLayout";
import AboutDashboard from "@/components/AboutPage/AboutDashboard";

export default function AboutPage() {
  return (
    <WebsiteLayout>
      <AboutDashboard />
      <AboutMobile />
      <AboutScooter />
      <AboutValues heading={"Our values"} />
      <FAQPortion />
      <Footer />
    </WebsiteLayout>
  );
}
