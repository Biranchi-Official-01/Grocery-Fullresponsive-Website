import React from "react";
import Heading from "../Heading/Heading";
import fruitsCat from "../../assets/fruits-and-veggies.png";
import deiryCat from "../../assets/dairy-and-eggs.png";
import meatCat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Category = () => {

    const renderCards = Catagory.map(card=>{
        return(
            <div className="flex-1 basis-[300px]"key={card.id}>
                <div className="w-full min-h-[30vh] relative -mb-10">
                    <img src={card.image} className="absolute bottom-0"/>
                </div>
                <div className="bg-zinc-100 pt-17 p-8 rounded-xl ">
                    <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
                    <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
                    <Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-600 text-white px-8 py-3 rounded-lg md:text-lg font-medium hover:shadow-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 active:scale-85 hover:scale-95'>See All</Link>
                </div>
            </div>
        )
    })

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10md:py-20 py-10">
        <Heading highlight="Shop" heading="By Category" />

        <div className="flex flex-wrap md:gap-10 md:mt-15 -mt-5 md:ml-0 md:mr-0 ml-10 mr-10">
            {renderCards}
        </div>
      </div>
    </section>
  );
};

export default Category;

const Catagory = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh Organic Produce source daily from local Farms. Explore a Wide range of Sesonal fruits and crisp Vegetables.",
    image: fruitsCat,
    path: '/fruits'
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses with sufficient vitamin.",
    image: deiryCat,
    path: '/dairy'
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description:
      "High-Quality , responsibly sourced meat and seafood. Choose from cuts, marinated Options and more..",
    image: meatCat,
    path: '/seafood'
  },
];


