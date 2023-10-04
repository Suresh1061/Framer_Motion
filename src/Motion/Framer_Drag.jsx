import React from "react";
import { motion } from "framer-motion";

const Framer_Drag = () => {
  return (
    <div>
      <h1 className=" text-5xl text-center my-10">
        Draggable Object With Framer Motion
      </h1>
      <div className=" flex flex-row gap-[200px] justify-evenly">
        <div>
          <p className=" text-center py-2">No Constraint</p>
          <motion.div className=" h-28 w-28 bg-blue-600" drag></motion.div>
        </div>
        <div>
          <p className=" text-center py-2">Drag only Y</p>
          <motion.div className=" h-28 w-28 bg-blue-600" drag="y"></motion.div>
        </div>
        <div>
          <p className=" text-center py-2">No Constraint</p>
                  <motion.div className=" h-28 w-28 bg-blue-600" drag dragConstraints={{ left: 0, right:100, top:-50,bottom:10}}></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Framer_Drag;
