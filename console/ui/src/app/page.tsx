import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Pricing />
      <Footer />
    </div>
  );
}
