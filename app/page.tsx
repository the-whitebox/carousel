"use client";
import Carousel from "@/src/components/Carousel";
import "../src/styles/globals.css";
import { FeatureProvider } from "@/src/context/FeatureContext";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 px-8 py-10">
      <FeatureProvider>
        <Carousel />
      </FeatureProvider>
    </div>
  );
}
