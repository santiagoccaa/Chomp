import Image from "next/image";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BoxComentario } from "./BoxComentario";

export const Comentario = () => {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center h-auto md:h-[500px] bg-light w-full shadow-xl">
      <Image
        src="/comentarios/burrito.png"
        width="400"
        height="400"
        alt="burrito"
        className="hidden md:flex absolute -left-16 -top-16 w-64 h-64"
      />

      <Image
        src="/comentarios/verduras.png"
        width="400"
        height="400"
        alt="burrito"
        className="hidden md:flex absolute -bottom-4 -right-8 w-72 h-52 opacity-90"
      />

      <div className="mx-4 md:w-4/6">
        <h1 className="text-xl font-medium text-white/90 my-4">
          Sus <span className="text-text-primary">Comentarios</span>
        </h1>
        <p className="text-sm font-light text-white/90 mx-4 md:mx-0 text-justify md:w-4/6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          libero dolore dignissimos repudiandae aliquid, doloremque tempora quo,
          totam quas, vel iusto non magnam pariatur blanditiis possimus modi sit
          odit alias.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-x-8">
          <BoxComentario />
          <BoxComentario />
          <BoxComentario />
        </div>

        <div className="flex justify-center items-center gap-2 mb-4 mt-8">
          <div className="h-[2px] w-16 bg-gradient-to-l from-primary to-light via-red-600"></div>

          <button className="rounded-full flex items-center justify-center h-8 w-8 bg-white/90 shadow-sm text-sm outline outline-[1px] outline-offset-2 outline-white/90 active:bg-red-600 duration-300">
            <IoIosArrowBack size={20} />
          </button>
          <span className="rounded-full h-6 w-6 bg-text-primary shadow-sm text-sm"></span>
          <button className="rounded-full flex items-center justify-center h-8 w-8 bg-white/90 shadow-sm text-sm outline outline-[1px] outline-offset-2 outline-white/90 active:bg-red-600 duration-300">
            <IoIosArrowForward size={20} />
          </button>

          <div className="h-[2px] w-16 bg-gradient-to-r from-primary to-light via-red-600 "></div>
        </div>
      </div>
    </div>
  );
}
