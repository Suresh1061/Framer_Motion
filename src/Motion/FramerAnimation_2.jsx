import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FramerAnimation_2 = () => {
  const [show, setShow] = useState(true);
  return (
    <div className=" flex flex-col items-center gap-6">
      <h1 className=" mt-8 text-2xl">
        Framer Motion Tutorial : Exit and Enter animation
      </h1>
      <AnimatePresence>
        {show && (
          <motion.div
            className=" h-[100px] w-[100px] bg-blue-500"
            //   style={{width:'100px' , height:"100px", backgroundColor:"blue"}}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 100 }}
            exit={{ opacity: 0, x: -150 }}
            transition={{
              duration: 1,
            }}
          ></motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setShow(!show)}
        className=" px-4 py-3 bg-gray-300 rounded-md"
      >
        {show ? "Remove Box" : "Add Box"}{" "}
      </button>
    </div>
  );
};

export default FramerAnimation_2;
