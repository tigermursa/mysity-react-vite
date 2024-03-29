import { motion } from "framer-motion";
import { FaCircleArrowDown } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-7">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl lg:text-6xl xl:text-6xl font-serif font-semibold text-gray-700 text-center"
      >
        Welcome to My<span className="text-blue-800">s</span>ity Dashboard
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-sm md:text-2xl lg:text-3xl xl:text-4xl text-center font-serif font-semibold text-gray-700 flex items-center gap-4"
      >
        All necessary websites in one place{" "}
        <FaCircleArrowDown className="animate-bounce text-blue-800 " />
      </motion.p>
    </div>
  );
};

export default Dashboard;
