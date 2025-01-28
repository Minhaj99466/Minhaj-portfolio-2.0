"use client"

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import Link from "next/link";

const mediaLinks = [
    {
        icon: <FaGithub />,
        path: "https://github.com/Minhaj99466"
    },
    {
        icon: <FaLinkedin />,
        path: "https://linkedin.com/in/minhaj-mm"
    },
    {
        icon: <FaWhatsapp />,
        path: "https://wa.me/9946631792"
    },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
        {mediaLinks.map((item, index) => (
            <motion.div
                key={index}
                whileHover={{ scale: 1.5,rotate:360 }}
                className={iconStyles}
            >
                <Link href={item.path}>{item.icon}</Link>
            </motion.div>
        ))}
    </div>
    )
}

export default Social
