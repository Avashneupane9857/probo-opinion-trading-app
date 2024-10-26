import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HeroVid from "../components/HeroVid";
import Navbar from "../components/Navbar";
import ScrollFet from "../components/ScrollFet";
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
      <div className=" bg-[#F5F5F5] ">
        <div className="w-[90%] mx-auto">
          {" "}
          <ScrollFet />
        </div>
      </div>

      <div className="bg-white">
        {" "}
        <Upsides />
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
