'use client'

import { useShop } from "@/hooks/useChomp";
import { FaShoppingBag } from "react-icons/fa";

export const VerCarrito = () =>{
  const { handleClickCarrito, carrito, itemCarrito } = useShop();
  return (
    <>
      {itemCarrito?.length > 0 ? (
        <button
          onClick={() => handleClickCarrito()}
          className={`${
            carrito ? "z-0" : "z-20"
          } fixed overflow-auto right-8 bottom-4 md:bottom-14 rounded-full w-12 h-12 bg-amber-500 flex items-center justify-center outline outline-1 outline-offset-4 outline-amber-500 hover:outline-offset-8 hover:scale-95 duration-200 text-bg`}
        >
          <FaShoppingBag size={30} />
        </button>
      ) : (
        <h1></h1>
      )}
    </>
  );
}
