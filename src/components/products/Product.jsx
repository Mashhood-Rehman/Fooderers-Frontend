import { useState } from "react";
import { motion } from "framer-motion";
import FastFood from "./FastFood";
import Drinks from "./Drinks";
import Desserts from "./Desserts";
import Chinese from "./Chinese";
import Desi from "./Desi";

const Product = () => {
  const [activeTab, setActiveTab] = useState("All");

  const renderContent = () => {
    switch (activeTab) {
      case "All":
        return (
          <>
            <FastFood />
            <Desi />
            <Chinese />
            <Desserts />
            <Drinks />
          </>
        );
      case "Fast Food":
        return <FastFood />;
      case "Desi":
        return <Desi />;
      case "Chinese":
        return <Chinese />;
      case "Desserts":
        return <Desserts />;
      case "Drinks":
        return <Drinks />;
      default:
        return null;
    }
  };

  return (
    <div id="Product" className="bg-white m-auto p-auto">
      <h1 className="py-5 md:px-10 lg:px-5 px-3 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        Menu
      </h1>
      <div className="grid grid-cols-3 items-center justify-center lg:grid-cols-6 pb-5">
        <button className="hover:bg-blue-600 py-2 px-5 rounded-xl duration-300 ease-in-out" onClick={() => setActiveTab("All")}>All</button>
        <button className="hover:bg-blue-600 py-2 px-5 rounded-xl duration-300 ease-in-out" onClick={() => setActiveTab("Fast Food")}>Fast Food</button>
        <button className="hover:bg-blue-600 py-2 px-5 rounded-xl duration-300 ease-in-out" onClick={() => setActiveTab("Desi")}>Desi</button>
        <button className="hover:bg-blue-600 py-2 px-5 rounded-xl duration-300 ease-in-out" onClick={() => setActiveTab("Chinese")}>Chinese</button>
        <button className="hover:bg-blue-600 py-2 px-5 rounded-xl duration-300 ease-in-out" onClick={() => setActiveTab("Desserts")}>Desserts</button>
        <button className="hover:bg-blue-600 py-2 px-5 rounded-xl duration-300 ease-in-out" onClick={() => setActiveTab("Drinks")}>Drinks</button>
      </div>
      <div className="overflow-hidden">
        <motion.div
          key={activeTab} // Key is important for re-mounting
          initial={{ opacity: 0 }} // Initial state
          animate={{ opacity: 1 }} // Animation on mount
          exit={{ opacity: 0 }} // Animation on unmount
          transition={{ duration: 0.5 }} // Transition duration
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
