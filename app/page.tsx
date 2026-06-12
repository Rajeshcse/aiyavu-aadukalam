import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import InfoCards from "@/components/InfoCards";
import Pricing from "@/components/Pricing";
import Coaching from "@/components/Coaching";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <InfoCards />
      <Pricing />
      <Coaching />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
