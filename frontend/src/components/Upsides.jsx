import { up1, up2, up3, up4 } from "../assets";

function Upsides() {
  return (
    <div className="w-[90%] mx-auto mt-20 font-bold tracking-widest">
      <h1 className="text-[55px]">
        Probo takes care of you,
        <br /> so you take care of your trades.
      </h1>
      <div className="grid grid-cols-4 gap-7 mt-20">
        <div>
          <img src={up1} alt="" />
          <h1 className="font-bold mt-16">
            All the news without the <br /> noise
          </h1>
          <p className="font-light mt-4">
            Probo is all about understanding the world around us and bene
            fitting from our knowledge. Everything on Probo is based on real
            events that you can learn about, verify and follow yourself.
          </p>
        </div>
        <div>
          <img src={up2} alt="" />
          <h1 className="font-bold mt-16">
            Fastest news feed in the <br /> game
          </h1>
          <p className="font-light mt-4">
            Our experts go through tons of information to get to the very core
            of a world event. They help you develop not only an opinion about
            events but also a better understanding of the world around us.
          </p>
        </div>
        <div>
          <img src={up3} alt="" />
          <h1 className="font-bold mt-16">
            The power to exit trades, <br /> anytime
          </h1>
          <p className="font-light mt-4">
            Probo is an opinion trading platform. And, like a true trading
            platform, Probo gives you the power to exit. You can withdraw from a
            trade, if it’s not going in the direction you thought it will go.
          </p>
        </div>
        <div>
          <img src={up4} alt="" />
          <h1 className="font-bold mt-16">
            The pulse of society is on <br /> Probo
          </h1>
          <p className="font-light mt-4">
            Besides helping you learn important financial & trading skills,
            Probo also helps you understand the collective thoughts of Indians.
            Knowledge that is crucial for the betterment of our country.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Upsides;
