import { vid } from "../assets";

function HeroVid() {
  return (
    <div className="bg-[#262626]">
      <div className="w-[80%] mx-auto flex">
        <div className="w-[50%]">
          <h1>Samachar Vichaar Vyapaar</h1>
          <h1>Trade and Grow</h1>
          <h1>Invest in your opinions about future events and use your knowledge to trade & benefit.</h1>
        </div>{" "}
        <div className="border-4 rounded-2xl border-black">
          <video
            className="w-[90px] rounded-2xl h-[200px]"
            autoPlay
            loop
            src={vid}
          ></video>
        </div>
      </div>
    </div>
  );
}

export default HeroVid;
