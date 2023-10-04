import React from 'react'
import { useScroll, motion } from 'framer-motion'

const Framer_Scroll = () => {
    const {scrollYProgress} = useScroll()
  return (
      <div className=' text-center mt-28'>
          <motion.div style={{scaleX:scrollYProgress}} className=' fixed top-0 right-0 left-0 h-3 bg-red-600 origin-[0%]'>              
          </motion.div>
          <h2 className=' font-bold'>Scroll Demo</h2>
          <h4>Scroll Animation</h4>
          <h4>Scroll Animation</h4>
          <h4>Scroll Animation</h4>
          <h4>Scroll Animation</h4>
          <h4>Scroll Animation</h4>
          <h4>Scroll Animation</h4>
          <h4>Scroll Animation</h4>
          <h4>Scroll Animation</h4>
          <h4>Scroll Animation</h4>
          <h4>Scroll Animation</h4>
          <h4>Scroll Animation</h4>
          <h4>Scroll Animation</h4>
          <h4>Scroll Animation</h4>
          <h4>Scroll Animation</h4>
    </div>
  )
}

export default Framer_Scroll