"use client"
import Link from 'next/link'

import { BsArrowDownRight } from "react-icons/bs";
import { animate, motion } from 'framer-motion'


const Service = () => {
  const data = [
    {
      num: "01",
      title: 'MERN Web Solutions',
      description: 'I specialize in full-stack development using MongoDB, Express, React, and Node.js to build dynamic web applications.'
    },
    {
      num: "02",
      title: 'Front-End Development',
      description: 'With React.js and Next.js, I create interactive, responsive, and efficient user interfaces that offer a seamless experience.'
    },
    {
      num: "03",
      title: 'Back-End Development',
      description: 'Using Node.js and Express, I build scalable and robust server-side applications with secure REST APIs.'
    },
    {
      num: "04",
      title: 'Figma-Crafted Designs',
      description: 'I design modern and user-centric websites using Figma, creating visually appealing and functional UI layouts.'
    },
]


  return (
    <section className='min-h-[70vh] flex flex-col justify-center  py-12 xl:py-0 '>
      <div className='container mx-auto' >
        <motion.div initial={{opacity:0}} animate={{
          opacity:1,
          transition:{delay:2.4, duration:0.4, ease:"easeIn"},
        }} className='grid grid-cols-1 md:grid-cols-2 gap-[60px]  '>
          {data.map((item, index) => (
            <div key={index} className=' justify-center gap-6 group'>
              <div className='w-full flex justify-between items-center group-hover:text-accent-hover transition-all duration-500 ' >
                <div className='text-4xl text-outline font-extrabold text-transparent ' >
                  {item.num}
                </div>
                <Link className='w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center group-hover:bg-accent-hover  transition-all hover:-rotate-45 duration-700'  href="hjg">
                  <BsArrowDownRight className='text-3xl text-primary '/>
                </Link>
              </div>
              <h2 className='text-[32px]   font-bold group-hover:text-accent-hover transition-all duration-500 text-white/80' >{item.title}</h2>
              <p className='text-white/60'>{item.description}</p>
              <div className='border-b mt-6 border-white/20  w-full'></div>
            </div>
          ))}
        </motion.div>
        </div>
    </section>
  )
}

export default Service
