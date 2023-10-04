import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
  return (
      <motion.div initial={{ opacity: 0 }}
          animate={{opacity:1}}
          exit={{ opacity: 0 }}
          transition={{duration:2}}
          className=' text-red-600 text-xl p-8 text-center'
      >
          About Page For Transmission
    </motion.div>
  )
}

export default About