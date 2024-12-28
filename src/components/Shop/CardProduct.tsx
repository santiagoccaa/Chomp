"use client";

import { FaEye } from "react-icons/fa";
import Image from "next/image";
import { useShop } from "@/hooks/useChomp";

interface ProductosProps {
  id: number
  img: string,
  nombre: string
  precio: number
  categoria_id: number
  ingredientes: string[]
  title: string
}

export default function CardProduct({ img, nombre, precio, id, categoria_id, ingredientes, title }: ProductosProps) {
  const { handleClickmodal, handleClickInforProduct, ClickAgregar, handleClickInfoModal } = useShop();

  const product = { img, nombre, precio, id };
  const productModal = { img, nombre, precio, id, categoria_id, ingredientes, title };

  return (
    <div className="relative overflow-hidden flex flex-col md:flex-row gap-4 h-96 md:h-44 w-auto bg-light text-white/90 border-2 border-white/80 rounded-lg shadow-lg m-2 group">
      {/* Imgen del producto */}
      <div className="md:w-48 w-full h-1/2 md:h-full bg-center relative">
        <Image
          src={`/productos/${img}.jpg`}
          width="400"
          height="400"
          alt="Imagen del producto"
          className="w-full h-full"
          priority
        />
        <button
          onClick={() => {
            handleClickmodal();
            handleClickInforProduct(product);
            handleClickInfoModal(productModal);
          }}
          type="button"
          className="hidden md:flex absolute top-0 -left-[100%] group-hover:left-0 w-full h-full items-center justify-center bg-strong opacity-70 duration-300 transition-all"
        >
          <FaEye size={40} color="#fff" strokeWidth={1.5} />
        </button>

        <button
          onClick={() => {
            handleClickmodal();
            handleClickInforProduct(product);
            handleClickInfoModal(productModal);
          }}
          type="button"
          className="md:hidden absolute top-2 right-2 shadow-2xl rounded-full flex items-center justify-center w-14 h-14 bg-strong"
        >
          <FaEye size={40} color="#fff" strokeWidth={1.5} />
        </button>
      </div>
      {/* Descripcion del producto */}
      <div className="flex flex-col md:justify-center mx-4 md:mx-0">
        <h1 className="text-md font-bold mt-2 md:mt-0">{nombre}</h1>
        <p className="text-sm font-light my-2 w-full md:w-4/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-col md:flex-row gap-2 md:text-sm text-md">
          <p className="font-bold text-text-primary text-xl flex items-center gap-2"><span className="text-lg text-white/90">$</span>{precio}</p>
        </div>
      </div>

      {/* Boton para comprar */}
      <button
        onClick={() => ClickAgregar(product)}
        type="button"
        className="absolute bottom-4 right-4 p-2 flex text-sm font-bold text-white/90 px-4 items-center justify-center rounded-2xl border-2 border-text-primary bg-primary hover:bg-transparent duration-300"
      >
        Comprar
      </button>
    </div>
  );
}
