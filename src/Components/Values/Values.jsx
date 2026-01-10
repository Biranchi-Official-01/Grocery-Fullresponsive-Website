import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const leftvalues = value.slice(0, 2).map((item) => {
    return (
      <div key={item.id} className="flex flex-row-reverse items-center md:gap-7">
        <div>
          <span className="flex items-center justify-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-600 w-15 h-15 rounded-full">{item.icon}</span>
        </div>
        <div className="text-right">
          <h3 className="text-zinc-800 text-2xl md:flex md:flex-col hidden font-semibold">{item.title}</h3>
          <p className="text-zinc-600 mt-2 md:flex hidden">{item.description}</p>
        </div>
      </div>
    );
  });
  const rightvalues = value.slice(2, 4).map((item) => {
    return (
      <div key={item.id} className="flex items-center md:gap-7">
        <div>
          <span className="flex items-center justify-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-600 w-15 h-15 rounded-full">{item.icon}</span>
        </div>
        <div>
          <h3 className="text-zinc-800 text-2xl md:flex hidden font-semibold">{item.title}</h3>
          <p className="text-zinc-600 mt-2 md:flex hidden">{item.description}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="md:max-w-[1400px] mx-auto px-10 md:py-20 py-5">
        <Heading highlight="Our" heading="Values" />

        <div className="flex md:flex-row  flex-col md:gap-5 md:mt-22 mt-10">
          <div className="md:min-h-100 flex md:flex-col justify-between">{leftvalues}</div>

          <div  className="md:w-1/2 md:mt-0 -mt-10">
            <img src={Basket} />
          </div>

          <div className="md:min-h-100 flex md:flex-col justify-between">{rightvalues}</div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    description:
      "We build lasting trust through transparency, quality assurance, and consistent service you can rely on every day.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    description:
      "Our products are sourced daily to ensure maximum freshness, taste, and nutritional value for your family.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    description:
      "We follow strict hygiene standards and quality checks to keep your food safe and healthy.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    description:
      "Our organic products are naturally grown, chemical-free, and responsibly sourced for a healthier lifestyle.",
    icon: <FaSeedling />,
  },
];
