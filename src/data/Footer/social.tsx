import { FaFacebook, FaYoutube, FaInstagram  } from "react-icons/fa";

type infoSocial ={
    id:number
    icon:React.ReactElement
}

export const social: infoSocial[] = [
    {
        id:1,
        icon:<FaFacebook size={20}/>
    },
    {
        id:2,
        icon:<FaYoutube size={20} />
    },
    {
        id:3,
        icon:<FaInstagram size={20} />
    },
]