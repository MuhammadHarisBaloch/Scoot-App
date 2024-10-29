"use client";
import AboutPayment from "@/components/HomePage/AboutPayment";
import AboutRide from "@/components/HomePage/AboutRide";
import AppFlowPortion from "@/components/HomePage/AppFlowPortion";
import ComingToCity from "@/components/HomePage/ComingToCity";
import Dashboard from "@/components/HomePage/Dashboard";
import Footer from "@/components/HomePage/Footer";
import WebsiteLayout from "@/components/WebLayout";

export default function Home() {
  return (
    <>
      <WebsiteLayout>
        <Dashboard />
        <AppFlowPortion />
        <AboutRide />
        <ComingToCity />
        <AboutPayment />
        <Footer />
      </WebsiteLayout>
    </>
  );
}
