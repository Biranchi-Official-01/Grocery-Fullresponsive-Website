import React from "react";
import Heading from "../Heading/Heading";
import { useState } from "react";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards"
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Seafood"];
  const [activeTab, setActiveTab] = useState("All");

  let filteredItems = activeTab === 'All'
  ? ProductList : ProductList.filter(item=>item.category === activeTab);

  const renderCards = filteredItems.slice(0,8).map(product=>{
    return(
        <Cards key={product.id} image={product.image} title={product.title} price={product.price}/>
    )
  })

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 md:py-20 py-10">
        <Heading highlight="Our" heading="Products" />

        <div className="flex flex-wrap gap-3 justify-center mt-10 ">
           {categories.map(categories => {
            return(
                <button key={categories} className={`bg-zinc-200 cursor-pointer px-5 py-2 rounded-lg transition-all  font-semibold ${activeTab === categories ? 'bg-gradient-to-b from-orange-400 to-orange-600 text-white' : 'text-white-500'}`} onClick={()=>{
                    setActiveTab(categories)
                }}>
                {categories}
                </button>
            )
           })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-10 md:mt-20">
            {renderCards}
        </div>

        <div className="text-center mt-10 mb-10 md:mb-0 md:mt-15">
          <Link to="/allproducts" className='bg-gradient-to-b from-orange-400 to-orange-600 text-white px-8 py-3 rounded-lg md:text-lg font-medium hover:shadow-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 active:scale-85 hover:scale-95'>View All</Link>
        </div>
      </div>
    </section>
  );
};

export default Products;



