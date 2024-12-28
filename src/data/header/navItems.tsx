import { FaChevronDown } from "react-icons/fa";

type Info = {
    id: number;
    nombre: string;
    icon: React.ReactElement;
}

export const navitems: Info[] = [
    {
        id: 1,
        nombre: "Inicio",
        icon: <FaChevronDown size={12} strokeWidth={3} color="#dc2626" />
    },
    {
        id: 2,
        nombre: "Tienda",
        icon: <FaChevronDown size={12} strokeWidth={3} color="#dc2626" />
    },
    {
        id: 3,
        nombre: "Blog",
        icon: <FaChevronDown size={12} strokeWidth={3} color="#dc2626" />
    },
    {
        id: 4,
        nombre: "Favoritos",
        icon: <FaChevronDown size={12} strokeWidth={3} color="#dc2626" />
    },
];