
import { navitems } from "@/data/header/navItems";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav className="hidden md:flex w-full items-center justify-between p-4 text-white/90 bg-strong">
      <h1 className="uppercase text-2xl text-text-primary font-bold">Chomp </h1>
      <ul className="hidden md:flex items-center gap-6 text-sm font-bold uppercase">
        {navitems.map((item) => {
          return (
            <li
              key={item.id}
              className="flex items-center gap-[1px] cursor-pointer hover:text-text-primary duration-300"
            >
              {item.nombre} {item.icon}
            </li>
          );
        })}
      </ul>
      <div className="flex gap-2 items-center">
        <div className="p-2 rounded-full bg-primary text-white duration-300">
          <AiOutlineUser size={20} color="#fff" strokeWidth={2} />
        </div>
        <div className="flex items-center text-sm gap-1 font-light">
          <Link
            href="/iniciar"
            className="border-b-2 border-transparent text-sm font-bold uppercase hover:border-text-primary duration-300"
          >
            Ingresar
          </Link>
        </div>
      </div>
    </nav>
  );
}
