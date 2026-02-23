import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhilosophyFacility from "@/components/PhilosophyFacility";
import Membership from "@/components/Membership";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ug-black flex flex-col font-sans">
      <Navbar />
      <Hero />
      <PhilosophyFacility />
      <Membership />
      {/* <Leaderboard /> Optional: Can be re-added later or moved to a separate page */}
      <Footer />
    </main>
  );
}
