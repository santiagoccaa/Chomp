"use client";

import { FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";
import { useShop } from "@/hooks/useChomp";

interface itemProps {
  id: number,
  img: string,
  nombre: string
  precio: number
  cantidad: number
}

//------------------------------------
export const ItemProduct = ({ id, img, nombre, precio, cantidad }: itemProps) => {
  const { ClickEliminar, ClickAgregar } = useShop();

  const product = { img, nombre, precio, id };

  return (
    <div className="relative w-full flex items-center h-28 pb-2 border-b-[2px] border-white/90">
      <div className="ml-2 overflow-hidden w-2/6">
        <Image
          src={`/productos/${img}.jpg`}
          width="200"
          height="200"
          alt="img pedido"
          className="w-24 h-24 rounded-full "
        />
      </div>
      <div className="h-20 w-4/6 text-sm font-medium flex flex-col justify-between">
        <h2>{nombre}</h2>

        <div className="flex w-full items-center justify-between">
          <h2 className="text-text-primary text-base font-bold flex items-center gap-1"><span className="text-white/90 text-sm font-light">$</span>{precio}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => ClickEliminar(id)}
              className="p-[2px] rounded-full border-[1px] border-white"
            >
              <FaMinus size={15} />
            </button>

            <p className="w-4 flex justify-center">{cantidad}</p>

            <button
              onClick={() => ClickAgregar(product)}
              className="p-[2px] rounded-full border-[1px] border-white"
            >
              <FaPlus size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
