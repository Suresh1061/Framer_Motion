import React from "react";
import { motion } from "framer-motion";

const FramerAnimation_1 = () => {
  return (
    <motion.h1
      initial={{ x: -1000 }}
      animate={{ x: [0, 900, 0] }}
      transition={{
        duration: 3,
        delay: 1,
      }}
      whileHover={{ scale: 0.6, opacity: 0.4 }}
    >
      This is the text for animation using framer motion
    </motion.h1>
  );
};

export default FramerAnimation_1;
