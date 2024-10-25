import { graph } from "../assets";

function BigCards() {
  return (
    <div className="bg-white border-[0.5px] rounded-xl border-slate-300 w-[70%] h-96 flex ">
      <div className="w-[50%] p-9">
        <h1 className="font-bold text-[30px] mb-2">
          India to win the 2nd Test vs New Zealand?
        </h1>
        <p>
          Match between Bengal vs Mumbai to start at 20:00 Bengal is at 0 on the
          leaderboard and has points | Mumbai is at 0 on the leaderboard and has
          0 points H2H (Last 5 Games): ast 5 Games: Bengal - W L L L Mumbai - W
          L D L L
        </p>
        <div className="flex gap-7 pl-28 pt-11">
          <button className="text-blue-500 bg-blue-100 w-28 rounded-lg p-1">
            Yes
          </button>
          <button className="text-red-500 bg-red-100 w-28 rounded-lg p-1">
            No
          </button>
        </div>
      </div>
      <img className="w-[440px] pt-4 pl-11" src={graph} alt="" />
    </div>
  );
}

export default BigCards;
