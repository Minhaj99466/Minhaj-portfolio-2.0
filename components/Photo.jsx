"use client"
import Image from 'next/image'
import img from '../public/IMG_0404__1_-removebg-preview.png'
import { animate, delay, easeInOut, motion } from 'framer-motion'
const Photo = () => {
  return (
    <div
    className="w-full h-full relative"
   
  >
           <motion.div
     
      initial={{opacity:0}}
      animate={{
        opacity:1.5,
        transition:{delay:2, ease:"easeInOut",duration:1}
      }}

    >
      <div className='w-[298px] h-[298px] xl:w-[400px] xl:h-[350px] mix-blend-lighten' >
<Image 
src={img}
priority
quality={100}
fill
alt='profile'
className='object-contain custom-filter rounded-3xl'

/>
      </div>
     
    </motion.div>
    {/* <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    /> */}
    </div>
    
  )
}

export default Photo
