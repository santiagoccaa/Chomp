"use client";

import { navitems } from "@/data/header/navItems";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { TiDelete } from "react-icons/ti";

export const NavMobil = () => {
  const [menu, setMenu] = useState(false);
  const handleClickMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div
        className={`${
          menu ? "right-[65%]" : "right-4 "
        } flex md:hidden absolute top-4 z-10 transition-all duration-500`}
      >
        <button
          className="text-text-primary transition-all duration-300"
          onClick={() => handleClickMenu()}
        >
          {!menu ? (
            <HiMenuAlt3 size={30} />
          ) : (
            <TiDelete size={50} className="text-white" />
          )}
        </button>
      </div>

      <div
        className={`${
          menu ? "top-0 right-0" : "top-0 -right-[100%]"
        } fixed flex items-center justify-center z-10 bg-strong w-60 h-full transition-all duration-500 border-l-2 border-white-90`}
      >
        <div className="relative flex flex-col items-center justify-center h-full">
          <h1 className="absolute top-8 uppercase text-4xl text-text-primary font-bold mb-16">
            Chomp
          </h1>
          <ul className="flex flex-col items-center gap-6 text-sm font-bold uppercase">
            {navitems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-[2px] cursor-pointer text-white/90 hover:text-text-primary duration-300 text-lg"
                >
                  {item.nombre} {item.icon}
                </li>
              );
            })}
          </ul>

          <div className="absolute bottom-8 flex gap-2 items-center">
            <div className="p-2 rounded-full bg-primary text-white duration-300">
              <AiOutlineUser size={20} color="#fff" strokeWidth={2} />
            </div>
            <div className="flex items-center text-sm gap-1 font-light">
              <Link
                href="/iniciar"
                className="border-b-2 border-transparent text-white/90 text-lg font-bold uppercase hover:border-text-primary duration-300"
              >
                Ingresar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
