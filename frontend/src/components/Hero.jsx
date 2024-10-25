import { hero } from "../assets";

function Hero() {
  return (
    <section
      className="bg-[url('https://probo.in/assets/images/home/header/header-bg.svg')]  bg-center h-[640px] bg-no-repeat"
      style={{ backgroundSize: "100% 25%", backgroundPositionY: "100%" }}
    >
      <div className="flex  items-center">
        {/* <img
        src="https://probo.in/assets/images/home/header/header-bg.svg"
        alt="header background"
      /> */}
        <div className="w-[55%] leading-none tracking-wide mt-[50px]line-clamp-3">
          <div>
            <h1 className="text-[90px] font-normal">Invest in your</h1>
            <p className="text-[60px] font-light"> point of view</p>
          </div>
          <p className="mt-6 text-[20px] tracking-widest text-slate-500">
            Sports, Entertainment, Economy or Finance.
          </p>
          <button className="text-[18px] mt-6 bg-black rounded font-medium  text-white p-3 w-44">
            Trade Online
          </button>
        </div>

        <div className="w-[50%]">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
