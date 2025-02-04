import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import { SessionProvider } from "next-auth/react"

export default function Home() {
  return (
      <SessionProvider>
        <Navbar />
        <HeroSection />
        <Pricing />
        <Footer />
      </SessionProvider>
  );
}
