import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "./About";
import Services from "./Services";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Footer />
    </main>
  );
};

export default Index;
