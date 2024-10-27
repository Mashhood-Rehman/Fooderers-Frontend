import { useState } from "react";
import { motion } from "framer-motion";
import FastFood from "./FastFood";
import Drinks from "./Drinks";
import Desserts from "./Desserts";
import Chinese from "./Chinese";
import Desi from "./Desi"
const Product = () => {
  const [activeTab, setActiveTab] = useState("All");

  const renderContent = () => {
    switch (activeTab) {
      case "All":
        return (
          <>
           <FastFood/>
           <Desi />
           <Chinese/>
           <Desserts />
           < Drinks />
          </>
        );
      case "Fast Food":
        return <FastFood/>;
      case "Desi":
        return <Desi />;
      case "Chinese":
        return <Chinese/>;
      case "Desserts":
        return <Desserts />;
      case "Drinks":
        return < Drinks />;
      default:
        return null;
    }
  };

  // const Section = ({ title }) => (
  //   <motion.div
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1 }}
  //     exit={{ opacity: 0 }}
  //     transition={{ duration: 0.5 }}
  //     className="section"
  //   >
  //     <h2 className="text-2xl font-bold">{title}</h2>
    
  //   </motion.div>


  // );

  return (
    <div id="Product" className="flex flex-col bg-white m-auto p-auto">
      <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        Menu
      </h1>
      <div className="flex justify-evenly pb-5">
        <button className="hover:bg-blue-600 py-2 px-5 rounded-xl duration-300 ease-in-out" onClick={() => setActiveTab("All")}>All</button>
        <button  className="hover:bg-blue-600 py-2 px-5 rounded-xl duration-300 ease-in-out" onClick={() => setActiveTab("Fast Food")}>Fast Food</button>
        <button className="hover:bg-blue-600 py-2 px-5 rounded-xl duration-300 ease-in-out" onClick={() => setActiveTab("Desi")}>Desi</button>
        <button className="hover:bg-blue-600 py-2 px-5 rounded-xl duration-300 ease-in-out" onClick={() => setActiveTab("Chinese")}>Chinese</button>
        <button className="hover:bg-blue-600 py-2 px-5 rounded-xl duration-300 ease-in-out" onClick={() => setActiveTab("Desserts")}>Desserts</button>
        <button className="hover:bg-blue-600 py-2 px-5 rounded-xl duration-300 ease-in-out" onClick={() => setActiveTab("Drinks")}>Drinks</button>
      </div>
      <div className="overflow-hidden">
        {renderContent()}
      </div>
    </div>
  );
};

export default Product;
