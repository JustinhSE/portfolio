import Link from 'next/link'

import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
const social = [
    {icon: <FaGithub /> , path: 'https://github.com/justinhse'},
    {icon: <FaLinkedinIn /> , path: 'https://www.linkedin.com/in/justinhtech'},
]
const Socials = ({containerStyles, iconStyles}) => {
  return <div className= {containerStyles}> 
    {social.map((item,index) => {
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        );
    })}
  </div>
}

export default Socials