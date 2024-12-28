import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type DatIndo = {
  id: number;
  icon: React.ReactElement
  name:string;
  description: string
}

export const info: DatIndo[] = [
  {
    id: 1,
    icon: <FaLocationDot size={20} color="#fff" />,
    name: "Encuentranos",
    description: "Calle 32 # 45B - 59",
  },
  {
    id: 2,
    icon: <FaPhoneAlt size={20} color="#fff" />,
    name: "Linea de Atencion",
    description: "(+57) 316 7283 928",
  },
  {
    id: 3,
    icon: <MdEmail size={20} color="#fff" />,
    name: "Correo",
    description: "Chomp@gmail.com",
  },
];
