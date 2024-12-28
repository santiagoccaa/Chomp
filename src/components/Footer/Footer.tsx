import { TbArrowMoveRight } from "react-icons/tb";
import { info } from "@/data/Footer/info";
import { FooterItem } from "./FooterItem";
import { social } from "@/data/Footer/social";
import { navitems } from "@/data/header/navItems";
import { categorias } from "@/data/categorias";

export const Footer = () => {
  return (
    <>
      <div className="relative overflow-hidden h-auto flex flex-col items-center justify-center border-t-2 border-strong">

        <div className="w-4/6 flex flex-col md:flex-row items-center border-b-2 border-white/80 gap-x-8">

          <div className="md:border-r-2 my-8 md:my-8 border-white/80 flex items-center justify-center h-auto md:h-28">
            <h1 className="text-xl font-bold text-white mr-4">Chomp </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-y-4 justify-between w-full mb-4 md:mb-0 ">
            {info.map(({name, icon, description, id}) => {
              return <FooterItem key={id} name={name} icon={icon} description={description} />;
            })}
          </div>
        </div>

        <div className="w-4/6 flex flex-col md:flex-row justify-between gap-8 mb-6">
          <ul className="w-full md:w-[25%] text-white text-sm">
            <h1 className="font-bold my-2">Mas Sobre Nosotros</h1>
            <div className="h-[2px] w-20 bg-gradient-to-r from-text-primary to-light via-primary"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis voluptatum amet recusandae..
            </p>
            <div className="flex gap-2 my-4">
              {social.map((item) => {
                return (
                  <button
                    key={item.id}
                    className="p-2 rounded-full border-[1px] border-white/80 hover:bg-primary text-white/90 duration-300"
                  >
                    {item.icon}
                  </button>
                );
              })}
            </div>
          </ul>

          <ul className="w-full md:w-[25%] text-white text-sm">
            <h1 className="font-bold my-2">Links Rapidos</h1>
            <div className="h-[2px] w-20 bg-gradient-to-r from-text-primary to-light via-red-500"></div>
            {navitems.map((item) => {
              return (
                <li key={item.id}>
                  <button className="flex gap-1 items-center hover:text-text-primary duration-300">
                    <TbArrowMoveRight size={12} /> {item.nombre}
                  </button>
                </li>
              );
            })}
          </ul>
          <ul className="w-full md:w-[25%] text-white text-sm">
            <h1 className="font-bold my-2">Nuestro Menu</h1>
            <div className="h-[2px] w-20 bg-gradient-to-r from-text-primary to-light via-red-500"></div>
            {categorias.map((item) => {
              return (
                <li key={item.id}>
                  <button className="flex gap-1 items-center hover:text-text-primary duration-300">
                    <TbArrowMoveRight size={12} /> {item.nombre}
                  </button>
                </li>
              );
            })}
          </ul>

          <ul className="w-full md:w-[25%] text-white text-sm ">
            <h1 className="font-bold my-2">Suscribir</h1>
            <div className="h-[2px] w-20 bg-gradient-to-r from-text-primary to-light via-red-500"></div>
            <p>Subscribete para recibir todas las noticias</p>
            <input
              className="w-full p-2 rounded-2xl text-white/90 bg-light my-2 text-sm outline-none hover:outline-1 hover:outline-text-primary"
              type="text"
              placeholder="Correo"
            />
            <button className="w-full p-2 rounded-2xl text-white/90 font-bold bg-primary border-2 border-text-primary hover:bg-transparent dont-bold">
              Subscribir
            </button>
          </ul>
        </div>
      </div>

      <div className="w-full h-auto md:h-12 bg-primary text-white text-sm font-light flex items-center justify-between">
        <h1 className="ml-12">Todos los derechosr reservados para Chomp </h1>
        <div className="mr-12 flex items-center gap-4">
          <h1>Politicas</h1>
          <span>/</span>
          <h1>terminos y condiciones</h1>
        </div>
      </div>
    </>
  );
}
