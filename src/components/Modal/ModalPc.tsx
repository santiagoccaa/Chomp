
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { TbPointFilled } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { useShop } from "@/hooks/useChomp";

export const ModalPC = () => {
  const { handleClickmodal, productModal } = useShop();
  return (
    <div className="hidden md:flex w-[800px] h-[70vh] relative bg-strong z-0 rounded-lg">
      {/* Boton para cerrar el Modal */}
      <button
        onClick={() => handleClickmodal()}
        className="h-10 w-10 rounded-full absolute mt:top-0 md:-right-14 flex items-center justify-center hover:-rotate-90 duration-300 z-30 text-primary outline outline-2 outline-offset-2"
      >
        <AiOutlineClose size={30} />
      </button>
      {/* Contenido del Modal */}
      <div className="absolute top-44 -left-32 w-[65vh] -rotate-90 flex flex-col items-center justify-center">
        <p className="text-primary text-7xl font-bold uppercase">{productModal?.title}</p> 
      </div>
      <div className="absolute right-0 top-0 rounded-lg h-full w-4/6 bg-white/95 shadow-2xl shadow-black">
      {/* imagen del producto */}
        <div className="w-full h-full relative">
          <div className="absolute -left-36 flex items-center justify-center h-full">
            <Image
              src={`/productos/${productModal?.img}.jpg`}
              width="400"
              height="400"
              alt="imagen"
              className="w-80 h-80"
            /> 
          </div>

          <div className="absolute right-0 top-0 w-4/6 flex flex-col p-4">
            {/* Nombre del producto */}
            <h1 className="text-3xl uppercase font-bold text-strong">
              {productModal?.nombre} 
            </h1>
            {/* Precio del producto */}
            <h2 className="mt-4 font-extralight text-5xl flex gap-3 items-end">
              <span className="text-2xl font-medium">$</span>
               {productModal?.precio} 
            </h2>

            {/* Caracteristicas del producto */}
            <div className="flex flex-col">
              <h1 className="text-xl font-medium my-4">Caracteristicas</h1>
              <ul className="grid grid-cols-2 gap-y-2">
                {productModal?.ingredientes.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center font-light text-sm gap-1">
                      <TbPointFilled />
                      {item}
                    </li>
                  );
                })} 
              </ul>
            </div>
          </div>
          {/* Botones para comprar y añadir al carro */}
          <div className="absolute bottom-4 flex gap-6 right-0 w-4/6 px-4">
            <button className="bg-strong text-white p-2 font-bold rounded-full border-2 border-bg hover:bg-transparent flex items-center gap-2 text-sm hover:text-bg duration-300">
              <FaPlus />
              Añadir al Carrito
            </button>
            <button className="bg-primary text-white/90 p-2 font-bold rounded-full border-2 border-primary hover:bg-transparent shadow-lg shadow-primary hover:text-primary duration-300">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
