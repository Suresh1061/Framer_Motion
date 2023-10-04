import { motion } from "framer-motion";
import React from "react";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className=" text-green-600 text-xl p-8 text-center"
    >
      Home Page For Transmission
    </motion.div>
  );
};

export default Home;
