import React, { useState } from "react";
import axios from "axios";
import { toast} from "react-toastify";


import { ModalBody, ModalFooter } from "../components/OK";
import { Icon } from '@iconify/react';
import Signup from "./Signup";




const Login = ({ setFormClose, formclose }) => {
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const passwordShow = () => {
    setShow(!show);
  };
  const click = () => {
    setModal(true);
    handleCloseForm();
  };
  const [user, setUser] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const {email , password} = user
    if(!email  && !password) {
      alert("All fields ar required")
    }
    if (!email) {
        toast.error("incorrect email");
      }

    try {
      const response = await axios.post("http://localhost:5000/login", user);
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
  
        toast.success("User logged in");
   }
    } catch (error) {
      console.log(error);
      toast.error("invalid email or password");
    }
    handleCloseForm();
  };

  const handleCloseForm = () => {
    setFormClose(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      {formclose && (
        <ModalBody>
          <h4 className="text-lg md:text-2xl flex justify-center text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Keep it <Icon icon="mdi:food-halal" width="30" className="w-10 text-blue-700 max-h-[120px] mt-[1%] ml-[1%]" height="26" />
          </h4>
          <form onSubmit={submitHandler} className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="login-email"
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <div>
                <input
                  className="shadow relative appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={changeHandler}
                  required
                />
                <p
                  onClick={passwordShow}
                  className="absolute top-12 right-2 md:right-3 lg:top-1/2 lg:right-3 hover:text-red-600 cursor-pointer duration-200 ease-in-out transform  transition-all -translate-y-1/2"
                >
                  {show ? (
                    <Icon icon="mdi:eye-off-outline" className="w-6 h-6" />
                  ) : (
                    <Icon icon="ph:eye" className="w-6 h-6" />
                  )}
                </p>
              </div>
            </div>
            <ModalFooter className="gap-4 flex justify-center">
              <button className="px-4 py-2 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm md:w-28">
                Sign In
              </button>
              <button
                type="button"
                onClick={handleCloseForm}
                className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-md border border-black md:w-28"
              >
                Order As Guest
              </button>
            </ModalFooter>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-600 dark:text-gray-300">
              New Here?{" "}
              <span
                onClick={click}
                className="text-blue-800  dark:text-blue-400 cursor-pointer "
              >
                Create Account
              </span>
            </p>
          </div>
        </ModalBody>
      )}
      {modal && <Signup modal={modal} setModal={setModal} />}
    </div>
  );
};

export default Login;
