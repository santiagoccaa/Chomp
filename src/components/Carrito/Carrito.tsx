"use client";

import { HiMapPin } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsBagX } from "react-icons/bs";

import Link from "next/link";
import { useShop } from "@/hooks/useChomp";
import {ItemProduct} from "./ItemProduct";

export const Carrito = () => {
  const { carrito, handleClickCarrito, itemCarrito } = useShop();

  const totalPrecio = itemCarrito.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );

  return (
    <div
      className={`${
        carrito ? "right-0 md:right-4" : "-right-[110%]"
      } top-6 z-50 fixed h-[95vh] sm:w-full md:w-[400px] rounded-xl bg-light duration-500 border-2 border-white/80 text-white/90 overflow-hidden`}
    >
        {/* Boton de cerrar */}
      <button
        className="absolute top-[2px] left-[2px] p-1 bg-primary rounded-full group text-white"
        onClick={() => handleClickCarrito()}
      >
        <AiOutlineClose
          size={25}
          className="group-hover:-rotate-90 duration-300"
        />
      </button>

      <div className="mx-4 h-[22rem] md:h-80 ">
        <div className="h-16 flex flex-col rounded-lg bg-strong mt-2 items-center justify-between p-2">
          <h1 className="text-md uppercase font-medium">
            Detalles de la entrega
          </h1>

          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <HiMapPin size={20} color="#fff" />
              <h2 className="text-sm font-extralight">Calle 31C # 42B - 32</h2>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineTimer size={20} color="#fff" />
              <h2 className="text-sm font-extralight">30 min</h2>
            </div>
          </div>
        </div>

        <div className="my-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaShoppingCart size={25} className="text-amber-500" />
            <h2 className="text-sm font-medium uppercase">Carrito</h2>
          </div>
          <h2 className="text-sm font-extralight">Pedido ID #00001</h2>
        </div>

        <div className="overflow-hidden h-48 overflow-y-auto scroll flex flex-col gap-y-2">
          {itemCarrito?.length > 0 ? (
            itemCarrito.map(({img,cantidad,nombre,precio, id}) => <ItemProduct key={id} img={img} cantidad={cantidad} nombre={nombre} precio={precio} id={id} />)
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center gap-4">
                <p className="text-white/90 font-medium">Añade productos a tu carrito!</p>
                <BsBagX size={60} className="opacity-60" />
            </div>
            
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="w-12 h-12 bg-white/80 rounded-full -ml-6"></span>
        <span className="w-72 border-white/80  border-t-2 border-dashed"></span>
        <span className="w-12 h-12 bg-white/80  rounded-full -mr-6"></span>
      </div>

      <div className="mx-4 flex flex-col h-44 rounded-xl">
        <div className="flex items-center justify-between text-lg">
          <h2>Sub Total:</h2>
          <span>$ {totalPrecio}</span>
        </div>
        <div className="flex items-center justify-between text-lg">
          <h2>Costo de Envio:</h2>
          <span>$10.000</span>
        </div>

        <div className="flex mt-4 items-center justify-between text-lg font-bold border-t-2 border-white uppercase">
          <h2 className="mt-2">total:</h2>
          <span>$ {totalPrecio === 0 ? "0" : totalPrecio + 10000}</span>
        </div>

        <div className="flex items-center justify-center my-4">
          <Link href="/pedido" className="w-60 rounded-xl bg-primary border-2 border-text-primary shadow-lg flex justify-center items-center text-white/90 hover:bg-transparent duration-300 uppercase font-bold p-2">
            <p>Confirmar Orden</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
