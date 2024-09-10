"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectLabel, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaTools } from "react-icons/fa"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91) 9946631792'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'minhaj99466@gmail.com'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: ' Calicut,India,Kerala 673542 '
  }
]

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, ease: 'easeIn', duration: 0.4 } }} className="py-6 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-4 p-4 bg-[#27272c] rounded-xl" action="">
              <h3 className="text-4xl text-accent">Let's work tohether</h3>
              <p className="text-white/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, eum repudiandae molestiae ipsam possimus rerum deserunt quas.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="mobile" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select A service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI Development</SelectItem>
                    <SelectItem value="mst">Logo Development</SelectItem>
                    <SelectItem></SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[100px]" placeholder="Type your message here" />
              <Button size="md" className="max-w-60">Sorry Under Maintanace <FaTools/></Button>
            </form>
          </div>
          <div className="flex-1 justify-center flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex  flex-col gap-10">
              {info.map((item, index) => (
                <li className="flex  items-center gap-6" key={index}>
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
