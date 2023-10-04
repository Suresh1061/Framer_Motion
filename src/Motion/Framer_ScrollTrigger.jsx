import React from 'react'
import {motion} from "framer-motion"

const Framer_ScrollTrigger = () => {
  return (
      <div className=' flex flex-col items-center mt-[100px]'>
          <h2 className=' capitalize text-5xl font-bold'>React Scroll Animation with framer motion</h2>
          <Box/>
          <Box/>
          <Box/>
    </div>
  )
}

const Box = () => {
    return (
        <motion.div className=' my-[200px] w-[100px] h-[100px] bg-green-600'
            initial={{ opacity: 0, scale: 0, x:500 }}
            whileInView={{opacity:1,scale:1, x:0}}
            transition={{ duration: 0.6 }}
            viewport={{once:true}}
        >
        </motion.div>
    )
}

export default Framer_ScrollTrigger