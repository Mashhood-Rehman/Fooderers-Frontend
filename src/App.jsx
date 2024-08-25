import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
// import Slider from "./components/Slider";
import Reservation from "./components/Reservation";
import Product from "../src/components/products/Product";
import Contact from "./Contact";
import FastFood from "./components/products/FastFood";
import Desi from "./components/products/Desi";
import Chinese from "./components/products/Chinese";
import Desserts from "./components/products/Desserts";
import Drinks from "./components/products/Drinks";
import Landingpage from "./components/products/Landingpage";
import "./App.css";
import Dispatch from "./components/Dispatch";
import Cancel from "./components/Cancel";
import Success from "./components/Success";
import {ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const pagePath = window.location.href;



  return (
    <div>

      {pagePath == "http://localhost:5174/dispatch" ? <Routes>
          <Route path="/dispatch"  element= {<Dispatch />} />
        </Routes> : <div>
        <Navbar  
      />

      <Landingpage />
      <Product />
      {/* <Slider /> */}
      <FastFood  />
      <Desi  />
      <Chinese  />
      <Desserts  />
      <Drinks  />
      <Reservation />
      <Contact />
      <Routes>
        <Route path="/success" element={<Success/>} />
        <Route path="/cancel" element={<Cancel/>} />
        <Route />
      </Routes>
      <ToastContainer/>
          </div>}

    
    </div>
  );
};

export default App;
