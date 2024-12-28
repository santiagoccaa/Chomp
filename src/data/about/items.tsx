import { FaDroplet } from "react-icons/fa6";
import { PiHandCoins } from "react-icons/pi";
import { IoSparklesOutline } from "react-icons/io5";

type infoItem = {
  id: number;
  nombre: string;
  icon: React.ReactElement
}

export const items: infoItem[] = [
  {
    id: 1,
    nombre: "Deliciosos",
    icon: <IoSparklesOutline size={40} strokeWidth={1} color="#dc2626" />,
  },
  {
    id: 2,
    nombre: "Frescos",
    icon: <FaDroplet size={40} strokeWidth={1} color="#dc2626" />,
  },
  {
    id: 3,
    nombre: "Economicos",
    icon: <PiHandCoins size={40} strokeWidth={1} color="#dc2626" />,
  },
];
