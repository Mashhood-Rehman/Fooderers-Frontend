import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'  
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { removeFromCart , incrementQuantity , decrementQuantity } from './stores/cartSlice'
import { NavLink} from "react-router-dom"
import { Modal, ModalTrigger } from "./OK";
import { Link } from "react-scroll";
import Login from "../auth/Login";

const Navbar = ( ) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const [open, setOpen] = useState(false);

  const [formclose, setFormClose] = useState(true); 
  const toggleform = () => {
    setFormClose(!formclose);
  };
  const [userIn , setUserIn] = useState(false)


  
  return (
    <div className="flex  bg-transparent items-center">
      <div>



      {open && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setOpen(false)}
          />
        )}

        <motion.div
          className="sidebar fixed top-20 right-0 h-3/4 w-96 overflow-y-auto bg-blue-400 text-white z-50 transform transition-transform duration-300 ease-in-out"
          style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
        >
          {open && (
            <>
              <div className="flex-none px-10">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  ></div>
                </div>
              </div>

              <div className="  ">
              {items.map((p) => (
    <div key={p.id} className="p-4 flex flex-col md:flex-row items-center md:items-start">
        <img src={p.picture} alt={p.title} className="w-24 h-24 object-cover rounded-full mb-4 md:mb-0 md:mr-4" />
        <div className="flex-1">
            <h2 className="text-xl font-medium text-gray-800">{p.name}</h2>
            <div className="flex items-center space-x-4 mt-2">
                <button className="text-black text-3xl rounded-full px-2 py-1 hover:bg-blue-600 transition duration-300" onClick={() => dispatch(decrementQuantity(p))}>-</button>
                <p className="text-gray-600 text-xl">{p.quantity}</p>
                <button className="text-black text-3xl rounded-full px-2 py-1 hover:bg-blue-600 transition duration-300" onClick={() => dispatch(incrementQuantity(p))}>+</button>
            </div>
            <p className="text-gray-600 mt-2">Price: ${p.price.toFixed(2)}</p>
        </div>
        <button
            onClick={() => dispatch(removeFromCart(p._id))}
        >
            <Icon className="  -mt-[1]  text-black    hover:bg-red-600 px-2 w-10 h-8 rounded-full   duration-300 ease-in-out   -ml-16" icon="material-symbols:close"  />
        </button>
    </div>
))}


          <div className=" flex flex-col  mt-4">
            <button className="font-semibold tracking-tight text-xl">
              Total price: ${totalAmount}
            </button>
            <button className="font-semibold tracking-tight text-xl">
              Delivery Fee: $5
            </button>
          </div>
          <div className="mt-4">
            <NavLink to= "/dispatch" target="_blank"
            >
              {totalAmount >90 ? 
              
              < button  className="w-full py-2 bg-blue-500  text-white font-bold rounded-md mb-1">

              Checkout
              </button>
              :
              <p className="font-semibold font-sans     flex text-center justify-center ">

              "Minimum Delivery $100 "
              </p>
               }
            </NavLink>
          </div>
        </div>
            </>
          )}
        </motion.div>
        
        <Modal>
        
  
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="navbar bg-base-100 fixed z-20"
          >
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li>
                    <Link to="Product" smooth={true} duration={1000}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="Product" smooth={true} duration={1000}>
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link to="Reservation" smooth={true} duration={1000}>
                      Reservation
                    </Link>
                  </li>
                  <li>
                    <Link>Delivery</Link>
                  </li>
                 {userIn &&  <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                    <span
                      onClick={toggleform}
                      className="group-hover/modal-btn:translate-x-40 text-center transition duration-500"
                    >
                      Login
                    </span>
                    <div
                      onClick={toggleform}
                      className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20"
                    >
                      🍕
                    </div>
                  </ModalTrigger> 
                  }
                 {!userIn &&

                 <ul>
                    <li>Profile</li>
                    <li>Orders</li>
                    <li onClick={()=> setUserIn(true)}>Logout</li>
                  </ul>
                } 
                </ul>
              </div>
              <Link
                to="landingpage"
                smooth={true}
                duration={1000}
                className="btn hover:text-blue-700 font-sans text-xl"
              >
                  <img src={"logoo.jpeg"} alt="" className="w-24 h-20 -mt-[18%]  lg:-mt-[19%]" />
                    </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link
                    to="Product"
                    smooth={true}
                    duration={1000}
                    className="hover:text-blue-700 text-xl"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="Product"
                    smooth={true}
                    duration={1000}
                    className="hover:text-blue-700 text-xl"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="Reservation"
                    smooth={true}
                    duration={500}
                    className="hover:text-blue-700 text-xl"
                  >
                    Reservation
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-700 text-xl">Delivery</Link>
                </li>
                <li>
                {userIn &&  <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                    <span
                      onClick={toggleform}
                      className="group-hover/modal-btn:translate-x-40 text-center transition duration-500"
                    >
                      Login
                    </span>
                    <div
                      onClick={toggleform}
                      className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20"
                    >
                      🍕
                    </div>
                  </ModalTrigger> 
                  }
                 {!userIn &&

                 <ul>
                    <li>Profile</li>
                    <li>Orders</li>
                    <li onClick={()=> setUserIn(true)}>Logout</li>
                  </ul>
                } 
                </li>
              </ul>
            </div>
            <Login toggleform={toggleform} setFormClose={setFormClose} formclose={formclose} />
            <div className="flex-none px-10">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <span className="text-xl font-bold ">{totalQuantity}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">{totalQuantity}</span>
                    <span className="text-info">Subtotal: ${totalAmount}</span>
                    <div className="card-actions">
                      <button
                        onClick={() => setOpen(!open)}
                        className="btn btn-primary btn-block"
                      >
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
