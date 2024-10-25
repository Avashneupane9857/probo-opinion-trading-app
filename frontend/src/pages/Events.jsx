import BigCards from "../components/BigCards";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

function Events() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen ">
      <Navbar />
      <div className="w-[90%] mx-auto mt-14">
        {" "}
        <h1 className="font-bold text-[20px] mb-7">Trending Option</h1>
        <BigCards />
        <Cards />
      </div>
    </div>
  );
}

export default Events;
