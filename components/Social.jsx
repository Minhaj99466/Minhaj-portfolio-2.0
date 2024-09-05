import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import Link from "next/link";

const mediaLinks= [
    {
icon:<FaGithub/>,
path:""
},
    {
icon:<FaLinkedin/>,
path:""
},
    {
icon:<FaWhatsapp/>,
path:""
},
    {
icon:<FaGithub/>,
path:"ddd"
}
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
