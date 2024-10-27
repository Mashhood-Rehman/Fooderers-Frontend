import { motion } from "framer-motion";

const Landingpage = () => {
  return (
    <div
      id="landingpage"
      className="relative flex justify-center items-center h-screen"
    >
      <motion.img
        src="Blue.jpeg"
        alt="Intro pic"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-[80%] h-[80%] object-cover rounded-3xl mt-[4%]"
      />

      <div className="absolute inset-0 flex flex-col justify-center  left-40 top-[65%]  text-white p-4">
       
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-extrabold text-4xl bg-clip-text"
        >
        "  Where Every Bite Tells a Story"
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg font-serif  lg:text-lg"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, obcaecati.
        </motion.p>
      </div>
    </div>
  );
};

export default Landingpage;
