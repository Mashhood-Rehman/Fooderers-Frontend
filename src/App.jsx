import { Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";
import Product from "../src/components/products/Product";
import Contact from "./Contact";

import Landingpage from "./components/products/Landingpage";
import "./App.css";
import Dispatch from "./components/Dispatch";
import Cancel from "./components/Cancel";
import Success from "./components/Success";
import {ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";

const App = () => {
  const pagePath = window.location.href;



  return (
    <div>

      {pagePath == "http://localhost:5173/dispatch" ? <Routes>
          <Route path="/dispatch"  element= {<Dispatch />} />
        </Routes> : <div>
        <div className="relative bg-[url('/bg-hero.jpeg')] bg-cover bg-center bg-black">

  {/* Navy blue overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-90 "></div>

  {/* Content */}
  <Navbar />
  <Landingpage />

</div>
<Features />
<AboutUs />

      <Product />
    
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
