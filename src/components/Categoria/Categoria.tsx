import { categorias } from "@/data/categorias";
import Image from "next/image";

export const  Categoria = () => {
  return (
    <div className="container mx-auto bg-light grid grid-cols-3 gap-2 md:flex md:justify-between h-auto md:h-32 items-center mt-12 md:mt-0 rounded-lg p-4 ">
      {categorias.map(({ icono, id, nombre }) => (
        <div key={id} className="flex flex-col justify-center items-center w-auto">
          <div className="p-1 rounded-full duration-500">
            <Image
              src={`/categorias/icono_${icono}.svg`}
              width="60"
              height="60"
              alt="imagen"
              className="w-10 md:w-16 h-10 md:h-16"
            />
          </div>
          <h1 className="text-sm text-white/90 mt-2 duration-300">{nombre}</h1>
        </div>
      ))}
    </div>
  );
}
