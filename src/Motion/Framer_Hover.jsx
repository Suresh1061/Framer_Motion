import React, { useState } from "react";
import { motion } from "framer-motion";

const Framer_Hover = () => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className=" flex justify-center items-center mt-14">
      <motion.div
        className=" bg-gray-300 px-[3rem] py-[2rem] rounded-md shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{
          layout: {
            duration: 1,
            type: "String",
          },
        }}
        layout
        onClick={() => setShowCard(!showCard)}
      >
        <motion.h3>Hover or Click</motion.h3>
        {showCard && (
          <motion.p
            className=" w-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            voluptate quisquam minus velit, dolor nobis, nostrum neque impedit
            maiores eius aspernatur? Doloribus placeat commodi, sint, ex numquam
            incidunt tempora aliquid, quas reiciendis adipisci consectetur?
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Framer_Hover;
