import Cards from "./Cards";

function ScrollFet() {
  return (
    <div className="flex items-center h-[700px] ">
      <div className="w-[50%] text-[80px] tracking-widest font-bold">
        <h1>
          Trade when <br />
          you like,
        </h1>
        <p className="text-[57px] tracking-wide">on what you like.</p>
      </div>
      <div className="w-1/2 h-full">
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <div className="pr-4">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollFet;
