import { motion } from "framer-motion";

const Landingpage = () => {
  return (
    <div
      id="landingpage"
      className="relative grid bg-white grid-cols-1 lg:grid-cols-2  justify-center  mt-16 items-center h-screen"
    >
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-semibold text-lg font-serif w-full flex items-center justify-center lg:text-4xl "
        >
          
        Where Every Bite Tells a Story
        </motion.h2>
      <motion.img
        src="girlpic.png"
        alt="Intro pic"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className=" object-cover rounded-3xl "
      />

      <div className="absolute bottom-0 inset-0 flex flex-col justify-center     text-white p-4">
       
       
      </div>
    </div>
  );
};

export default Landingpage;
