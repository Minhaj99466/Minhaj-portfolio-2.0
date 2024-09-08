import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import Link from "next/link";

const mediaLinks= [
    {
icon:<FaGithub/>,
path:"https://github.com/Minhaj99466"
},
    {
icon:<FaLinkedin/>,
path:"https://linkedin.com/in/minhaj-mm"
},
    {
icon:<FaWhatsapp/>,
path:"https://wa.me/9946631792"
},
]

const Social = ({containerStyles,iconStyles}) => {
    return (
        <div className={containerStyles}>
            {mediaLinks.map((item,index)=>(
                 <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link> 
            ))}
        </div>
    )
}

export default Social
