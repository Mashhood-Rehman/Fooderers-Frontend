// import { motion } from "framer-motion";

// const Landingpage = () => {
//   return (
//     <div
//       id="landingpage"
//       className="relative grid bg-white grid-cols-1 lg:grid-cols-2  justify-center  mt-16 items-center h-screen"
//     >
//         <motion.h2
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="font-semibold text-lg font-serif w-full flex items-center justify-center lg:text-4xl "
//         >
          
//         Where Every Bite Tells a Story
//         </motion.h2>
//       <motion.img
//         src="girlpic.png"
//         alt="Intro pic"
//         initial={{ y: 100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className=" object-cover rounded-3xl "
//       />

//       <div className="absolute bottom-0 inset-0 flex flex-col justify-center     text-white p-4">
       
       
//       </div>
//     </div>
//   );
// };

// export default Landingpage;
const Landingpage = () => {
  const handleScrollToReservation = () => {
    const reservationSection = document.getElementById('Reservation');
    reservationSection?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative h-[100vh]" id="landingpage">
      {/* Content */}
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-evenly px-8 h-full">
        
        <div className="text-white max-w-lg w-full space-y-8 mt-8 p-2 md:mt-0">
          <h1 className="text-7xl md:text-5xl font-bold">Enjoy Our Delicious Meal</h1>
          <p className="text-lg md:text-xl">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
          </p>
          <button
            onClick={handleScrollToReservation}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded"
          >
            BOOK A TABLE
          </button>
        </div>

        {/* Image */}
        <div className="relative md:ml-8 mt-24 lg:mt-0">
          <img
            src="/hero.png"
            alt="Delicious Meal"
            height={200}
            width={200}
            className="w-full h-auto md:w-96 md:h-96 rounded-full animate-spin-slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;