"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const work = [
  {
    num: "01",
    name: 'E-Commerce',
    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit, laudantium pariatur ullam vero cupiditate earum eum.",
    stack: [
      { name: 'html 5' },
      { name: 'css3' },
      { name: 'node.js' },
      { name: 'bootstrap' },
      { name: 'express.js' },
    ],
    image: '/assets/work/Screenshot 2024-01-16 094306.png',
    live: '',
    github: '',
  },
  {
    num: "02",
    name: 'E-Commerce',
    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit, laudantium pariatur ullam vero cupiditate earum eum.",
    stack: [
      { name: 'html 5' },
      { name: 'css3' },
      { name: 'node.js' },
      { name: 'bootstrap' },
      { name: 'express.js' },
    ],
    image: '/assets/work/Screenshot 2024-01-16 094306.png',
    live: '',
    github: '',
  },
  {
    num: "03",
    name: 'E-Commerce',
    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit, laudantium pariatur ullam vero cupiditate earum eum.",
    stack: [
      { name: 'html 5' },
      { name: 'css3' },
      { name: 'node.js' },
      { name: 'bootstrap' },
      { name: 'express.js' },
    ],
    image: '/assets/work/Screenshot 2024-01-16 094306.png',
    live: '',
    github: '',
  },
]

const WorkPage = () => {
  const [project, setProject] = useState(work[0])

  const handleSlideChange=(swiper)=>{
    const currentSlide=swiper.activeIndex;
    setProject(work[currentSlide])
  }

  return (
    <motion.div className="min-h-[80vh] flex flex-col  justify-center py-12 xl:px-0" initial={{ opacity: 0 }} animate={{ opacity: 1,transition:{delay:2.4, ease:'easeIn', duration:0.4} }}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px]  flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h3 className="
              text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.name} project</h3>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4 text-accent">
                {project.stack.map((item, index) => (
                  <li key={index}>{item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>


                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 ">
                <Link href="dfd">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href="dfd">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            onSlideChange={handleSlideChange}
            className="xl:h-[460px] mb-12 xl:mb-0">
              {work.map((item,index)=>(
                <SwiperSlide className="w-full" key={index}>
                  <div className="h-[43
                  0px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                  <div className="relative w-full h-full">
                    <Image fill  src={item.image} alt="work-image" className="object-cover"/>
                  </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default WorkPage
