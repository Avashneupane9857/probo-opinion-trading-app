import { vid } from "../assets";

function HeroVid() {
  return (
    <div className="bg-[#262626] h-[650px]">
      <div className="w-[95%] mx-auto flex ">
        <div className="w-[50%]  ">
          <div className="flex gap-6 mt-44 mb-4">
            <h1 className="text-[55px] text-slate-400">Samachar</h1>
            <p className="text-[55px] text-white"> Vichaar </p>
            <p className="text-[55px] text-slate-400">Vyapaar</p>
          </div>
          <h1 className=" mb-4 text-[34px] text-white">Trade and Grow</h1>
          <h1 className="text-[32px] text-white">
            Invest in your opinions about future events and use your knowledge
            to trade & benefit.
          </h1>
        </div>{" "}
        <div className=" flex items-center pl-44 mt-8">
          <video
            className="p-5 w-[300px] h-[600px]  rounded-[80px] "
            autoPlay
            loop
            muted
            src={vid}
          ></video>
        </div>
      </div>
    </div>
  );
}

export default HeroVid;

//whitespace-nowrap
