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
    <div id="Product" className="bg-white m-auto p-5 lg:px-20">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Menu</h1>
      
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["All", "Fast Food", "Desi", "Chinese", "Desserts", "Drinks"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 rounded-lg font-medium ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            } hover:bg-blue-600 hover:text-white transition-colors duration-300`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Content */}
      <div className=" p-5 rounded-lg ">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
