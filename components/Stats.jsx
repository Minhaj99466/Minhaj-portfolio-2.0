"use client"

import React from 'react'
import CountUp from 'react-countup'

const Stats = () => {
const data=[
    {
    text:"Year of experience",
    num:1.5,
},
    {
    text:"Projects completed",
    num:6,
},
    {
    text:"Technologies learned",
    num:8,
},
    {
    text:"Repos commit",
    num:16,
},

]
  return (
    <section className='pb-12 pt-4 xl:pt-0 xl:pb-0'>
    <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-[80vw] mx-auto xl:max-w-none '>

       
      {data.map((item,index)=>(
        <div key={index} className='flex-1 flex gap-4 justify-center items-center xl:justify-start '>
       <CountUp end={item.num} duration={5} delay={3} decimals={item.num % 1 !== 0 ? 1 : 0} className='text-4xl xl:text-6xl font-extrabold'/>
       <p    className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >{item.text}</p>
       </div>
      ))}
      
    </div>
    </div>
    </section>
  )
}

export default Stats
