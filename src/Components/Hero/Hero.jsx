import React from "react";
import grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className="min-h-screen max-w-[1400px] mx-auto md:flex-row flex-col px-10 flex items-center md:pt-26 pt-31">
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 md:text-lg md:px-5 md:py-2 px-2 py-1 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="md:text-7xl/20 text-4xl/12 font-bold mt-5">
            Testy Organic <span className="text-orange-500">Fruits</span> & <span className="text-orange-500">Veggies</span> <br />In Your City
          </h1>
          <p className="text-zinc-600 md:text-lg text-md max-w-[530px] md:mt-5 md:mb-10 mt-3 mb-7">
            Brad for a High Content of Benificial Substances, Our products are all fresh and healthy.
          </p>
          <Button  content="Shop Now" />
        </div>

        <div className="flex-1 md:mt-0 mt-2">
          <img src={grocery} alt="grocery img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
