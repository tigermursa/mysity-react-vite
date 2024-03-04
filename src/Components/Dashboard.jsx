import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-7">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-serif font-semibold text-gray-700"
      >
        Welcome to My<span className="text-blue-800">s</span>ity Dashboard
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-serif font-semibold text-gray-700"
      >
        All necessary websites in one place 
      </motion.p>
    </div>
  );
};

export default Dashboard;
