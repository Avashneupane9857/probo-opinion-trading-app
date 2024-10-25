import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HeroVid from "../components/HeroVid";
import Navbar from "../components/Navbar";
import Upsides from "../components/Upsides";

function LandingPage() {
  return (
    <div>
      <div className="bg-[#F5F5F5]">
        <Navbar />
        <div className="w-[93%] mx-auto">
          {" "}
          <Hero />
        </div>
      </div>
      <HeroVid />
      <Upsides />
      <Footer />
    </div>
  );
}

export default LandingPage;
