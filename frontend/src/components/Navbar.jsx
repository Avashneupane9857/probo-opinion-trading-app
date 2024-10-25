import { logo } from "../assets";

function Navbar() {
  return (
    <div className="  sticky top-0 z-50 bg-white/80 backdrop-blur-sm pl-10">
      <div className="pt-4 flex justify-between">
        <img className="w-24 h-8 " src={logo} alt="" />
        <div className="flex gap-11 pr-7">
          {" "}
          <h1 className="text-[12px] font-thin  ">
            For 18 years and <h1 className=" pl-8"> above only</h1>
          </h1>
          <button className="bg-black rounded font-medium font-sans text-white p-1 w-36">
            Trade Online
          </button>
        </div>
      </div>
      <div className="w-[98%] mt-2 h-[0.5px] bg-slate-300 "></div>
    </div>
  );
}

export default Navbar;
