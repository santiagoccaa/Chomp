
import { useShop } from "@/hooks/useChomp";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

export const ModalMobil = () => {
  const { handleClickmodal, productModal } = useShop();
  return (
    <div className="flex md:hidden w-80 h-[80vh] relative bg-bg z-0 rounded-lg">
      <button
        onClick={() => handleClickmodal()}
        className="h-10 w-10 rounded-full absolute -top-12 right-0 flex items-center justify-center hover:-rotate-90 duration-300 z-30 text-primary outline outline-2 outline-offset-2"
      >
        <AiOutlineClose size={30} />
      </button>

      <div className="flex flex-col rounded-lg w-full bg-white/95 shadow-2xl shadow-black">
        <div className="flex items-center justify-center">
          <Image
            src={`/productos/${productModal?.img}.jpg`}
            width="400"
            height="400"
            alt="imagen"
            className="w-full h-48"
          />
        </div>

        <div className="flex flex-col p-4">
          {/* Nombre del producto */}
          <h1 className="text-2xl uppercase font-bold text-bg">
            {productModal?.nombre}
          </h1>
          {/* Precio del producto */}
          <h2 className="mt-4 font-medium text-3xl flex gap-3 items-end">
            <span className="text-2xl font-medium">$</span>
            {productModal?.precio}
          </h2>

          {/* Caracteristicas del producto */}
          <div className="flex flex-col">
            <h1 className="text-xl font-medium my-2">Caracteristicas</h1>
            <ul className="grid grid-cols-2 gap-y-2">
              {productModal?.ingredientes.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center font-light text-sm gap-1"
                  >
                    <TbPointFilled />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="absolute bottom-4 flex gap-6 right-0 w-full px-4">
          <button className="bg-strong text-white p-2 font-bold rounded-full border-2 border-strong hover:bg-transparent flex items-center gap-2 text-sm hover:text-bg duration-300">
            <FaPlus />
            Añadir al Carrito
          </button>
          <button className="bg-primary text-white/90 p-2 font-bold rounded-full border-2 border-primary hover:bg-transparent shadow-lg shadow-primary hover:text-primary duration-300">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
